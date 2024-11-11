// Enum for Error Types
export const ErrorType = {
    NULL: "NULL",
    EMPTY: "EMPTY",
};


export class MoodAnalysisException extends Error {
    constructor(message, errorType) {
        super(message);
        this.name = "MoodAnalysisException";
        this.errorType = errorType;
    }
}