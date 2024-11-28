import MoodAnalyser from './MoodAnalyser';
import MoodAnalyserFactory from './MoodAnalyserFactory';
import { MoodAnalysisException, ErrorType } from './MoodAnalysisException';


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


    test("TC 5.1: Given MoodAnalyser Class Name When Proper Should Return MoodAnalyser Object", () => {
        const moodAnalyser1 = new MoodAnalyser("I am feeling happy");
        const moodAnalyser2 = MoodAnalyserFactory.createMoodAnalyser("I am feeling happy");

        expect(moodAnalyser1.equals(moodAnalyser2)).toBe(true);
    });

    test("TC 5.2: Given Class Name When Improper Should Throw MoodAnalysisException", () => {
        try {
            MoodAnalyserFactory.createMoodAnalyser("InvalidClass");
        } catch (error) {
            expect(error).toBeInstanceOf(MoodAnalysisException);
            expect(error.errorType).toBe(ErrorType.CLASS_NOT_FOUND);
            expect(error.message).toBe("No Such Class Error");
        }
    });

    test("TC 5.3: Given Class When Constructor Not Proper Should Throw MoodAnalysisException", () => {
        try {
            
            MoodAnalyserFactory.createMoodAnalyser(12345);
        } catch (error) {
            expect(error).toBeInstanceOf(MoodAnalysisException);
            expect(error.errorType).toBe(ErrorType.METHOD_NOT_FOUND);
            expect(error.message).toBe("No Such Method Error");
        }
    });


    test("UC 6: Given Happy Message Using Reflection When Proper Should Return 'Happy' Mood", () => {
        const moodAnalyser = MoodAnalyserFactory.createMoodAnalyser("I am feeling happy");
        const mood = MoodAnalyserFactory.invokeMethod(moodAnalyser, "analyseMood");
        expect(mood).toBe("Happy");
    });

    test("TC 6.1: Given Happy Message When Improper Method Should Throw MoodAnalysisException", () => {
        const moodAnalyser = MoodAnalyserFactory.createMoodAnalyser("I am feeling happy");

        try {
            MoodAnalyserFactory.invokeMethod(moodAnalyser, "incorrectMethodName");
        } catch (error) {
            expect(error).toBeInstanceOf(MoodAnalysisException);
            expect(error.errorType).toBe(ErrorType.METHOD_NOT_FOUND);
            expect(error.message).toBe("No Such Method Error");
        }
    });

    

    test('Set Happy Message with Reflector Should Return HAPPY', () => {
        const moodAnalyser = new MoodAnalyser();
        MoodAnalyserFactory.setField(moodAnalyser, "message", "I am very happy today!");
        const result = MoodAnalyserFactory.invokeMethod(moodAnalyser, "analyseMood");
        expect(result).toBe("Happy");
    });
    
    test('Set Field When Improper Should Throw Exception with No Such Field', () => {
        const moodAnalyser = new MoodAnalyser();
        expect(() => MoodAnalyserFactory.setField(moodAnalyser, "invalidField", "test"))
            .toThrowError(new MoodAnalysisException("No such field: invalidField", ErrorType.FIELD_NOT_FOUND));
    });
    
    test('Setting Null Message with Reflector Should Throw Exception', () => {
        const moodAnalyser = new MoodAnalyser();
        MoodAnalyserFactory.setField(moodAnalyser, "message", null);
        expect(() => MoodAnalyserFactory.invokeMethod(moodAnalyser, "analyseMood"))
            .toThrowError(new MoodAnalysisException("Mood cannot be null", ErrorType.NULL));
    });
