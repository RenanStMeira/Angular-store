import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@envs/environment.development";
import { User } from "models/users.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {
    public users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

    private readonly _endPoint = environment.apiURL;

    constructor(private _http: HttpClient) {
        this.getUsers().subscribe(users => this.users.next(users));
    }

    public getUsers(): Observable<User[]> {
        return this._http.get<User[]>(`${this._endPoint}/products/?sort=desc`);
    }

    public postCreateUser(user: User): Observable<User> {
        return this._http.post<User>(`${this._endPoint}/users`, user);
    }

    public login(username: string, password: string): Observable<any> {
        return this._http.post<any>(`${this._endPoint}/auth/login`, { username, password });
    }
}