import { NgModule } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
// import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app.routes';
import { AppComponent } from "./app.component";
import { appConfig } from "./app.config";
import { MaterialModule } from "./AngularMaterialModule";
import { RouterModule } from "@angular/router";

bootstrapApplication(AppComponent, appConfig)

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        FormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    providers: [],
})
export class AppModule {  }