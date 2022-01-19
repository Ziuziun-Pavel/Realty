import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountRoutingModule } from "../account/account-routing.module";

@NgModule({
	imports: [CommonModule, AccountRoutingModule],
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
