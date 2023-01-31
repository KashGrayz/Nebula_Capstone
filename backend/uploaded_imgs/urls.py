from django.urls import path
from uploaded_imgs import views

urlpatterns = [
    path('', views.user_uploads),
    path('get_data/', views.get_data)
]