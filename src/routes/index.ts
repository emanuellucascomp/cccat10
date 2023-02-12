import express from 'express';
import { Pool } from 'pg';
import SalesController from '../controller/SalesController';
import SalesRepository from '../repository/SalesRepository';
import SalesService from '../service/SalesService';
import SalesRouter from './SalesRouter';

export const routes = express.Router();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sales',
    password: 'admin123',
    port: 5432,
})

const salesRepository = new SalesRepository(pool)
const salesService = new SalesService(salesRepository)
const salesController = new SalesController(salesService)
const salesRouter = new SalesRouter(salesController);

routes.use(salesRouter.router);
