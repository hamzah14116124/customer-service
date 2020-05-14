const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
    const chatContainer = document.createElement("div");
    chatContainer.classList.add("chat-container");

    const chatBox = document.createElement("p");
    chatBox.classList.add("voice2text");

    const chatText = document.createTextNode(text);
    chatBox.appendChild(chatText);

    chatContainer.appendChild(chatBox);
    return chatContainer;
}
function addBotText(text){
    const chatContainer1 = document.createElement("div");
    chatContainer1.classList.add("chat-container");
    chatContainer1.classList.add("darker");

    const chatBox1 = document.createElement("p");
    chatBox1.classList.add("voice2text");

    const chatText1 = document.createTextNode(text);
    chatBox1.appendChild(chatText1);

    chatContainer1.appendChild(chatBox1);
    return chatContainer1;
}
function botVoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, i did not understand that.";
    
    if(message.includes('how are you')){
        speech.text = "I am fine, thanks. How are you?";
    }
    if(message.includes('fine')){
        speech.text = "Nice to hear that. How can i assist you today?";
    }
    if(message.includes('weather')){
        speech.text = "of course. Where are you currently?";
    }
    if(message.includes('London')){
        speech.text = "It is 18 degrees and sunny";
    }
    if(message.includes('order has not arrived')){
        speech.text = "Okay, we will check your shipping";
    }
    if(message.includes('order has damaged')){
        speech.text = "Okay, please fill out the item damage form";
    }
    if(message.includes('order did not match')){
        speech.text = "Okay, please fill in the return form";
    }
    if(message.includes('I want to cancel order')){
        speech.text = "Okay, please fill in the order cancellation form";
    }
    if(message.includes('I forgot password')){
        speech.text = "Okay, please fill in the reset account form";
    }
    if(message.includes('I want to delete account')){
        speech.text = "Are you sure?";
    }
    if(message.includes('I want to verify account')){
        speech.text = "Okay, please fill in the account verification form";
    }
    if(message.includes('transfer has not entered yet')){
        speech.text = "Sorry for the inconvenience, can you inform me on whose behalf?";
    }
    if(message.includes('Account balance has not been filled')){
        speech.text = "Yes, sir, we will first check";
    }
    if(message.includes('cash purchases')){
        speech.text = "Yes, sir, we will first check";
    }
    if(message.includes('sure')){
        speech.text = "Okay, we will delete your account";
    }
    if(message.includes('I want to cancel order')){
        speech.text = "Okay, please fill in the order cancellation form";
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () =>{
console.log('Voice activated');
};
recorder.onresult = (event) =>{
//console.log(event);
const resultIndex = event.resultIndex;
const transcript = event.results[resultIndex][0].transcript;
//voice2text.textContent = transcript;
var element = document.getElementById("container");
element.appendChild(addHumanText(transcript));
botVoice(transcript);
};
voice.addEventListener('click', () =>{
    recorder.start();
});