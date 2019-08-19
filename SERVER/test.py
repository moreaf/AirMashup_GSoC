# settings.py
from dotenv import load_dotenv
import os
load_dotenv()

print('http://'+os.getenv("VUE_APP_SERVER_IP")+':'+os.getenv("VUE_APP_SERVER_PORT"))
