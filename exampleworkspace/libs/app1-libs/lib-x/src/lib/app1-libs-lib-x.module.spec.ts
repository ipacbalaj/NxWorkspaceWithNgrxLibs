import { async, TestBed } from '@angular/core/testing';
import { App1LibsLibXModule } from './app1-libs-lib-x.module';

describe('App1LibsLibXModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [App1LibsLibXModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(App1LibsLibXModule).toBeDefined();
  });
});
