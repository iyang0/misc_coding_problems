#!/bin/python3
import bisect

# given a list of logs with the format("id timestamp action"),
# and a maxSpan which is an integer 
# which represents the maximum span between logging in and out,
# return an array of strings that denote user_ids of users who signed out in maxSpan seconds or less after signing in
# there will always be maximum 1 log in and log out per id
# the action will always either be "sign-in" or "sign-out"
# 
# e.g.
# logs = ["30 99 sign-in", "30 100 sign-out", "22 600 sign-in"]
# quickLogout(logs, 5)
# output: ["30"]

def quickLogout(logs, max_delta):
    # make a counter for user_id actions
    id_counter = {}
    id_list = []
    
    for log in logs:
        # loop through list of logs and add to array of actions in the counter  
        log_list = log.split(" ")
        log_id = log_list[0]
        log_timestamp = int(log_list[1])
        log_action = log_list[2]
        # if there is nothing in that counter entry, add dictionary with sign in and sign out
        if log_id not in id_counter:
            id_counter[log_id] = {'sign-in':None, 'sign-out':None}
        # add the timestamp to list of sign ins or sign outs for an id 
        id_counter[log_id][log_action] = log_timestamp
        
    for id in id_counter:
        if id_counter[id]['sign-in'] and id_counter[id]['sign-out']:
            #if a user has signed in and signed out
            #check if there is a sign out that is after a sign in within max_delta
            if (id_counter[id]['sign-out']-id_counter[id]['sign-in']) <= max_delta:
                #insert items in order via bisect's insort
                # to be sorted in numerical order
                bisect.insort(id_list,int(id))
    
    # must be list of strings
    return [str(n) for n in id_list]