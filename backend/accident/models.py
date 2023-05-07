from django.db import models

# Create your models here.
class Severity(models.Model):
    User_Id = models.CharField(max_length=100, default="char")
    # Severity = models.IntegerField(default=0)
    Start_Time = models.CharField(max_length=100, default="char")
    End_Time = models.CharField(max_length=100, default="char")
    Start_Lat = models.FloatField(default=0)
    Start_Lng = models.FloatField(default=0)
    End_Lat = models.FloatField(default=0)
    End_Lng = models.FloatField(default=0)
    Distance = models.FloatField(default=0)
    Discription = models.CharField(max_length=100, default="char")
    Number = models.FloatField(default=0)
    Street = models.CharField(max_length=100, default="char")
    Side = models.CharField(max_length=100, default="char")
    City = models.CharField(max_length=100, default="char")
    County = models.CharField(max_length=100, default="char")
    State = models.CharField(max_length=100, default="char")
    Zipcode = models.CharField(max_length=100, default="char")
    Country = models.CharField(max_length=100, default="char")
    Timezone = models.CharField(max_length=100, default="char")
    Airport_Code = models.CharField(max_length=100, default="char")
    Weather_Timestamp = models.CharField(max_length=100, default="char")
    Temperature = models.FloatField(default=0)
    Wind_Chill = models.FloatField(default=0)
    Humidity = models.FloatField(default=0)
    Pressure = models.FloatField(default=0)
    Visibility = models.FloatField(default=0)
    Wind_Direction = models.CharField(max_length=100, default="char")
    Wind_Speed = models.FloatField(default=0)
    Precipitation = models.FloatField(default=0)
    Weather_Condition = models.CharField(max_length=100, default="char")
    Amenity = models.BooleanField(default=False)
    Bump = models.BooleanField(default=False)
    Crossing = models.BooleanField(default=False)
    Give_Way = models.BooleanField(default=False)
    Junction = models.BooleanField(default=False)
    No_Exit = models.BooleanField(default=False)
    Railway = models.BooleanField(default=False)
    Roundabout = models.BooleanField(default=False)
    Station = models.BooleanField(default=False)
    Stop = models.BooleanField(default=False)
    Traffic_Calming = models.BooleanField(default=False)
    Traffic_Signal = models.BooleanField(default=False)
    Turning_Loop = models.BooleanField(default=False)
    Sunrise_Sunset = models.CharField(max_length=100, default="char")
    Civil_Twilight = models.CharField(max_length=100, default="char")
    Nautical_Twilight = models.CharField(max_length=100, default="char")
    Astronomical_Twilight = models.CharField(max_length=100, default="char")
    # Month = models.IntegerField()
    # Year = models.IntegerField()
    # Hour = models.IntegerField(default=0)
    # Weekday = models.IntegerField(default=0)
    # Weather_TimestampMonth = models.FloatField(default=0)
    # Weather_TimestampYear = models.FloatField(default=0)
    # Weather_TimestampHour = models.FloatField(default=0)
    # Weather_TimestampWeekday = models.FloatField(default=0)

    def __str__(self):
        return self.End_Lat
    

class Coordinates(models.Model):
    User_Id = models.CharField(max_length=100, default="char")
    Severity = models.IntegerField(default=0)
    Start_Time = models.CharField(max_length=100, default="char")
    End_Time = models.CharField(max_length=100, default="char")
    Start_Lat = models.FloatField(default=0)
    Start_Lng = models.FloatField(default=0)
    End_Lat = models.FloatField(default=0)
    End_Lng = models.FloatField(default=0)
    Distance = models.FloatField(default=0)
    Discription = models.CharField(max_length=100, default="char")
    Number = models.FloatField(default=0)
    Street = models.CharField(max_length=100, default="char")
    Side = models.CharField(max_length=100, default="char")
    City = models.CharField(max_length=100, default="char")
    County = models.CharField(max_length=100, default="char")
    State = models.CharField(max_length=100, default="char")
    Zipcode = models.CharField(max_length=100, default="char")
    Country = models.CharField(max_length=100, default="char")
    Timezone = models.CharField(max_length=100, default="char")
    Airport_Code = models.CharField(max_length=100, default="char")
    Weather_Timestamp = models.CharField(max_length=100, default="char")
    Temperature = models.FloatField(default=0)
    Wind_Chill = models.FloatField(default=0)
    Humidity = models.FloatField(default=0)
    Pressure = models.FloatField(default=0)
    Visibility = models.FloatField(default=0)
    Wind_Direction = models.CharField(max_length=100, default="char")
    Wind_Speed = models.FloatField(default=0)
    Precipitation = models.FloatField(default=0)
    Weather_Condition = models.CharField(max_length=100, default="char")
    Amenity = models.BooleanField(default=False)
    Bump = models.BooleanField(default=False)
    Crossing = models.BooleanField(default=False)
    Give_Way = models.BooleanField(default=False)
    Junction = models.BooleanField(default=False)
    No_Exit = models.BooleanField(default=False)
    Railway = models.BooleanField(default=False)
    Roundabout = models.BooleanField(default=False)
    Station = models.BooleanField(default=False)
    Stop = models.BooleanField(default=False)
    Traffic_Calming = models.BooleanField(default=False)
    Traffic_Signal = models.BooleanField(default=False)
    Turning_Loop = models.BooleanField(default=False)
    Sunrise_Sunset = models.CharField(max_length=100, default="char")
    Civil_Twilight = models.CharField(max_length=100, default="char")
    Nautical_Twilight = models.CharField(max_length=100, default="char")
    Astronomical_Twilight = models.CharField(max_length=100, default="char")

    def __str__(self):
        return self.End_Lat


TYPE_CHOICES = (
    ("Univariate continuous data analysis" , "Univariate continuous data analysis"),
    ("Univariate categorical data analysis" , "Univariate categorical data analysis"),
    ("Bivariate categorical vs. categorical data analysis" , "Bivariate categorical vs. categorical data analysis"),
    ("Region-wise data analysis" , "Region-wise data analysis"),
    ("With time, data analysis" , "With time, data analysis"),
    ("Weather conditions, data analysis" , "Weather conditions, data analysis"),
    ("Continuous input, categorical output data analysis" , "Continuous input, categorical output data analysis"),
)

class Graph(models.Model):
    type = models.CharField(max_length=100,choices=TYPE_CHOICES, default="char")
    img = models.ImageField(upload_to='images/', default='images/None/no-img.jpg')

    def __str__(self):
        return self.type