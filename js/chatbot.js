// chatbot.js

// Voice and text interaction chatbot
class ChatBot {
    constructor() {
        this.conversationHistory = [];
        this.recognition = null;
        this.synth = window.speechSynthesis;
        this.initSpeechRecognition();
    }

    // Initialize speech recognition
    initSpeechRecognition() {
        this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            this.handleUserInput(transcript);
        };
    }

    // Handle user input (both speech and text)
    handleUserInput(input) {
        this.conversationHistory.push({ user: input });
        this.generateResponse(input);
    }

    // Generate responses
    generateResponse(input) {
        let response = '';
        if (input.includes('grief')) {
            response = 'I’m sorry for your loss. It’s important to talk about your feelings.';
        } else {
            response = 'How can I help you today?';
        }

        this.conversationHistory.push({ bot: response });
        this.textToSpeech(response);
    }

    // Convert text to speech
    textToSpeech(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        this.synth.speak(utterance);
    }

    // Start listening for user input
    startListening() {
        this.recognition.start();
    }

    // Get conversation history
    getConversationHistory() {
        return this.conversationHistory;
    }
}

// Example usage
const chatbot = new ChatBot();

// Start listening for voice input
chatbot.startListening();

// Interface for text input (could be an HTML input element)
// const textInput = document.getElementById('text-input');
// textInput.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//         chatbot.handleUserInput(textInput.value);
//         textInput.value = '';
//     }
// });