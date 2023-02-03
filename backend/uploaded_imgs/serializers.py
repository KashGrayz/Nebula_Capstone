from rest_framework import serializers
from .models import Uploaded_img

class Uploaded_imgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uploaded_img
        fields = ('id',"img_name", "upload_date", "img_description", "user", "image")
        depth = 1
    
