import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeofconductComponent } from './codeofconduct.component';

describe('CodeofconductComponent', () => {
  let component: CodeofconductComponent;
  let fixture: ComponentFixture<CodeofconductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeofconductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeofconductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
