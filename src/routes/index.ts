import express from 'express';
import { Pool } from 'pg';
import SalesController from '../controller/SalesController';
import CouponsRepository from '../repository/CouponsRepository';
import SalesRepository from '../repository/SalesRepository';
import CouponsService from '../service/CouponsService';
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

const couponsRepository = new CouponsRepository(pool)
const salesRepository = new SalesRepository(pool)
const couponsService = new CouponsService(couponsRepository)
const salesService = new SalesService(salesRepository, couponsService)
const salesController = new SalesController(salesService)
const salesRouter = new SalesRouter(salesController);

routes.use(salesRouter.router);
