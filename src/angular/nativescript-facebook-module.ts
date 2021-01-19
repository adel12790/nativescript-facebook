import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./nativescript-facebook-directives";

import { LoginButton, ShareButton, SendButton } from "../";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class NativeScriptFacebookModule { }

registerElement("FacebookLoginButton", () => LoginButton);
registerElement('FacebookShareButton', () => ShareButton);
registerElement('FacebookSendButton', () => SendButton);
