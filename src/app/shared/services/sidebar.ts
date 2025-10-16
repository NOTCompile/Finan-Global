import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private collapsedSubject = new BehaviorSubject<boolean>(false);
  collapsed$ = this.collapsedSubject.asObservable();

  toggleSidebar() {
    const current = this.collapsedSubject.value;
    const next = !current;
    this.collapsedSubject.next(next);
    localStorage.setItem('sidebarCollapsed', next.toString());
  }

  loadInitialState() {
    const saved = localStorage.getItem('sidebarCollapsed');
    this.collapsedSubject.next(saved === 'true');
  }
}
