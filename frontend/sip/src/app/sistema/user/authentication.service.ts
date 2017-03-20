import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../app.config';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    contentHeader: Headers = new Headers({"Content-Type": "application/json"});
    constructor(private http: Http, private config: AppConfig) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('User'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.config.apiUrl + '/api/system/system-token/', JSON.stringify({ username: username, password: password }), {headers: this.contentHeader })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    console.log(response.json())
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('User', JSON.stringify({
                        'username': username,
                        token: token,
                        email: response.json().email,
                        full_name: response.json().full_name
                    }));
                    console.log(localStorage)
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('User');
    }
}
