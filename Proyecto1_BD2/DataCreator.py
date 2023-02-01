import json
from datetime import datetime, timedelta
from random import randrange

def random_date(start, end):
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = randrange(int_delta)
    return start + timedelta(seconds=random_second)

def generate_tweet(username,text,date,like,comment):
    return """
        {{
            "username": "{}",
            "text": "{}",
            "date": "{}",
            "likes": "{}",
            "comments": "{}"
        }}""".format(username,text,date,like,comment)
        
def generate_comment(username,text,date):
    return """
        {{
            "username": "{}",
            "text": "{}",
            "date": "{}",
        }}""".format(username,text,date)

d1 = datetime.strptime('1/1/2006 1:30 PM', '%m/%d/%Y %I:%M %p')
d2 = datetime.strptime('1/1/2023 4:50 AM', '%m/%d/%Y %I:%M %p')


with open("Usuarios.json") as file:
    data = json.load(file)
    
    array_users = []
    for user in data:
        array_users.append(user["username"])
       
        
with open("tweets.json") as file:
    data_comments = json.load(file)
    
    array_comments = []
    for comment in data_comments:
        array_comments.append(comment)
        
       
    print(generate_tweet(array_users[0],"Hola",random_date(d1,d2),randrange(1000),[]))
    
    