
import MoodAnalyser from './MoodAnalyser.js';
import { MoodAnalysisException, ErrorType } from './MoodAnalysisException.js';

class MoodAnalyserFactory {
    static createMoodAnalyser(message = null) {
        try {
            const args = message !== null ? [message] : [];
            return Reflect.construct(MoodAnalyser, args);
        } catch (error) {
            if (error instanceof TypeError) {
                throw new MoodAnalysisException("No Such Method Error", ErrorType.METHOD_NOT_FOUND);
            } else {
                throw new MoodAnalysisException("No Such Class Error", ErrorType.CLASS_NOT_FOUND);
            }
        }
    }

    static invokeMethod(object, methodName) {
        try {
           
            if (Reflect.has(object, methodName)) {
                return Reflect.apply(object[methodName], object, []);
            } else {
                throw new MoodAnalysisException("No Such Method Error", ErrorType.METHOD_NOT_FOUND);
            }
        } catch (error) {
            if (error instanceof MoodAnalysisException) {
                throw error;  
            } else {
                throw new MoodAnalysisException("No Such Method Error", ErrorType.METHOD_NOT_FOUND);
            }
        }
    }
}


export default MoodAnalyserFactory;
