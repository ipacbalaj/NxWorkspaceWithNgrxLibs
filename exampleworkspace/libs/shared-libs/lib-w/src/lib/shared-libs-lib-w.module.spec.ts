import { async, TestBed } from '@angular/core/testing';
import { SharedLibsLibWModule } from './shared-libs-lib-w.module';

describe('SharedLibsLibWModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedLibsLibWModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedLibsLibWModule).toBeDefined();
  });
});
