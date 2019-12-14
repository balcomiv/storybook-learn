import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureInboxComponent } from './pure-inbox.component';

describe('PureInboxComponent', () => {
  let component: PureInboxComponent;
  let fixture: ComponentFixture<PureInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
