import { Component, Output} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal-error',
  styleUrls: ['./error-modal.component.scss'],
  templateUrl: './error-modal.component.html',
})

export class ModalErrorComponent {
  modalHeader: string;
  modalContent: string;
  activeModal: NgbActiveModal;

  constructor(private modal: NgbActiveModal) { 
    this.activeModal = modal
  }

  closeModal() {
    this.activeModal.close();
  }
}