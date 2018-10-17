import json

def lambda_handler(event, context):
    # TODO implement
    message = "No Idea..."
    if event['message'] == "Hi":
        message = "Hello"

    if event['message'] == "hi":
        message = "Hello"

    if event['message'] == "how are you?":
        message = "I am good"

    if event['message'] == "How are you?":
        message = "I am good"

    if event['message'] == "good?":
        message = "great!"

    if event['message'] == "Good?":
        message = "great!"


    if event['message'] == "Namaste":
        message = "Namaste"

    if event['message'] == "namaste":
        message = "Namaste"

    if event['message'] == "What is your name?":
        message = "My name is automatic chatbot"

    if event['message'] == "what is your name?":
        message = "My name is automatic chatbot"

    if event['message'] == "Bye":
        message = "Bye"

    if event['message'] == "bye":
        message = "Bye"

    return message
    
