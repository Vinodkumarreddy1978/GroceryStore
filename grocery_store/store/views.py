from rest_framework import generics
from django.contrib.auth.models import User
from .models import Product
from .serializers import ProductSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserLoginView(generics.GenericAPIView):
    def post(self, request):
        from django.contrib.auth import authenticate
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'error': 'Invalid credentials'}, status=400)
