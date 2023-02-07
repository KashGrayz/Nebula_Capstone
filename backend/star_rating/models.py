from django.db import models
from authentication.models import User

class Star_rating(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    nasa_id = models.CharField(max_length=255)
    rating = models.IntegerField(max_length=10)

# Create your models here.
