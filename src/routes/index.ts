import express from 'express';
import { salesRouter } from './sales.router';

export const routes = express.Router();

routes.use(salesRouter);
