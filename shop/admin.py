from django.contrib import admin

from .models import Good, Plant,  Cart, ordered_good

for model in (Good, Cart, Plant, ordered_good):
    admin.site.register(model)