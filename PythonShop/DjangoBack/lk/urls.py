from django.urls import path

from . import views

app_name="lk"
urlpatterns = [
     path('login', views.LoginView.as_view(), name="login"),
     path('register', views.RegisterView.as_view()),
     path('lklogin', views.lklogin),
     path('lkregister', views.lkregister),
     path('lkemailconfirm',views.lkemailconfirm),
     path('logout', views.lklogout, name="logout"),
     path('orders', views.OrdersView.as_view(), name = "orders")
]