import { Component } from '@angular/core';
import { SampService } from './samp.service';
import { Todo } from './todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'myApp';
    ar: Todo[] = []
    arClr: string[] = ["red", "green", "yellow", "blue", "gray"]
    // here I got the data from the samp.service.ts and present it as an array.
    constructor(private samp: SampService) {
        samp.getAllData().subscribe(res => this.ar = res);
        console.log(this.ar);
    }

    delItem(id: number) {
        this.samp.delData(id).subscribe(res => console.log(res));
        this.samp.getAllData().subscribe(res => this.ar = res);
    }

    addTodo(title: string, userId: number, completed: boolean) {
        this.samp.addTodo(title, userId, completed).subscribe(res => console.log(res));
        this.samp.getAllData().subscribe(res => this.ar = res);
    }

    updItem(id: number,title: string, userId: number, completed: boolean) {
        this.samp.updTodo(id,title, userId, completed).subscribe(res => console.log(res));
        this.samp.getAllData().subscribe(res => this.ar = res);
    }
    
    updProd(item:Todo){
      console.log(item);
    }
}
