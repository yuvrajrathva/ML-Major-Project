from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SeverityViewSet, CoordinatesViewSet, GraphViewSet

router = DefaultRouter()
router.register('graph', GraphViewSet)

urlpatterns = [
    path(r'', include(router.urls)),
    path('severity/', SeverityViewSet.as_view(), name = 'accident-predict'),
    path('coordinates/', CoordinatesViewSet.as_view(), name = 'coordinates-predict'),
    # path('graph/', GraphViewSet.as_view(), name = 'graph'),
]