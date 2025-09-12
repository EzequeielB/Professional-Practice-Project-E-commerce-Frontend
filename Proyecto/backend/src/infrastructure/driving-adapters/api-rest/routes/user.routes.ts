import { Router } from 'express';
import { buildAuthControllers } from '../../../config/authControllerFactory';

const { registerController, 
        logoutController, 
        loginController,
        refreshTokenController, } = buildAuthControllers();

const authRouter = Router();

authRouter.post('/register', registerController.handle.bind(registerController));
authRouter.post('/logout', logoutController.handle.bind(logoutController));
authRouter.post('/login', loginController.handle.bind(loginController));
authRouter.post('/refresh-token', refreshTokenController.handle.bind(refreshTokenController));

export default authRouter;
