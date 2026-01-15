import json
from django.http import JsonResponse
from django.http.request import split_domain_port
from django.shortcuts import redirect, render
from django.views.decorators.http import require_POST
from django.views.generic import DetailView, TemplateView
from el_pagination.decorators import page_template

from lk.util import sendMessageWithOrder
from ecat.util.cart import Cart
from ecat.models import Merch, Order, OrderItems

# Create your views here.
def addOrder(request):
    """Обработчик добавления заказа"""
    cart= Cart(request)
    user = request.user
    order = Order()
    order.customer = user
    order.save()

    for key, item in cart.cart.items():
        product = OrderItems.objects.create(order = order, merch = Merch.objects.get(id=key), quantity = item['quantity'])
        product.save()
    
    cart.clear()
    sendMessageWithOrder(user.email, "Заказ оформлен", "Ваш заказ принят в обработку. Список заказов можно наблюдать на странице заказов в личном кабинете")
    return redirect("lk:orders")

@require_POST
def addToCart(request):
    """Обработчик добавления в корзину"""
    cart= Cart(request)
    id = json.loads(request.body.decode('utf-8'))["id"]
    remove = json.loads(request.body.decode('utf-8'))["remove"]
    cart.add(id) if remove == False else cart.add(id, quantity=-1)
    return JsonResponse({"cart_length":len(cart),
                         "new_length":cart.cart[id]['quantity'],
                         "new_sum":cart.get_total_price(),})

@require_POST
def addToCartMerchView(request):
    """Обработчик добавления в карзину из страницы товара"""
    cart= Cart(request)
    id = json.loads(request.body.decode('utf-8'))["id"]
    cart.add(id)
    return JsonResponse({"cart_length":len(cart),})

@require_POST
def removeFromCart(request):
    """Обработчик удаления из корзины"""
    cart= Cart(request)
    id = json.loads(request.body.decode('utf-8'))["id"]
    print(id)
    cart.removeById(id)
    return JsonResponse({"result":"success",
                         "new_sum":cart.get_total_price(),})

class CartView(TemplateView):
    """Страница представления корзины"""
    template_name="ecat/cart_view.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context["merch"] = Merch.objects.get(pk=self.kwargs["uuid"])
        context["cart"] = Cart(self.request)
        context["host"] = split_domain_port(self.request.get_host())[0] 
        return context
    

class MerchView(DetailView):
    """Страница товара"""
    template_name="ecat/merch_view.html"
    model = Merch

    def get_object(self):
        return Merch.objects.get(pk=self.kwargs["uuid"])

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context["merch"] = Merch.objects.get(pk=self.kwargs["uuid"])
        context["cart"] = Cart(self.request)
        context["host"] = split_domain_port(self.request.get_host())[0] 
        return context
    

@page_template('ecat/merch_list_page.html')
def MerchPageView(request, template='ecat/merch_list.html', extra_context=None):
    """Страница товаров"""
    context = {
        'merch_list' : Merch.objects.all(),
        "cart": Cart(request),
        "host": split_domain_port(request.get_host())[0] 
    }
    if extra_context is not None:
        context.update(extra_context)
    return render(request, template, context)