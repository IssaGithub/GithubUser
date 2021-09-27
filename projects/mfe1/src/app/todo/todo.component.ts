import {Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    requestMessage: string = '';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }
    sendReq() {
        this.router.navigate(['mfe2'], {
          queryParams: { messageText: this.requestMessage },
        });
      }
}
