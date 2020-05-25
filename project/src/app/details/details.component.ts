import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  productID: string;
  productData: any;
  error = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.productID = this.route.snapshot.paramMap.get("id");
    this.getOneProduct();
  }

  getOneProduct() {
    let observable = this.httpService.oneProduct(this.productID);
    observable.subscribe((data) => {
      this.productData = data;
    });
  }

  onDelete(id) {
    const observable = this.httpService.deleteProduct(id);
    observable.subscribe((data) => {
      this.router.navigate(["products"]);
    });
  }
}
