import { ModalService } from './modal.service';
import { Component, OnInit } from '@angular/core';
import { getNgModuleDef } from '@angular/core/src/render3/definition';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  public lyric: string;

  constructor(
    public _modal: ModalService
  ) {}

  ngOnInit() {
  }

  closeModal() {
    this._modal.hideModal();
  }

}
