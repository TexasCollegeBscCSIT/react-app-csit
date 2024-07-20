/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import HttpStatus from 'http-status-codes';
import { ZodError } from 'zod';

function buildError(err: any) {
    // Validation errors (Zod)
    if (err instanceof ZodError) {
        return {
            code: HttpStatus.BAD_REQUEST,
            message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
            details: err.issues.map((issue) => issue.message),
        };
    }

    // HTTP errors (Boom)
    if (err.isBoom) {
        return {
            code: err.output.statusCode,
            message: err.output.payload.message || err.output.payload.error,
            details: err.output.payload.validation || {} // Include details if available
        };
    }

    // Mongoose validation errors
    if (err.name === 'ValidationError') {
        return {
            code: HttpStatus.BAD_REQUEST,
            message: 'Validation error',
            details: Object.values(err.errors).map((e: any) => e.message),
        };
    }

    // Mongoose document not found
    if (err.name === 'DocumentNotFoundError') {
        return {
            code: HttpStatus.NOT_FOUND,
            message: 'Document not found',
        };
    }

    // Internal Server Error
    console.error('Internal Server Error:', err); // Enhanced logging for internal server errors
    return {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'An unexpected error occurred on the server. Please try again later.',
        details: err.message ? [err.message] : ["this is error"] // Include error message if available
    };
}

export default buildError;
