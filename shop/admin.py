from django.contrib import admin

from .models import Good, Tag, Plant, Cart, ordered_good

for model in (Good, Tag, Cart, Plant, ordered_good):
    admin.site.register(model)