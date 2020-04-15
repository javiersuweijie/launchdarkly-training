import LaunchDarklyClient, { LDUser, LDClient } from 'launchdarkly-node-server-sdk';

export interface ILaunchDarklyService {
    getVariation(flagName: string, user: LDUser, defaultValue: boolean): Promise<boolean>;
}

export class LaunchDarklyService implements ILaunchDarklyService {
    private launchDarklyClient: LDClient;
    constructor(
        private apiKey: string
    ) { 
    } 

    // implement the interface here
    
}