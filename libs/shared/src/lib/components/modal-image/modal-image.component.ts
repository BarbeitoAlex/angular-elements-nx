import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
})
export class ModalImageComponent {
  @Input() src!: string;
  @Input() srcModal!: string;
  @Input() alt!: string;
  @Input() zIndexModal = 1000;

  state: 'opened' | 'closed' = 'closed';

  openModal() {
    this.state = 'opened';
  }

  closeModal() {
    this.state = 'closed';
  }
}
