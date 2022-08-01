import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SessionGuard } from './session.guard';


// TODO: Describe --> es el nombre de la prueba
describe('Testing of SessionGuard 💂‍♀️', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
      RouterTestingModule
    ]});
    guard = TestBed.inject(SessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
