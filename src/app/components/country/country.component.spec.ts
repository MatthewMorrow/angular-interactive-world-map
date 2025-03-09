import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryComponent } from './country.component';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({
      declarations: [CountryComponent]  // Declare the component being tested
    });
    // Create the fixture and component instances
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Test case
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
