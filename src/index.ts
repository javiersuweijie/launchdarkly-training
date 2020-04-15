import express from 'express';
import { LaunchDarklyService, ILaunchDarklyService } from './services/launch-darkly';
const LAUNCHDARKLY_KEY = 'sdk-d4a1f109-b43e-4ecb-a544-eb9299c2d31c';
const PATH_TO_BLUE_PAGE = __dirname + '/views/blue.html';
const PATH_TO_GREEN_PAGE = __dirname + '/views/green.html';

(async () => {
    const app = express();
    const launchDarklyService: ILaunchDarklyService = new LaunchDarklyService(LAUNCHDARKLY_KEY);
    app.get('/', async (req, res, next) => {
        const flag = await launchDarklyService.getVariation('launchdarkly-training.hands-on', {
            key: 'default'
        }, false);
        console.log(flag);
        if (flag) {
            res.sendFile(PATH_TO_GREEN_PAGE);
        } else {
            res.sendFile(PATH_TO_BLUE_PAGE);
        }
    })
    app.listen(3000);
})()