import express from 'express';
import { createSale } from '../controller/sales.controller';

export const salesRouter = express.Router();

salesRouter.post('/sales-order', createSale);