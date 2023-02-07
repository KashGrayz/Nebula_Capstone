from django.urls import path
from star_rating import views

urlpatterns = [
    path("", views.user_ratings)
    
]