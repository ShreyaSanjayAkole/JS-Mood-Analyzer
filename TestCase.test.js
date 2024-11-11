const MoodAnalyser = require('./MoodAnalyser');
import MoodAnalyserFactory from './MoodAnalyserFactory.js';
import MoodAnalyser from './MoodAnalyser.js';

const { MoodAnalysisException, ErrorType } = require('./MoodAnalysisException');

describe("UC1" , () => {
    test('should return "Happy" for a happy message', () => {
        const moodAnalyser = new MoodAnalyser("I am feeling so happy and joyful!");
        expect(moodAnalyser.analyseMood()).toBe("Happy");
    });

    test('should return "Sad" for a sad message', () => {
        const moodAnalyser = new MoodAnalyser("I am feeling very sad and down.");
        expect(moodAnalyser.analyseMood()).toBe("Sad");
    });
});

describe("UC2" , () => {
    test('should throw MoodAnalysisException for null mood', () => {
        const moodAnalyser = new MoodAnalyser(null);
        expect(() => moodAnalyser.analyseMood()).toThrowError(new MoodAnalysisException("Mood cannot be null", ErrorType.NULL));
    });

    test('should throw MoodAnalysisException for empty mood', () => {
        const moodAnalyser = new MoodAnalyser("");
        expect(() => moodAnalyser.analyseMood()).toThrowError(new MoodAnalysisException("Mood cannot be empty", ErrorType.EMPTY));
    });
});

describe("UC3" , () => {
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
});

describe("UC4", () => {
    test("TC 4.1: Given MoodAnalyser Class Name Should Return MoodAnalyser Object", () => {
        const moodAnalyser = MoodAnalyserFactory.createMoodAnalyser('MoodAnalyser');
        expect(moodAnalyser).toBeInstanceOf(MoodAnalyser);
    });

    test("TC 4.2: Given Class Name When Improper Should Throw MoodAnalysisException", () => {
        expect(() => {
            MoodAnalyserFactory.createMoodAnalyser('NonExistentClass');
        }).toThrowError(new MoodAnalysisException("No such class found", ErrorType.CLASS_NOT_FOUND));
    });

    test("TC 4.3: Given Class When Constructor Not Proper Should Throw MoodAnalysisException", () => {
        expect(() => {
            MoodAnalyserFactory.createMoodAnalyser('MoodAnalyser', 123); // Passing invalid parameter type
        }).toThrowError(new MoodAnalysisException("Constructor parameters are incorrect", ErrorType.METHOD_NOT_FOUND));
    });
});
    

    

    

