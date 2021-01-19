let application = require("tns-core-modules/application");
let iosApplication;
let appEventsLogger;
export function initAnalytics() {
    iosApplication = application.iosApplication;
    FBSDKAppEvents.activateApp();
}

export function logEvent(name: string, parameters?: any) {
    if (name === undefined) {
        throw ("Argument 'name' is missing");
    }

    if (parameters === undefined) {
        FBSDKAppEvents.logEvent(name);
    } else {
        const parametersDictionary = new (NSDictionary as any)(
            parameters.map(parameter => parameter.value),
            parameters.map(parameter => parameter.key));

        FBSDKAppEvents.logEventParameters(name, parametersDictionary);
    }
}

export function logEventValue(name: string, value: number, parameters?: any) {
    if (name === undefined || value === undefined) {
        throw ("Argument 'name' or 'value' is missing");
    }

    if(parameters !== undefined) {
        const parametersDictionary = new (NSDictionary as any)(
            parameters.map(parameter => parameter.value),
            parameters.map(parameter => parameter.key));

        FBSDKAppEvents.logEventValueToSumParameters(name, Number(value), parametersDictionary);

        return;
    }

    FBSDKAppEvents.logEventValueToSum(name, Number(value));
}