import json
from datetime import datetime, timedelta
from random import randrange,randint
d1 = datetime.strptime('1/1/2006 1:30 PM', '%m/%d/%Y %I:%M %p')
d2 = datetime.strptime('1/1/2023 4:50 AM', '%m/%d/%Y %I:%M %p')
Hastags = ["#love","#fashion","#beautiful","#art","#photography","#happy","#picoftheday","#cute","#follow","#tbt","#followme","#nature","#like4like","#travel","#style","#repost","#summer","#selfie","#me","#friends","#fitness","#girl","#food","#fun"]
def random_date(start, end):
    delta = end - start
    int_delta = (delta.days * 24 * 60 * 60) + delta.seconds
    random_second = randrange(int_delta)
    return start + timedelta(seconds=random_second)

def generate_tweet(username,text,date,like,comment):
    return """
        {
            "username": "%s",
            "text": "%s",
            "date": "%s",
            "likes": "%d",
            "comments": %s
        },"""%(username,text,date,like,comment)
        
def generate_comment(array_users,array_comments,number):
    
    tam_users = len(array_users) - 1
    tam_comments = len(array_comments) -1
    
    
    tweet_comments = []
    for i in range(number):
        r1 = randint(0,tam_users)
        r2 = randint(0,tam_comments)
        nombre = array_users[r1]
        contenido = array_comments[r1]
        tweet_comments.append( """
        {
            "username_comment": "%s",
            "text_comment": "%s",
            "date_comment": "%s",
        }"""%(nombre,contenido["Text"],random_date(d1,d2)))
        
    return tweet_comments



array_users = []
array_comments = []

with open("users.json") as file:
    data = json.load(file)
    
    for user in data:
        array_users.append(user["username"])
       
        
with open("tweets.json") as file:
    data_comments = json.load(file)
    
    for comment in data_comments:
        array_comments.append(comment)
        

Cantidad_Tweets = 5

Document_acum = "["

tam_users = len(array_users)-1
tam_comments = len(array_comments)-1

for publicacion in range(Cantidad_Tweets):
    nombre = array_users[publicacion % len(array_users)]
    Hastags_acu =" "
    random_hashtags = randint(1,10)
    for i in range(random_hashtags):
        Hastags_acu += Hastags[randint(0,len(Hastags)-1)] + " "
    
    contenido = array_comments[randint(0,tam_comments)]
    comentarios = generate_comment(array_users,array_comments,randint(1,10))
    
    Document_acum += generate_tweet(nombre,contenido["Text"]+Hastags_acu,random_date(d1,d2),randint(0,100),comentarios)
    
Document_acum += "\n]"
f = open("DATOS_TWITER.json", "w")
f.write(Document_acum)
f.close()