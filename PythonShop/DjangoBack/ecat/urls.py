from django.urls import path

from . import views

app_name="ecat"
urlpatterns = [
     path("merch/<uuid:uuid>", views.MerchView.as_view()),
     path("", views.MerchPageView, name="main"),
     path("cart", views.CartView.as_view()),
     path("addToCart", views.addToCart),
     path("removeFromCart", views.removeFromCart),
     path("addToCartMerchView", views.addToCartMerchView),
     path("addorder", views.addOrder)
]