
import MoodAnalyser from './MoodAnalyser.js';
import { MoodAnalysisException, ErrorType } from './MoodAnalysisException.js';

class MoodAnalyserFactory {
    static createMoodAnalyser(message = null) {
        try {
            // If message is provided, call the constructor with parameter
            if (message !== null) {
                return Reflect.construct(MoodAnalyser, [message]);
            }
            // If no message, call the default constructor
            return Reflect.construct(MoodAnalyser, []);
        } catch (error) {
            if (error instanceof TypeError) {
                throw new MoodAnalysisException("No Such Method Error", ErrorType.NO_SUCH_METHOD);
            } else {
                throw new MoodAnalysisException("No Such Class Error", ErrorType.NO_SUCH_CLASS);
            }
        }
    }
}

export default MoodAnalyserFactory;
