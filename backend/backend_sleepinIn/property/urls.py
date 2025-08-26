from django.urls import path
from . import api

urlpatterns = [
    path('', api.property_list, name='api_property_list'),
    path('create', api.create_property, name='api_create_property'),
]
