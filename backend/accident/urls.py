from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import SeverityViewSet, CoordinatesViewSet

router = DefaultRouter()

urlpatterns = [
    path('severity/', SeverityViewSet.as_view(), name = 'accident-predict'),
    path('coordnates/', CoordinatesViewSet.as_view(), name = 'coordinates-predict'),
]