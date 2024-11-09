const MoodAnalyser = require('./MoodAnalyser');

test("", () => {
    const moodAnalyser = new MoodAnalyser("I am in any Mood");
    const result = moodAnalyser.analyseMood();
    console.log(result);  
    expect(result).toBe("Happy");
    
});

test("should return 'Sad' when the message contains a sad keyword", () => {
    const moodAnalyser = new MoodAnalyser("I am in Sad Mood.");
    const result = moodAnalyser.analyseMood(); 
    console.log(result); 
    expect(result).toBe("Sad");
    
});

test('should return "Neutral" for an empty message', () => {
    const moodAnalyser = new MoodAnalyser();
    expect(moodAnalyser.analyseMood()).toBe("Neutral");
});

test('should return "Happy" for null input', () => {
    const moodAnalyser = new MoodAnalyser(null);
    expect(moodAnalyser.analyseMood()).toBe("Happy");
});


