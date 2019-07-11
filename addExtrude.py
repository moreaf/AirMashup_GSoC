doc = open('./doc còpia.kml','r')
content = doc.read().split('<LineString>')
for x in range(1, len(content) -1):
	content[x] = '<extrude>1</extrude>' + content[x]
result = '<LineString>'.join(content)
dest = open('./doc còpia.kml','w')
dest.write(result)
