import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  id = "";
  productData: any;
  editProduct: any;
  error = "";
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getOneProduct();
    this.editProduct = { name: "", qty: "", price: "" };
  }

  getOneProduct() {
    let observable = this._httpService.oneProduct(this.id);
    observable.subscribe((data) => {
      this.productData = data;
    });
  }

  onEdit() {
    let observable = this._httpService.editProduct(this.id, this.editProduct);
    observable.subscribe((data: any) => {
      if (data.error) {
        this.error = data.error.errors.name.message;
        this._router.navigate([`products/${this.id}/edit`]);
      } else {
        this.getOneProduct();
        this._router.navigate(["products"]);
      }
    });
  }
}
