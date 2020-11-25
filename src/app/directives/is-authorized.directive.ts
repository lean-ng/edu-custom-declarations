import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {distinct} from 'rxjs/operators';

@Directive({
  selector: '[appIsAuthorized]'
})
export class IsAuthorizedDirective implements OnInit{

  // See https://medium.com/angular-shots/shot-8-how-to-create-a-structural-directive-isauthorized-custom-ngif-c07494e0b538

  constructor(
    private authSvc: AuthService,
    private vcRef: ViewContainerRef,
    private tplRef: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    this.authSvc.authorized$.subscribe(authorized => {
      console.log(authorized);
      if (authorized) {
        this.vcRef.createEmbeddedView(this.tplRef);
      } else {
        this.vcRef.clear();
      }
    });
  }
}
