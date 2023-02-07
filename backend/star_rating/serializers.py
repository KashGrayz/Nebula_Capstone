from rest_framework import serializers
from .models import Star_rating

class Star_RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Star_rating
        fields = ["id", "user", "nasa_id", "rating"]
        depth = 1