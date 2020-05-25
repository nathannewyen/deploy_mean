import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  getProducts() {
    return this._http.get("/show");
  }

  addProduct(newproduct) {
    return this._http.post("/add", newproduct);
  }

  oneProduct(id) {
    return this._http.get(`/show/${id}`);
  }

  editProduct(id, editproduct) {
    return this._http.put(`/edit/${id}`, editproduct);
  }

  deleteProduct(id) {
    return this._http.delete(`/delete/${id}`);
  }
}
