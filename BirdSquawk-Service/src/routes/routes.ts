import express, { Request, Response, Router } from 'express';

const router = express.Router();

router.get ('/api/birdsquawk/get', (req: Request, res: Response) => {
    console.log('Birdsquawk is working');
});

router.post('api/birdsquawk/post', (req: Request, res: Response) => {

});

export {router};