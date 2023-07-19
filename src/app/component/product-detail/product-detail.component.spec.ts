import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ProductDetailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    //expect(1).toBeLessThanOrEqual(10);
    expect(component.selectedItem).toBeLessThanOrEqual(1);
    // expect(component).toBeTruthy();
  });
});
