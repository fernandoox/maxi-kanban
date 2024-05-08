import { ElementRef } from '@angular/core';
import { StrikethroughDirective } from './strikethrough.directive';

describe('StrikethroughDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;
    const directive = new StrikethroughDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
