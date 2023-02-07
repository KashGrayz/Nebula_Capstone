from rest_framework import serializers
from .models import Star_rating

class StarRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Star_rating
        fields = ["id", "user", "nasa_id", "rating"]
        depth = 1