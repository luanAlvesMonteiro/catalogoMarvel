import { HeaderComponent } from './header/header.component';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ],
    declarations: [
       HeaderComponent,
    ],
    exports: [
        HeaderComponent,
       
    ],
    entryComponents:[
    ],
    providers:[
       // { provide: HTTP_INTERCEPTORS, useClass: ****, multi: true },
    ]
})
export class SharedModule { }