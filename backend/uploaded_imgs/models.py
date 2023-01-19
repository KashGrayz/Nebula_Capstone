from django.db import models
from authentication.models import User

class Uploaded_img(models.Model):
    img_name = models.CharField(max_length=100)
    upload_date = models.DateTimeField(blank=True)
    img_description = models.TextField(auto_created=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="uploaded_imgs", null=True)

    def __str__(self):
        return self.img_name
# Create your models here.
