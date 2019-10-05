import { async, TestBed } from '@angular/core/testing';
import { App2LibsLibYModule } from './app2-libs-lib-y.module';

describe('App2LibsLibYModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [App2LibsLibYModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(App2LibsLibYModule).toBeDefined();
  });
});
