from flask import Flask, request, jsonify, send_from_directory
import os

app = Flask(__name__)

# Sample keyboard switch data
switches = [
    {
        "name": "Cherry MX Red",
        "type": "linear",
        "actuationForce": 45,
        "preTravel": 2.0
    },
    {
        "name": "Cherry MX Brown",
        "type": "tactile",
        "actuationForce": 55,
        "preTravel": 2.0
    },
    {
        "name": "Cherry MX Blue",
        "type": "clicky",
        "actuationForce": 60,
        "preTravel": 2.2
    },
    {
        "name": "Gateron Yellow",
        "type": "linear",
        "actuationForce": 50,
        "preTravel": 2.0
    },
    {
        "name": "Kailh Box White",
        "type": "clicky",
        "actuationForce": 50,
        "preTravel": 1.8
    },
    {
        "name": "Zealio V2",
        "type": "tactile",
        "actuationForce": 65,
        "preTravel": 2.0
    },
    {
        "name": "Alpaca Linear",
        "type": "linear",
        "actuationForce": 62,
        "preTravel": 2.0
    },
    {
        "name": "Holy Panda",
        "type": "tactile",
        "actuationForce": 67,
        "preTravel": 2.4
    }
]

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/filter_switches', methods=['POST'])
def filter_switches():
    data = request.json
    
    actuation_force = float(data.get('actuationForce', 0))
    switch_type = data.get('switchType', 'all')
    pre_travel = float(data.get('preTravel', 0))
    
    filtered_switches = switches
    
    # Filter by switch type if not "all"
    if switch_type != 'all':
        filtered_switches = [s for s in filtered_switches if s['type'] == switch_type]
    
    # Filter by actuation force (allow ±10gf tolerance)
    filtered_switches = [s for s in filtered_switches if abs(s['actuationForce'] - actuation_force) <= 10]
    
    # Filter by pre-travel (allow ±0.3mm tolerance)
    filtered_switches = [s for s in filtered_switches if abs(s['preTravel'] - pre_travel) <= 0.3]
    
    return jsonify(filtered_switches)

if __name__ == '__main__':
    app.run(debug=True, port=5000) 