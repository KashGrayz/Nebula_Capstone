from rest_framework import serializers
from .models import Saved_Img

class Saved_ImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = Saved_Img
        fields = ['id', "img_name", "upload_date", "img_description", "user", "img_id", "href"]
        depth = 1

    img_id = serializers.IntegerField(write_only=True)
    