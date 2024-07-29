import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProdutoComponent } from './crear-produto.component';

describe('CrearProdutoComponent', () => {
  let component: CrearProdutoComponent;
  let fixture: ComponentFixture<CrearProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearProdutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
