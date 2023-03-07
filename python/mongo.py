import pymongo

def connectDb():
    client = pymongo.MongoClient("mongodb+srv://Samosas:eatpeRepeat69@cluster0.7a0t84a.mongodb.net/?retryWrites=true&w=majority")
    db = client['samosa']
    col = db['samosas']
    x = col.find({})
    return list(x)