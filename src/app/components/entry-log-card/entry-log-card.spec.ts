import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryLogCard } from './entry-log-card';

describe('EntryLogCard', () => {
  let component: EntryLogCard;
  let fixture: ComponentFixture<EntryLogCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryLogCard],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryLogCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
