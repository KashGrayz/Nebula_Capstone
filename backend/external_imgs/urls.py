from django.urls import path
from external_imgs import views

urlpatterns = [
    path('', views.app_external_images),
]