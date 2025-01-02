from django.shortcuts import render
from .models import Hotel

# Create your views here.
def index(request):
    """ View function for home page of site """
    hotels = Hotel.objects.all()
    return render(request, 'index.html', {'hotels': hotels})

def hotel_detail(request, hotel_id):
    """ View function for hotel detail page """
    hotel = Hotel.objects.get(pk=hotel_id)
    return render(request, 'hotel_detail.html', {'hotel': hotel})
