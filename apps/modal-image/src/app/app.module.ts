import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { ModalImageComponent, SharedModule } from '@angular-elements-nx/shared';
@NgModule({
  declarations: [],
  imports: [BrowserModule, SharedModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    customElements.define(
      'modal-image',
      createCustomElement(ModalImageComponent, { injector: this.injector })
    );
  }
}
