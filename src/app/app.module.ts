import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ShowDelComponent } from './category/show-del/show-del.component';
import { AddUpdateComponent } from './category/add-update/add-update.component';
import { ShareService } from './share.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { AddProductComponent } from './product/add-product/add-product.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ShowDelComponent,
    AddUpdateComponent,
    ProductComponent,
    ShowProductComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
