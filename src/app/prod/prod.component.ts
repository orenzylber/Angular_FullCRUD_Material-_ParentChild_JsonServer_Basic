import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent {
  @Input() myProduct? : Todo;
  @Output() saveProd = new EventEmitter<Todo>();
  onSave(title:string) {
    if (this.myProduct) {
      this.myProduct.title = title
      this.saveProd.emit({id:this.myProduct.id, completed:this.myProduct?.completed, title:this.myProduct.title})
    }
  }
}
