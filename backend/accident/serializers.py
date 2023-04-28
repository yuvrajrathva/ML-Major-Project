from rest_framework import serializers
from .models import Severity, Coordinates


class SeveritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Severity
        fields = '__all__'


class CoordinatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coordinates
        fields = '__all__'