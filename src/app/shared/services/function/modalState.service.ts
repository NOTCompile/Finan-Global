import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalStateService {
  isOpen = signal(false);

  open(title: string = '') {
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }
}
