import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss'],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({
          transform: 'scale(0)',
          opacity: 0,
        }),
        animate(
          '0.4s',
          style({
            opacity: 1,
            transform: 'scale(1)',
          })
        ),
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'scale(1)',
        }),
        animate(
          '0.4s',
          style({
            opacity: 0,
            transform: 'scale(0)',
          })
        ),
      ]),
    ]),
  ],
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
