import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-overlay-container',
  templateUrl: './overlay-container.component.html',
  styleUrls: ['./overlay-container.component.css']
})
export class OverlayContainerComponent {
  @Input()
  overlayHidden = true;
}
