from flask import Blueprint
import psutil

gpu_app = Blueprint('gpu_app', __name__)

@gpu_app.route("/gpu")

def getGPUUsage():
    utilisation = psutil.cpu_percent()
    memory = psutil.virtual_memory()
    return { 'used': memory.used, 'free': memory.free }