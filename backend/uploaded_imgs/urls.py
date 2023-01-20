from django.urls import path
from uploaded_imgs import views

urlpatterns = [
    path('', views.user_uploads),
]