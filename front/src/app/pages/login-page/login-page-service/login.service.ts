import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: Http) { }

  public authUser(obj: any): any {
    return this._http.post('http://localhost:8080/login', obj).pipe(
      map(res => res.json(),
  (err: any) => {
          this.handleError(err);
        }
      ),
    );
  }

  handleError(err: any): any {
    return Observable.throw(err || 'Error 500');
  }
}
