from django import forms


class LoginForm(forms.Form):
    """Форма логина"""
    template_name = "lk/login_form.html"

    email = forms.EmailField(widget=forms.EmailInput(attrs={"class":"form-control"}), label="Электронная почта", max_length=100)
    password = forms.CharField(widget=forms.PasswordInput(attrs={"class":"form-control"}), label="Пароль", max_length=100)

class RegisterForm(forms.Form):
    """Фориа регистрации"""
    template_name = "lk/register_form.html"

    email = forms.EmailField(widget=forms.EmailInput(attrs={"class":"form-control"}), label="Электронная почта", max_length=100)
    password = forms.CharField(widget=forms.PasswordInput(attrs={"class":"form-control"}), label="Пароль", max_length=100)

class EmailConfirmForm(forms.Form):
    """Форма подтверждения электронной почты"""
    template_name = "lk/email_confirm_form.html"

    email = forms.EmailField(widget=forms.HiddenInput(), label="",  max_length=100)
    password = forms.CharField(widget=forms.HiddenInput(), label="", max_length=100)
    code = forms.CharField(widget=forms.PasswordInput(attrs={"class":"form-control"}), label="Код из письма", max_length=6)