import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authorizedSource = new BehaviorSubject<boolean>(false);
  authorized$: Observable<boolean> = this.authorizedSource.asObservable();

  constructor() { }

  logIn(): void {
    this.authorizedSource.next(true);
  }

  logOff(): void {
    this.authorizedSource.next(false);
  }
}
