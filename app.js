const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//const greetings = ['Im good you little piece of love', 'doing good home boy', 'leave me alone'];
const greetings = ['Okay, we will check your shipping'];
const greetings2 = ['Okay, please fill out the item damage form'];
const greetings3 = ['Okay, please fill in the return form'];
const greetings4 = ['Okay, please fill in the order cancellation form'];
const greetings5 = ['Okay, please fill in the reset account form'];
const greetings6 = ['Are you sure?'];
const greetings7 = ['Okay, please fill in the account verification form'];
const greetings8 = ['Sorry for the inconvenience, can you inform me on whose behalf?'];
const greetings9 = ['Yes, sir, we will first check'];
const greetings10 = ['Yes, sir, we will first check'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
//recognition.continuous = true;

recognition.onstart = function(){
    console.log('voice is activated, you can to microphone');
};
recognition.onresult = function(event){
//console.log(event);
const current = event.resultIndex;
const transcript = event.results[current][0].transcript;
content.textContent = transcript;
readOutLoud(transcript); 
};

//add the listener to the btn
btn.addEventListener('click', ()=>{
recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'i dont know what you said';

    if(message.includes('order has not arrived')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }else if(message.includes('order has damaged')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings2[Math.floor(Math.random() * greetings2.length)];
        speech.text = finalText;
    }else if(message.includes('order did not match')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings3[Math.floor(Math.random() * greetings3.length)];
        speech.text = finalText;
    }else if(message.includes('I want to cancel order')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings4[Math.floor(Math.random() * greetings4.length)];
        speech.text = finalText;
    }else if(message.includes('I forgot password')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings5[Math.floor(Math.random() * greetings5.length)];
        speech.text = finalText;
    }else if(message.includes('I want to delete account')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings6[Math.floor(Math.random() * greetings6.length)];
        speech.text = finalText;
    }else if(message.includes('I want to verify account')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings7[Math.floor(Math.random() * greetings7.length)];
        speech.text = finalText;
    }else if(message.includes('transfer has not entered yet')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings8[Math.floor(Math.random() * greetings8.length)];
        speech.text = finalText;
    }else if(message.includes('Account balance has not been filled')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings9[Math.floor(Math.random() * greetings9.length)];
        speech.text = finalText;
    }else if(message.includes('cash purchases')){
        //const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        const finalText = greetings10[Math.floor(Math.random() * greetings10.length)];
        speech.text = finalText;
    }
    //speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}