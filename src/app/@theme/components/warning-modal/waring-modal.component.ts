import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal-warning',
  styleUrls: ['./waring-modal.component.scss'],
  templateUrl: './waring-modal.component.html',
})

export class ModalWarningComponent {
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