from flask import Blueprint
import psutil
import json

cpu_app = Blueprint('cpu_app', __name__)

@cpu_app.route("/cpu")

def getCpuUsage():
    utilisation = psutil.cpu_percent()
    response = { 'used': utilisation, 'free': 100 - utilisation }
    return json.dumps(response)