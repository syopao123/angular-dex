import { TestBed } from '@angular/core/testing';
import { Pokeapi } from './pokeapi';

describe('Pokeapi', () => {
  let service: Pokeapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pokeapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
