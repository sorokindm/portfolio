from ast import arg
import base64
from datetime import datetime
import uuid
from django.contrib.auth.models import User
from django.db import models

from ecat.util.enums import IMAGE_LOCATION_CHOICES

# Create your models here.
class Merch(models.Model):
    """Модель товара"""

    def __str__(self):
        return f"{self.title} : {self.id}"
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=256)
    description = models.CharField(max_length=1024)
    price = models.FloatField()
    quantity = models.IntegerField()

class MerchPhoto(models.Model):
    """Модель фотографии товара"""

    def __str__(self):
        return f"{self.merch.title} : {self.imgurl}"
    
    def save(self, **kwargs):
        if not self.imgurl:
            self.imgurl = self.getUrl()
        return super().save(**kwargs)
    
    def getUrl(self):
        return f"/{base64.urlsafe_b64encode(self.merch.id.bytes)}/{base64.urlsafe_b64encode(self.id.bytes)}.jpg"
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    merch = models.ForeignKey(Merch, on_delete=models.CASCADE)
    imgurl = models.CharField(max_length=256)
    type = models.IntegerField(choices=IMAGE_LOCATION_CHOICES, default="SECONDARY")


class Order(models.Model):
    """Модель заказа"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4,editable=False)
    date = models.DateTimeField(default=datetime.now())
    customer = models.ForeignKey(User, on_delete=models.DO_NOTHING)

class OrderItems(models.Model):
    """Модель элементов заказа"""
    pk = models.CompositePrimaryKey("order_id", "merch_id")
    order = models.ForeignKey(Order,on_delete=models.CASCADE)
    merch = models.ForeignKey(Merch, on_delete=models.CASCADE)
    quantity = models.IntegerField()
