import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListaCobradoresComponent } from './menu-lista-cobradores.component';

describe('MenuListaCobradoresComponent', () => {
  let component: MenuListaCobradoresComponent;
  let fixture: ComponentFixture<MenuListaCobradoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListaCobradoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListaCobradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
