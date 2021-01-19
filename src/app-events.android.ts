import * as application from"@nativescript/core/application";
let androidApplication;
let appEventsLogger;
export function initAnalytics() {
    androidApplication = application.android;
    appEventsLogger = com.facebook.appevents.AppEventsLogger.newLogger(androidApplication.context.getApplicationContext());
}

export function logEvent(name: string, parameters?: any) {
    if (name === undefined) {
        throw ("Argument 'name' is missing");
    }

    const bundle = new android.os.Bundle();

    if (parameters !== undefined) {
       bundleParameters(bundle, parameters);
    }

    appEventsLogger.logEvent(name, bundle);
}

export function logEventValue(name: string, value: number, parameters?: any) {
    if (name === undefined || value === undefined) {
        throw ("Argument 'name' or 'value' is missing");
    }

    console.log('name', name, 'value', value, 'param', parameters);
    const bundle = new android.os.Bundle();

    bundle.putString('_valueToSum', String(value));

    if (parameters !== undefined) {
        bundleParameters(bundle, parameters);
    }

     appEventsLogger.logEvent(name, bundle);

}

function bundleParameters(bundle: any, parameters: any) {
    for (let p in parameters) {
        let param = parameters[p];
        if (param.value !== undefined) {
            bundle.putString(param.key, param.value);
        }
    }
}
