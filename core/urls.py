from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    # Include the hotels app's URLs
    path('', include('hotels.urls')),
]
