from flask import Flask
from flask_cors import CORS
from resources.cpu import cpu_app
from resources.ram import ram_app
from resources.gpu import gpu_app
 
app = Flask(__name__)
CORS(app)
@app.route("/", methods=['GET'])
def index():
    return "Hello World!"

app.register_blueprint(cpu_app)
app.register_blueprint(ram_app)
app.register_blueprint(gpu_app)

if __name__ == '__main__':
    app.run(debug=True)