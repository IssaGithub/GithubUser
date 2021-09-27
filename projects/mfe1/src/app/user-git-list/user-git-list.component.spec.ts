import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGitListComponent } from './user-git-list.component';

describe('UserGitListComponent', () => {
  let component: UserGitListComponent;
  let fixture: ComponentFixture<UserGitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGitListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
