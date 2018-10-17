//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


var messages = [], //array that hold the record of each string in chat
  lastUserMessage = "", //keeps track of the most recent input string from the user
  botMessage = "", //var keeps track of what the chatbot is going to say
  botName = 'Chatbot', //name of the chatbot
  talking = true; //when false the speach function doesn't work
//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  botMessage = "I'm confused"; //the default message

  if (lastUserMessage === 'hi' || lastUserMessage =='hello') {
    const hi = ['hi','howdy','hello']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === 'name') {
    botMessage = 'My name is ' + botName;
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {

  var apigClient = apigClientFactory.newClient({
       apiKey: ''
     });

  console.log(document.getElementById("chatbot").value)
  //if the message from the user isn't empty then run
  var user_message;
  var api = ""

   if (document.getElementById("chatbot").value != "") {
        user_message = document.getElementById("chatbot").value;
        document.getElementById("cnt1").value += user_message+'\n';
        document.getElementById("chatbot").value = "";
    }

    var params = {};
    var additionalParams = {};

    var body = {

             "message" : user_message
      };


    apigClient.chatbotPost(params,body,additionalParams)
    .then(function(result){
      // document.getElementById('out').innerHtml = result.data;
      document.getElementById("cnt1").value += result.data+'\n'+'\n';
      // document.getElementById('out').innerHtml.append(result.data);
      console.log(result.data)
    }).catch( function(result){
      
    });

    // $.ajax({
    //       type: "POST",
    //       data :JSON.stringify(u_message),
    //       url: api,
    //       headers: {
    //         'x-api-key' : ''
    //       },
          
    //       contentType: "application/json"
    //   }).done(function (res) {
    //      console.log('res', res);
    //      var mainDiv = document.getElementById("chatbot")
    //      var div1 = document.createElement("div")
    //      mainDiv.appendChild(div1)
    //      div1.innerHtml = res['message']
    //  });
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbot").placeholder = "";
}