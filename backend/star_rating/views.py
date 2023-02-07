from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Star_rating
from .serializers import Star_RatingSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_ratings(request):
    if request.method == "POST":
        serializer = Star_RatingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "GET":
        s_ratings = Star_rating.objects.filter(user_id=request.user.id)
        serializer = Star_RatingSerializer(s_ratings, many=True)
        return Response(serializer.data)