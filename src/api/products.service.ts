import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "@envs/environment.development";
import { Product } from "models/product.interface";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductService {
    public products = signal<Product[]>([]);

    private readonly _http = inject(HttpClient);
    private readonly _endPoint = environment.apiURL;

    constructor() {
        this.getProducts();
    }

    public getProducts(): Observable<Product[]> {
        return this._http
          .get<Product[]>(`${this._endPoint}/products/?sort=desc`)
          .pipe(tap((data: Product[]) => this.products.set(data)));
      }

    public getProductcById(id: number) {
        return this._http.get<Product>(`${this._endPoint}/products/${id}`);
    }
}