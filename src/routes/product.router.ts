import express, { Request, Response } from 'express';

export const productRouter = express.Router();

productRouter.get('/test', (req: Request, res: Response): void => {
    res.json({
        success: true,
        message: 'It worked',
    });
});