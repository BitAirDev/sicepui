import { Injectable }                    from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class APIManager {
    public token: string;
    private endPoint: string = 'http://localhost:3110/api/';

    constructor(protected http: HttpClient) {}

    get(url : string): Promise<any> {
        let httpHeaders = this.getHeaders();
        return this.http
                .get(this.endPoint + url, { headers: httpHeaders, observe: 'response' })
                .catch(this.processError)
                .pipe(map(res => { return res.body; }))
                .toPromise();
    }

    post(url, data) {
        let httpHeaders = this.getHeaders();
        return this.http
                .post(this.endPoint + url, data, { headers: httpHeaders, observe: 'response' })
                .catch(this.processError)
                .pipe(map(res => { return res.body; }))
                .toPromise();
    }

    put(url, data) {
        let httpHeaders = this.getHeaders();
        return this.http
                .put(this.endPoint + url, data, { headers: httpHeaders, observe: 'response' })
                .catch(this.processError)
                .pipe(map(res => { return res.body; }))
                .toPromise();
    }

    delete(url : string): Promise<any> {
        let httpHeaders = this.getHeaders();
        return this.http
                .delete(this.endPoint + url, { headers: httpHeaders, observe: 'response' })
                .catch(this.processError)
                .pipe(map(res => { return res.body; }))
                .toPromise();
    }

    setToken(token) {
        localStorage.setItem('ssid', token);
        this.token = token;
    }
    
    protected processError(err: HttpErrorResponse) {
        // console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        // Regresamos un objeto error genérico.
        return of<any>({body: {error: err.status}}); 
    }

    protected getHeaders() : HttpHeaders {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        if(this.token) {
            headers.append('Authorization', this.token);
        }
        return headers;
    };   
}