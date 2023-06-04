from django.shortcuts import render

from models import *


def gardensite(request):
    plants = Plant.objects.all()
    return render(request, r'gardensite.html', plants)