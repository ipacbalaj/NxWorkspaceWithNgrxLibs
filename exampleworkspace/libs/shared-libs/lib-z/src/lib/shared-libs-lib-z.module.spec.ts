import { async, TestBed } from '@angular/core/testing';
import { SharedLibsLibZModule } from './shared-libs-lib-z.module';

describe('SharedLibsLibZModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLibsLibZModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLibsLibZModule).toBeDefined();
  });
});
