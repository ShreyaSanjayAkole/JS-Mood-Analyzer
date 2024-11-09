class MoodAnalyser {
    constructor(message = "") {
      this.message = message;
    }

    analyseMood() {
      try {
        
        if (this.message == null || typeof this.message !== "string") {
              throw new Error("Invalid mood message");
          }
        const happyKeywords = ["happy", "joy", "any","excited", "pleased", "delighted"];
        const sadKeywords = ["sad", "unhappy", "upset", "down", "depressed"];
    
        const lowerCaseMessage = this.message.toLowerCase();
    
        if (happyKeywords.some(word => lowerCaseMessage.includes(word))) {
          return "Happy";
        }
    
        if (sadKeywords.some(word => lowerCaseMessage.includes(word))) {
          return "Sad";
        }

        return "Neutral";
      }catch (error) {
        return "Happy";
    }
  }
}

if (typeof window !== "undefined") {
    const userMessage = prompt("How are you feeling today?");
    const moodAnalyser = new MoodAnalyser(userMessage);
    console.log(`Mood: ${moodAnalyser.analyseMood()}`);
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined"){
  module.exports = MoodAnalyser;
}
  
  