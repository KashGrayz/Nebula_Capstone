from django.db import models


class Profile(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    profile_picture = models.ImageField(default='default.jpg', upload_to="profile")
# Create your models here.
