from types import SimpleNamespace
from django.contrib.auth.models import User
from django.test import TestCase

from ecat.util.cart import Cart
from ecat.views import addOrder
from ecat.models import Merch, Order

class TestSession(dict):
    pass

# Create your tests here.
class addOrderTestCase(TestCase):
    """Тест проверки создания заказа"""
    cart = None
    request = SimpleNamespace()
    user = User()
    def setUp(self):
        merch = Merch()
        merch.title="testTitle"
        merch.description="testDescription"
        merch.price=1000
        merch.quantity=10
        merch.save()
        self.user.save()

        self.request.user = self.user
        self.request.session = TestSession()
        self.cart = Cart(self.request)
        self.cart.add(merch.id)
    
    def test_adding_order(self):
        addOrder(self.request)
        self.assertEqual(len(Order.objects.all()), 1)
    

    