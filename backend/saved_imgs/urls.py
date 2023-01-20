from django.urls import path
from saved_imgs import views

urlpatterns = [
    path('', views.user_saved_imgs),
]