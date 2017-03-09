/**
 * Created by zoriana.kovacs on 20/12/16.
 */


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app.component';

import  '../external-js/javascript-exercises.js';
import  '../external-ts/typescript-exercises.ts';

@NgModule({
    imports: [ BrowserModule ], // because it's a web application and it runs in the browser
    declarations: [ App],
    bootstrap: [ App ]
})

export class AppModule {
}