import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
    imports:[BrowserModule],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})

export class CoreModule { }