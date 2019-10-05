import { async, TestBed } from '@angular/core/testing';
import { App1LibsLibAModule } from './app1-libs-lib-a.module';

describe('App1LibsLibAModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [App1LibsLibAModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(App1LibsLibAModule).toBeDefined();
  });
});
