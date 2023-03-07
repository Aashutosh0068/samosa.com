from flask import Flask, jsonify
from mongo import connectDb

app = Flask(__name__)

@app.route('/')
def homepage():
    return jsonify('Hello_Foodies')

@app.route('/samosas')
def allSamosa():
    AllSamosas = connectDb()
    return jsonify(AllSamosas)

if __name__ == "__main__":
    app.run(debug=True)
  