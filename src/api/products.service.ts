import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "@envs/environment.development";
import { Product } from "models/product.interface";
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductService {
    public products = signal<Product[]>([]);

    private readonly _http = inject(HttpClient);
    private readonly _endPoint = environment.apiURL;

    constructor() {
        this.getProducts();
    }

    public getProducts(): void {
        this._http
        .get<Product[]>(`${this._endPoint}/products/?sort=desc`)
        .pipe(tap((data: Product[]) => this.products.set(data)))
        .subscribe();
    }

    public getProductcById(id: number) {
        return this._http.get<Product>(`${this._endPoint}/products/${id}`);
    }
}