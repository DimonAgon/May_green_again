from django.contrib import admin

from .models import Good,  Cart, ordered_good

for model in (Good, Cart, ordered_good):
    admin.site.register(model)