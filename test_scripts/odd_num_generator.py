

n = 20
odd_num = [i*2+1 for i in range(n)]

word = 'LuxPMsoft'

new_word = ''
for index,i  in enumerate(word):
    #print(index,i)

    new_word += i
    if not index == len(word) - 1:
        new_word += str(odd_num[0-(index+1)])

import json

def send_new_word():
    resp = {'newword': new_word}
    return json.dumps(resp)

print(send_new_word())
