import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middlewares/auth';
import AvailableController from './app/controllers/AvailableController';
import AppointmentController from './app/controllers/AppointmentController';
import FileController from './app/controllers/FileController';
import NotificationController from './app/controllers/NotificationController';
import ProviderController from './app/controllers/ProviderController';
import SessionController from './app/controllers/SessionController';
import ScheduleController from './app/controllers/ScheduleController';
import UserController from './app/controllers/UserController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.get('/schedule', ScheduleController.index);

export default routes;
