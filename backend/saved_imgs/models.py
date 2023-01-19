from django.db import models
from authentication.models import User

# Create your models here.

class Saved_Img(models.Model):
    img_name = models.CharField(max_length=255)
    upload_date = models.DateTimeField(auto_now_add=True)
    img_description = models.TextField(max_length=255)
