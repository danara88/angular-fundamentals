import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../mock-data';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnChanges {
  @Input() product?: Product;

  @Input() exampelInput: string = '';

  @Output() deleteProductEvent: EventEmitter<Product> = new EventEmitter();

  constructor() {}

  /**
   * It will be excuted when angular detected changes in input properties.
   * SimpleChanges:
   * previousVaalue: Is the value before changes.
   * currentValue: Is the value after the changes.
   * firstChange: Boolean value that determine if the change was for the very first time or not
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnchanges in Product component');
  }

  deleteProduct() {
    this.deleteProductEvent.emit(this.product);
  }
}
