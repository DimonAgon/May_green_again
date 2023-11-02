from django.shortcuts import render

from .models import *


def gardensite(request):
    plants = Plant.objects.all()
    context = {'plants': plants}
    return render(request, r'gardensite.html', context)

