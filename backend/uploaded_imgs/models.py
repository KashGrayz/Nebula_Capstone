from django.db import models
from authentication.models import User

def upload_to(instance, filename):
    return 'uploaded_imgs/{filename}'.format(filename=filename)

class Uploaded_img(models.Model):
    img_name = models.CharField(max_length=100)
    upload_date = models.DateField(blank=True)
    img_description = models.TextField(auto_created=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=upload_to, null=True)
# Create your models here.
