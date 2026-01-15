from django.contrib import admin
from ecat import models

# Register your models here.

class MerchPhotoAdmin(admin.ModelAdmin):
        readonly_fields = ["imgurl"]

admin.site.register(models.Merch)
admin.site.register(models.MerchPhoto, MerchPhotoAdmin)
admin.site.register(models.Order)
