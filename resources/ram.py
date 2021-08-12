from flask import Blueprint
import psutil
import json


ram_app = Blueprint('ram_app', __name__)

@ram_app.route("/ram")

def getRAMUsage():
    memory = psutil.virtual_memory()
    response = { 'used': memory.used, 'free': memory.free }
    return json.dumps(response)