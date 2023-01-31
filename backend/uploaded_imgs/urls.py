from django.urls import path
from uploaded_imgs import views

urlpatterns = [
    path('', views.user_uploads),
    path('get_stuff/', views.get_stuff)
]