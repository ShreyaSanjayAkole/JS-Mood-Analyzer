// Enum for Error Types
export const ErrorType = {
    NULL: "NULL",
    EMPTY: "EMPTY",
    CLASS_NOT_FOUND: "CLASS_NOT_FOUND",
    METHOD_NOT_FOUND: "METHOD_NOT_FOUND",
};


export class MoodAnalysisException extends Error {
    constructor(message, errorType) {
        super(message);
        this.name = "MoodAnalysisException";
        this.errorType = errorType;
    }
}