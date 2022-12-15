import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { validateReqSchema } from '.';
import { CoursePutController } from '../controllers/CoursePutController';
import container from '../dependency-injection';

export const register = (router: Router) => {
  const reqSchema = [
    body('id').exists().isString(),
    body('name').exists().isString(),
    body('duration').exists().isString()
  ];

  const controller: CoursePutController = container.get('Apps.mooc.controllers.CoursePutController');
  router.put('/courses/:id', reqSchema, validateReqSchema, (req: Request, res: Response) => controller.run(req, res));
};
