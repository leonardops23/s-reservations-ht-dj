from django.db import models

# Create your models here.
class Hotel(models.Model):
    """ Model for a hotel """
    name = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    description = models.TextField()
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.IntegerField()

    def __str__(self):
        return self.name
    


class Room(models.Model):
    """ Model for a room in a hotel """
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    room_number = models.IntegerField()
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    capacity = models.IntegerField()

    def __str__(self):
        return f'{self.hotel.name} - Room {self.room_number}'


class Booking(models.Model):
    """ Model for a booking """
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    check_in = models.DateField()
    check_out = models.DateField()
    guest_name = models.CharField(max_length=200)
    guest_email = models.EmailField()

    def __str__(self):
        return f'{self.room} - {self.check_in} to {self.check_out}'
