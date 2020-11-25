import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Input, OnChanges,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {OverlayContainerComponent} from '../components/overlay-container/overlay-container.component';

@Directive({
  selector: '[appOverlay]'
})
export class OverlayDirective implements OnInit, OnChanges, DoCheck {

  @Input('appOverlay')
  showOverlay = false;

  private containerComp: ComponentRef<OverlayContainerComponent>;
  private templateView: EmbeddedViewRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef,
    private tplRef: TemplateRef<any>
  ) { }

  ngOnInit(): void {
    this.templateView = this.tplRef.createEmbeddedView({});
    const containerFactory =
      this.componentFactoryResolver.resolveComponentFactory<OverlayContainerComponent>(OverlayContainerComponent);
    this.containerComp = this.vcRef.createComponent(containerFactory,
      null,
      this.vcRef.injector,
      [this.templateView.rootNodes]
    );
    this.containerComp.instance.overlayHidden = !this.showOverlay;
  }

  ngOnChanges(): void {
    if (this.containerComp) {
      this.containerComp.instance.overlayHidden = !this.showOverlay;
    }
  }

  ngDoCheck(): void {
    this.templateView.detectChanges();
  }
}
