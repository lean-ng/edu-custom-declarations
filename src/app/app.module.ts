import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputMaskDirective } from './directives/input-mask.directive';
import { OverlayDirective } from './directives/overlay.directive';
import { IsAuthorizedDirective } from './directives/is-authorized.directive';
import { OverlayContainerComponent } from './components/overlay-container/overlay-container.component';
import { CaesarPipe } from './pipes/caesar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputMaskDirective,
    OverlayDirective,
    IsAuthorizedDirective,
    OverlayContainerComponent,
    CaesarPipe
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [OverlayContainerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
