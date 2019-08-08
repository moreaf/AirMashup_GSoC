import requests


s = requests.get("https://opensky-network.org/api/states/all")
aircrafts = s.json()

print(aircrafts)
