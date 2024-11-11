const MoodAnalyser = require('./MoodAnalyser');

const { MoodAnalysisException, ErrorType } = require('./MoodAnalysisException');


test('should return "Happy" for a happy message', () => {
        const moodAnalyser = new MoodAnalyser("I am feeling so happy and joyful!");
        expect(moodAnalyser.analyseMood()).toBe("Happy");
});

    test('should return "Sad" for a sad message', () => {
        const moodAnalyser = new MoodAnalyser("I am feeling very sad and down.");
        expect(moodAnalyser.analyseMood()).toBe("Sad");
    });

    test('should throw MoodAnalysisException for null mood', () => {
        const moodAnalyser = new MoodAnalyser(null);
        expect(() => moodAnalyser.analyseMood()).toThrowError(new MoodAnalysisException("Mood cannot be null", ErrorType.NULL));
    });

    test('should throw MoodAnalysisException for empty mood', () => {
        const moodAnalyser = new MoodAnalyser("");
        expect(() => moodAnalyser.analyseMood()).toThrowError(new MoodAnalysisException("Mood cannot be empty", ErrorType.EMPTY));
    });

    test('Given NULL Mood Should Throw MoodAnalysisException', () => {
        const moodAnalyser = new MoodAnalyser(null);
        
        expect(() => moodAnalyser.analyseMood()).toThrow(MoodAnalysisException);
        try {
            moodAnalyser.analyseMood();
        } catch (e) {
            expect(e.errorType).toBe(ErrorType.NULL);
            expect(e.message).toBe("Mood cannot be null");
        }
    });

    test('Given Empty Mood Should Throw MoodAnalysisException indicating Empty Mood', () => {
        const moodAnalyser = new MoodAnalyser("");
        
        expect(() => moodAnalyser.analyseMood()).toThrow(MoodAnalysisException);
        try {
            moodAnalyser.analyseMood();
        } catch (e) {
            expect(e.errorType).toBe(ErrorType.EMPTY);
            expect(e.message).toBe("Mood cannot be empty");
        }
    });

