from rest_framework import serializers
from .models import External_img


class ExternalImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = External_img
        fields = ["id", "user", "nasa_id",]
        depth = 1
    