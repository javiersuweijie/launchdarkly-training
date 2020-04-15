
export interface IUserInterface {
    key: string
}

export interface ILaunchDarklyService {
    initialize(): Promise<undefined>;
    getVariation(flagName: string, user: IUserInterface, defaultValue: boolean): Promise<boolean>;
}

export class LaunchDarklyService implements ILaunchDarklyService {
    private launchDarklyClient;
    constructor(
        private apiKey: string
    ) { 
    } 

    // implement the interface here
    
}