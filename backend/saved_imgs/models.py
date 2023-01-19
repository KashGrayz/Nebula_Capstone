from django.db import models
from authentication.models import User

# Create your models here.

class Saved_Img(models.Model):
    img_name = models.CharField(max_length=255)
    img_size = models.IntegerField()
    upload_date = models.DateTimeField(auto_now_add=True)
    img_description = models.TextField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
