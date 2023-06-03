from django.db import models


class Tag(models.Model):
    name = models.CharField(verbose_name="tag")


class Good(models.Model):
    name = models.CharField(verbose_name="good's name", max_length=300)
    about = models.TextField(verbose_name="about good", blank=True)
    tag = models.ManyToManyField(Tag, verbose_name="good's tags", blank=True, on_delete=models.PROTECT)
    image = models.ImageField(verbose_name="good's image", blank=True)

class Cart(models.Model):
    goods = models.ManyToOneRel(Good, on_delete=models.PROTECT)
    filled_image = models.ImageField(verbose_name="filled cart image")
    profile = models.IntegerField()
    created_date = models.DateTimeField(verbose_name="cart created-on date")
