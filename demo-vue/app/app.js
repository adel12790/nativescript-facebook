import Vue from "nativescript-vue";
import * as application from '@nativescript/core/application';
import Login from "./components/Login";

import {
    init,
    initAnalytics,
} from 'nativescript-facebook';

import FacebookPlugin from "nativescript-facebook/vue";
Vue.use(FacebookPlugin);

Vue.config.silent = true;

application.on(application.launchEvent, function (args) {
    init("1065835753932828");    
    initAnalytics();
});

new Vue({
    render: h => h('frame', [h(Login)])
}).$start();

