from django.shortcuts import render
from joblib import load
import numpy as np

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

from .serializers import SeveritySerializer, CoordinatesSerializer, GraphSerializer
from .models import Severity, Coordinates, Graph

# model = load('./savedModels/model_customer.joblib')

class SeverityViewSet(APIView):
    queryset = Severity.objects.all()
    serializer_class = SeveritySerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = SeveritySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            test_data = np.array([serializer.data])
            # y_pred = model.predict(test_data)
            return Response(serializer.data)
        return Response(serializer.errors)
    

class CoordinatesViewSet(APIView):
    queryset = Coordinates.objects.all()
    serializer_class = CoordinatesSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = CoordinatesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
class GraphViewSet(viewsets.ModelViewSet):
    queryset = Graph.objects.all()
    serializer_class = GraphSerializer
    permission_classes = [AllowAny]

    # def get(self, request):
    #     serializer = GraphSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)