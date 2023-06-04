from django.db import models


class Tag(models.Model):
    name = models.CharField(verbose_name="tag", max_length=120)


class Good(models.Model):
    name = models.CharField(verbose_name="good's name", max_length=300)
    about = models.TextField(verbose_name="about good", blank=True)
    tag = models.ManyToManyField(Tag, verbose_name="good's tags", blank=True)
    image = models.ImageField(verbose_name="good's image", blank=True)

    def __str__(self):
        return self.name


class Cart(models.Model):
    filled_image = models.ImageField(verbose_name="filled cart image")
    profile = models.IntegerField()
    created_date = models.DateTimeField(verbose_name="cart created-on date")


class ordered_good(models.Model):
    good = models.ForeignKey(Good, verbose_name="oredered good", on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, verbose_name="order cart", on_delete=models.CASCADE)

