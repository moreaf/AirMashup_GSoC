doc = open('./doc còpia.kml','r')
content = doc.read().split('<Point>')
for x in range(1, len(content) -1):
	content[x] = '<altitudeMode>relativeToGround</altitudeMode>' + content[x] 
result = '<Point>'.join(content)
dest = open('./doc còpia.kml','w')
dest.write(result)

doc = open('./doc còpia.kml','r')
content = doc.read().split('<LineString>')
for x in range(1, len(content) -1):
	content[x] = '<altitudeMode>relativeToGround</altitudeMode>' + content[x] 
result = '<LineString>'.join(content)
dest = open('./doc còpia.kml','w')
dest.write(result)
