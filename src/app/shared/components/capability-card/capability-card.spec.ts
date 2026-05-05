import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityCard } from './capability-card';

describe('CapabilityCard', () => {
  let component: CapabilityCard;
  let fixture: ComponentFixture<CapabilityCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapabilityCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapabilityCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
