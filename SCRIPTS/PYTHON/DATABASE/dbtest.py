import pymongo

myclient = pymongo.MongoClient('mongodb://localhost:27017/') #We create the database object

mydb = myclient['mydatabase'] #Create a database

mycol = mydb['customers'] #Create a collection into my mydatabase

mydict = [{"name": "Eric", "address": "Highway 37"}, {"name": "Albert", "address": "Highway 37"}, {"name": "Ivan", "address": "Highway 37"}]

x = mycol.insert_many(mydict)

myquery = {'name':'Albert'}

mydoc = mycol.find()

print(mydoc)
