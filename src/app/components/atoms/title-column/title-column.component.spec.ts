import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleColumnComponent } from './title-column.component';

describe('TitleColumnComponent', () => {
  let component: TitleColumnComponent;
  let fixture: ComponentFixture<TitleColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitleColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
