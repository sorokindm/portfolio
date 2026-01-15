from datetime import datetime
import secrets
from django.db import models

# Create your models here.
class EmailConfirmCode(models.Model):
    """Модель бд для кодов подтверждения"""
    id = models.CharField(primary_key=True, default="", editable=False, max_length=100) 
    date = models.DateTimeField(default=datetime.now())
    code = models.IntegerField(default=secrets.randbelow(1000000))