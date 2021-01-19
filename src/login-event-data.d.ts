import { EventData } from "@nativescript/core/data/observable";
import { LoginResponse } from "./login-response";

export declare interface LoginEventData extends EventData {
    error: Error;
    loginResponse: LoginResponse;
}