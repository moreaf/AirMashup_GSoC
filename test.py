import sched, time
import simplekml
from opensky_api import *
import pandas as pd
import numpy as np
import sys
from functionLibrary import *
from MAIN import *

aircraft = getKML()

print(aircraft[0])
getPosition1s((aircraft[0]))
print(aircraft[0])
