
# Create an instance of Kml
kml = simplekml.Kml(open=1)

# Create a point named "The World" attached to the KML document with its coordinate at 0 degrees latitude and longitude.
# All the point's properties are given when it is constructed.
single_point = kml.newpoint(name="The World", coords=[(0.0,0.0,0.0)])

# Create a point for each city. The points' properties are assigned after the point is created
for callsign, lat, lon, alt in cities:
    pnt = kml.newpoint()
    pnt.name = callsign
    #pnt.description = "Time corresponding to 12:00 noon, Eastern Standard Time: {0}".format(time)
    pnt.coords = [(lon, lat, alt)]

# Save the KML
kml.save("KMLTEST.kml")