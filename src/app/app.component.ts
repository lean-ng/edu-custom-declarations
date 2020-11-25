import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading = false;
  authenticated$: Observable<boolean>;

  constructor(private authSvc: AuthService) {}

  logIn(): void {
    this.authSvc.logIn();
  }

  logOff(): void {
    this.authSvc.logOff();
  }

  loadData(): void {
    this.loading = true;
    setTimeout(() => { this.loading = false; }, 3000);
  }

  ngOnInit(): void {
    this.authenticated$ = this.authSvc.authorized$;
  }
}
