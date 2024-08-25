from django.contrib import admin
from django.urls import path
from store.views import ProductListView, UserCreateView, UserLoginView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # API Endpoints
    path('api/products/', ProductListView.as_view(), name='product-list'),
    path('api/register/', UserCreateView.as_view(), name='user-register'),
    path('api/login/', UserLoginView.as_view(), name='user-login'),

     path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

# If you want to add static and media files handling, you can do it like this:
from django.conf import settings
from django.conf.urls.static import static

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
