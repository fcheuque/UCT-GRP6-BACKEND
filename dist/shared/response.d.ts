export declare class ApiResponse<T = any> {
    statusCode: number;
    success: boolean;
    message: string;
    timestamp: string;
    data: T | null;
    error?: string;
    errors?: ValidationErrors;
    constructor(statusCode: number, success: boolean, message: string, timestamp: string, data?: T | null, error?: string, errors?: ValidationErrors);
}
export interface ValidationErrors {
    [property: string]: {
        message: string;
    };
}
