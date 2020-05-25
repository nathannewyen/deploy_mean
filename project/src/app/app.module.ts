import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ProductsListComponent } from "./products-list/products-list.component";
import { NewComponent } from "./new/new.component";
import { EditComponent } from "./edit/edit.component";
import { DetailsComponent } from "./details/details.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NewComponent,
    EditComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
