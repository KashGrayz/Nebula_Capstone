from django.db import models
from authentication.models import User

# Create your models here.

class External_img(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    nasa_id = models.IntegerField()



