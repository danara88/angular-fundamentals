import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Product } from '../../mock-data';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  product: Product = {
    id: 1,
    name: 'Macbook Pro 2023 M3',
    subtitle: 'Laptop Apple',
    description: 'Macbook Pro 2023 M1',
  };

  @ViewChild('productComponentCualquierNombre')
  productComponent?: ProductComponent;

  public name: string = '';

  constructor() {
    // console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    // console.log('ngOnInit');
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {}

  ngAfterContentChecked(): void {}

  ngAfterViewInit(): void {
    console.log(this.productComponent);
  }

  ngAfterViewChecked(): void {}

  ngOnDestroy(): void {
    // console.log('ngOnDestroy');
  }

  onDeleteProduct() {}

  onSubmit() {}

  clickMe() {
    if (this.productComponent) this.productComponent.exampelInput = 'Changed!';
  }
}
