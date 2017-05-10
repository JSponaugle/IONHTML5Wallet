import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {routing} from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
