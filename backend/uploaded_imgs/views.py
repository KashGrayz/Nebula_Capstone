from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from external_imgs.models import External_img
from external_imgs.serializers import ExternalImageSerializer

from saved_imgs.serializers import Saved_ImgSerializer
from .models import Uploaded_img
from .serializers import Uploaded_imgSerializer
from saved_imgs.models import Saved_Img

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_uploads(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = Uploaded_imgSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        u_image = Uploaded_img.objects.filter(user_id=request.user.id)
        serializer = Uploaded_imgSerializer(u_image, many=True)
        return Response(serializer.data)
# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_stuff(request):
    if request.method == 'GET':
        image_1 = Uploaded_img.objects.filter(user_id=request.user.id)
        serializer1 = Uploaded_imgSerializer(image_1, many=True)
        image_2 = Saved_Img.objects.filter(user_id=request.user.id)
        serializer2 = Saved_ImgSerializer(image_2, many=True)
        image_3 = External_img.objects.filter(user_id=request.user.id)
        serializer3 = ExternalImageSerializer(image_3, many=True)
        custom_response = {
            "uploaded_imgs":serializer1.data,
            "saved_imgs":serializer2.data,
            "external_imgs":serializer3.data,
        }
        return Response(custom_response)
