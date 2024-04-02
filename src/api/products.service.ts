import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@envs/environment.development";
import { Product } from "models/product.interface";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductService {
    public products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

    private readonly _endPoint = environment.apiURL;

    constructor(private _http: HttpClient) {
        this.getProducts().subscribe(products => this.products.next(products));
    }

    public getProducts(): Observable<Product[]> {
        return this._http.get<Product[]>(`${this._endPoint}/products/?sort=desc`);
    }

    public getProductById(id: number): Observable<Product> {
        return this._http.get<Product>(`${this._endPoint}/products/${id}`);
    }
}