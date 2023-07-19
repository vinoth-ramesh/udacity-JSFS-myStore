import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CheckoutFromComponent } from './checkout-from.component';

describe('CheckoutFromComponent', () => {
  let component: CheckoutFromComponent;
  let fixture: ComponentFixture<CheckoutFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [CheckoutFromComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckoutFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
