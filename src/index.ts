import express from 'express';
const LAUNCHDARKLY_KEY = '';
const PATH_TO_BLUE_PAGE = __dirname + '/views/blue.html';
const PATH_TO_GREEN_PAGE = __dirname + '/views/green.html';

(async () => {
    const app = express();
    const launchDarklyService: ILaunchDarklyService = new LaunchDarklyService(LAUNCHDARKLY_KEY);
    app.get('/', (req, res, next) => {
        if (launchDarklyService.getVariation(...)) { //
            res.sendFile(PATH_TO_BLUE_PAGE);
        } else {
            res.sendFile(PATH_TO_GREEN_PAGE);
        }
    })
    app.listen(3000);
})()