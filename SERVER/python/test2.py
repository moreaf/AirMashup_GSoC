import sched, time
import simplekml
from threading import Thread
from datetime import datetime
import time
import math




def print_shit():
    print('Hey there, this is working!')

s = sched.scheduler(time.time, time.sleep)

while True:
    s.enter(1, 1, print_shit)
    s.run()
