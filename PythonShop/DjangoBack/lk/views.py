
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.shortcuts import redirect, render
from django.views.decorators.http import require_POST
from django.views.generic import TemplateView

from ecat.util.cart import Cart
from ecat.models import Order
from lk.models import EmailConfirmCode
from lk.util import sendMessageWithCode
from lk.forms import EmailConfirmForm, LoginForm, RegisterForm

# Create your views here.
def lklogout(request):
    """Обработчик логаута"""
    if request.user.is_authenticated:
        logout(request)
    return redirect("ecat:main")

@require_POST
def lklogin(request):
    """Обработчик формы логина """

    email = request.POST.get("email")
    password = request.POST.get("password")

    data = {
        "email": email,
        "password": password,
    }

    form = LoginForm(data)

    if form.is_valid():
        user = authenticate(request=request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect("ecat:main")
        else:
            form.add_error(None, "Неверно введён логин или пароль")

    return render(request, "lk/login.html", {"form":form})

@require_POST
def lkregister(request):
    """Обработчик формы регистрации"""

    email = request.POST.get("email")
    password = request.POST.get("password")

    data = {
        "email": email,
        "password": password,
    }

    form = RegisterForm(data)

    if form.is_valid():
        code_entry, created = EmailConfirmCode.objects.update_or_create(id=email)
        code = code_entry.code
        sendMessageWithCode(email,"Код подтверждения", f"{code:06}")

        form_data= {
            "email": email,
            "password": password,
            "code": code,
        }
        confirm_form = EmailConfirmForm(form_data)

        #return redirect(EmailConfirmRegisterView.as_view(data=data))
        return render(request, "lk/email_confirm.html", {"form": confirm_form})
    else:
        return render(request, "lk/register.html", {"form":form})
    
@require_POST
def lkemailconfirm(request):
    """Обработчик формы кода подтверждения"""

    email = request.POST.get("email")
    password = request.POST.get("password")
    code = request.POST.get("code")

    data = {
        "email": email,
        "password": password,
        "code": code,
    }

    form = EmailConfirmForm(data)

    true_code = EmailConfirmCode.objects.get(id = email).code
    if int(code)!=true_code:
        form.add_error(None, "Неверно введён код")

    if form.is_valid():
        #save user and authenticate
        #redirect to main screen
        user = User.objects.create_user(username=email,email=email,password=password)
        user.set_password(password)
        user.save()

        return redirect("lk:login")
        #return render(request, "lk/email_confirm.html", {"data": data})
    else:
        return render(request, "lk/email_confirm.html", {"form":form})


class LoginView(TemplateView):
    """Страница логина"""
    template_name="lk/login.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        data = {
            "email": "",
            "password": "",
        }

        context["form"] = LoginForm(data)
        # context["merch"] = Merch.objects.get(pk=self.kwargs["uuid"])
        context["cart"] = Cart(self.request)
        return context
    
class OrdersView(TemplateView):
    """Страница заказов"""
    template_name="lk/orders.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        orders = Order.objects.filter(customer_id = self.request.user.id)
        data = []
        for order in orders:
            data.append({'order': order, 'items': list(order.orderitems_set.all()), 'datetime':order.date})
        
        print(data)

        context["orders"] = data
        # context["merch"] = Merch.objects.get(pk=self.kwargs["uuid"])
        context["cart"] = Cart(self.request)
        return context
    
class RegisterView(TemplateView):
    """Страница регистрации"""
    template_name="lk/register.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        data = {
            "email": "",
            "password": "",
        }
        context["form"] = RegisterForm(data)
        # context["merch"] = Merch.objects.get(pk=self.kwargs["uuid"])
        context["cart"] = Cart(self.request)
        return context
    
class EmailConfirmRegisterView(TemplateView):
    """Страница подтверждения почты"""
    template_name="lk/email_confirm.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        data = {
            "email": context.data.email,
            "password": context.data.password,
            "code": ""
        }
        context["form"] = EmailConfirmForm(data)
        # context["merch"] = Merch.objects.get(pk=self.kwargs["uuid"])
        context["cart"] = Cart(self.request)
        return context