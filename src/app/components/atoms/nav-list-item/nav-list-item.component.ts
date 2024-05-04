import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrl: './nav-list-item.component.scss',
})
export class NavListItemComponent {
  @Input() icon = '';
  @Input() label = '';
}
