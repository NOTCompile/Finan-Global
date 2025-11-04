import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalStateService {
  private _isOpen = signal(false);
  isOpen = signal(false);

  open(title: string = '') {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  state() {
    return this._isOpen();
  }
}
