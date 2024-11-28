
import { MoodAnalysisException, ErrorType } from './MoodAnalysisException.js';

class MoodAnalyserFactory {
    static setField(instance, fieldName, value) {
        
        if (!Reflect.has(instance, fieldName)) {
            throw new MoodAnalysisException(`No such field: ${fieldName}`, ErrorType.FIELD_NOT_FOUND);
        }
        Reflect.set(instance, fieldName, value);
    }

    static invokeMethod(instance, methodName) {
        
        if (typeof instance[methodName] !== 'function') {
            throw new MoodAnalysisException(`No such method: ${methodName}`, ErrorType.METHOD_NOT_FOUND);
        }
        return Reflect.apply(instance[methodName], instance, []);
    }
}


module.exports = MoodAnalyserFactory;
