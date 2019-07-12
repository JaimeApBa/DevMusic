import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public lyrics: string;
  public hidden = 'hidden';

  constructor() { }

  hideModal() {
    this.hidden = 'hidden';
    this.lyrics = null;
  }

  showModal(lyrics) {
    this.hidden = '';
    this.lyrics = lyrics;
    return this.lyrics;
  }
}
