import MoodAnalyser from './MoodAnalyser.js';
import { MoodAnalysisException, ErrorType } from './MoodAnalysisException.js';

class MoodAnalyserFactory {
    
    static createMoodAnalyser(className, ...args) {
        try {
            if (className === 'MoodAnalyser') {
                return new MoodAnalyser(...args);  
            } else {
                throw new MoodAnalysisException("No such class found", ErrorType.CLASS_NOT_FOUND);
            }
        } catch (error) {
            if (error instanceof TypeError) {
                throw new MoodAnalysisException("Constructor parameters are incorrect", ErrorType.METHOD_NOT_FOUND);
            }
            throw error;
        }
    }
}

export default MoodAnalyserFactory;
