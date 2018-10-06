import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'as-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  title: 'Confirm';
  message: 'Please confirm.';
  constructor(private modal: NgbActiveModal) { }

  ngOnInit() {
  }

  ok() {
    this.modal.close(true);
  }

  cancel() {
    this.modal.dismiss();
  }

}
