from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/continents')
def get_continents():
    #response = requests.get('https://ipapi.co/json')
    data = {
        'NA': requests.get('https://api.countapi.xyz/get/mysite.com/2na').json()['value'],
        'SA': requests.get('https://api.countapi.xyz/get/mysite.com/1sa').json()['value'],
        'EU': requests.get('https://api.countapi.xyz/get/mysite.com/2eu').json()['value'],
        'AS': requests.get('https://api.countapi.xyz/get/mysite.com/2as').json()['value'],
        'AF': requests.get('https://api.countapi.xyz/get/mysite.com/1af').json()['value'],
        'OC': requests.get('https://api.countapi.xyz/get/mysite.com/1oc').json()['value'],
        'AN': requests.get('https://api.countapi.xyz/get/mysite.com/1an').json()['value']
    }
    return jsonify(data)

@app.route('/api/clicks')
def get_clicks():
    response = requests.get('https://api.countapi.xyz/get/mysite/good_click').json()['value']
    return jsonify(response)

@app.route('/api/counter')
def hit_clicks():
    response = requests.get('https://api.countapi.xyz/hit/mysite/good_click').json()['value']
    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)