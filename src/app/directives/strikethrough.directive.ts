import { Directive, ElementRef, Input } from '@angular/core';
import { SubTask } from '../interfaces/sub-task.interface';

@Directive({
  selector: '[appStrikethrough]',
})
export class StrikethroughDirective {
  @Input('appStrikethrough') subTask?: SubTask;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.subTask?.isFinished) {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }
}
