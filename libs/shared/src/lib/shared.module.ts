import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [ModalImageComponent],
})
export class SharedModule {}
