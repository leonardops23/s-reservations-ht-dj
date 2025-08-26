from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .forms import PropertyForm
from .models import Property
from .serailizers import PropertySerializer


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def property_list(request):
    properties = Property.objects.all()
    serializer = PropertySerializer(properties, many=True)
    return JsonResponse({
        'data': serializer.data,
    })

@api_view(['POST', 'FILES'])
def create_property(request):
    form = PropertyForm(request.POST, request.FILES)

    if form.is_valid():
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()
        return JsonResponse({
            'data': PropertySerializer(property).data,
        })
    else:
        print('form.errors', form.errors, form.non_field_errors())
        return JsonResponse({
            'error': form.errors,
        })
