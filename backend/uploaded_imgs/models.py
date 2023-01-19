from django.db import models
from authentication.models import User

class Uploaded_img(models.Model):
    img_name = models.CharField(max_length=255)
    img_size = models.FloatField(blank=True)
    upload_date = models.DateTimeField(blank=True)
    img_description = models.TextField(auto_created=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
# Create your models here.
