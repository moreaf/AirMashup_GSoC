import xml.etree.ElementTree as ET
root = ET.parse('test.kml').getroot()



b2tf = root.find("")
print(b2tf)
