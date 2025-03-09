import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorldComponent } from './world.component'; 

describe('WorldComponent', () => { // Describe the WorldComponent module
  let component: WorldComponent; // Define the component 
  let fixture: ComponentFixture<WorldComponent>; // Define the fixture

  beforeEach(() => { // Execute before each test case
    TestBed.configureTestingModule({ // Configure the testing module with the TestBed
      declarations: [WorldComponent] // Declare the WorldComponent module being tested
    });
    fixture = TestBed.createComponent(WorldComponent); // Create the fixture 
    component = fixture.componentInstance; // Create the component
    fixture.detectChanges(); // Detect changes
  });

  it('should create', () => { // Test case
    expect(component).toBeTruthy();
  });
});
