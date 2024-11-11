import { MoodAnalysisException, ErrorType } from './MoodAnalysisException.js';


class MoodAnalyser {
    constructor(message = "") {
      this.message = message;
    }

    analyseMood() {
      try {
        
        if (typeof this.message !== "string") {
              throw new Error("Invalid mood message");
          }
        if (this.message === null) {
            throw new MoodAnalysisException("Mood cannot be null", ErrorType.NULL);
        }
        if (this.message.trim() === "") {
            throw new MoodAnalysisException("Mood cannot be empty", ErrorType.EMPTY);
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
        if (error instanceof MoodAnalysisException) {
            console.error(`${error.name}: ${error.message} (ErrorType: ${error.errorType})`);
            throw error;  // Rethrow for test cases to catch
        }
        else{
            return "Happy";
        }
        
    }
  }
  equals(other) {
    return other instanceof MoodAnalyser && this.message === other.message;
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
  
  