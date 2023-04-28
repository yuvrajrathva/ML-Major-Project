from django.db import models

# Create your models here.
class Severity(models.Model):
    End_Lat = models.FloatField()
    End_Lng = models.FloatField()
    Distance = models.FloatField()
    Side = models.CharField(max_length=100)
    State = models.CharField(max_length=100)
    Timezome = models.CharField(max_length=100)
    Temperature = models.FloatField()
    Humidity = models.FloatField()
    Pressure = models.FloatField()
    Wind_Direction = models.CharField(max_length=100)
    Wind_Speed = models.FloatField()
    Precipitation = models.FloatField()
    Weather_Condition = models.CharField(max_length=100)
    Crossing = models.BoolField()
    Give_Way = models.BoolField()
    Junction = models.BoolField()
    Station = models.BoolField()
    Traffic_Signal = models.BoolField()
    Sunrise_Sunset = models.CharField(max_length=100)
    Civil_Twilight = models.CharField(max_length=100)
    Nautical_Twilight = models.CharField(max_length=100)
    Astronomical_Twilight = models.CharField(max_length=100)
    Month = models.IntegerField()
    Year = models.IntegerField()
    Hour = models.IntegerField()
    Weekday = models.IntegerField()
    Weather_TimestampMonth = models.FloatField()
    Weather_TimestampYear = models.FloatField()
    Weather_TimestampHour = models.FloatField()
    Weather_TimestampWeekday = models.FloatField()

    def __str__(self):
        return self.End_Lat
    

class Coordinates(models.Model):
    End_Lat = models.FloatField()
    End_Lng = models.FloatField()
    Distance = models.FloatField()
    Side = models.CharField(max_length=100)
    State = models.CharField(max_length=100)
    Timezome = models.CharField(max_length=100)
    Temperature = models.FloatField()
    Pressure = models.FloatField()
    Visibility = models.FloatField()
    Wind_Direction = models.CharField(max_length=100)
    Wind_Speed = models.FloatField()
    Weather_Condition = models.CharField(max_length=100)
    Crossing = models.BoolField()
    Junction = models.BoolField()
    Station = models.BoolField()
    Stop = models.BoolField()
    Traffic_Signal = models.BoolField()
    Sunrise_Sunset = models.CharField(max_length=100)
    Civil_Twilight = models.CharField(max_length=100)
    Nautical_Twilight = models.CharField(max_length=100)
    Astronomical_Twilight = models.CharField(max_length=100)
    Year = models.IntegerField()
    Weather_TimestampMonth = models.FloatField()
    Weather_TimestampYear = models.FloatField()
    Weather_TimestampHour = models.FloatField()
    Weather_TimestampWeekday = models.FloatField()

    def __str__(self):
        return self.End_Lat
