import launchDarklyClient, { LDClient, LDUser } from 'launchdarkly-node-server-sdk';

export interface ILaunchDarklyService {
    getVariation(flagName: string, user: LDUser, defaultValue: boolean): Promise<boolean>;
}

export class LaunchDarklyService implements ILaunchDarklyService {
    private launchDarklyClient:LDClient;
    constructor(
        private apiKey: string
    ) { 
        this.launchDarklyClient = launchDarklyClient.init(apiKey, {
            logger: console
        });
    } 

    async getVariation(flagName: string, user: LDUser, defaultValue: boolean) {
        if (!this.launchDarklyClient.initialized) {
            await this.launchDarklyClient.waitForInitialization();
        }
        return this.launchDarklyClient.variation(flagName, user, false);
    }
    
}