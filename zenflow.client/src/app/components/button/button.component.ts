import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './button.base.css',
    './button.variants.css',
    './button.sidebar.css'
  ]
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';
  @Input() size: 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() sidebar: boolean = false;
  @Input() selected: boolean = false;
  @Output() clickEvent = new EventEmitter<void>();

  get buttonClasses(): string[] {
    const classes = [];

    if (this.sidebar) {
      classes.push('sidebar-btn');
      if (this.selected) {
        classes.push('active-sidebar-btn');
      }
    } else {
      classes.push('btn');
      classes.push(`btn-${this.variant}`);
      classes.push(`btn-${this.size}`);
    }

    return classes;
  }


  onClick(): void {
    if (this.disabled) return;

    this.clickEvent.emit();
  }
}
