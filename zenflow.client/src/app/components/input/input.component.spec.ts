import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputElement = fixture.nativeElement.querySelector('input');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update value on input', () => {
    const testValue = 'test input';
    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));
    expect(component.valueChange.emit).toHaveBeenCalledWith(testValue);
  });

  it('should display placeholder', () => {
    const placeholderText = 'Enter text';
    component.placeholder = placeholderText;
    fixture.detectChanges();
    expect(inputElement.placeholder).toBe(placeholderText);
  });
});
