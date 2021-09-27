


import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-messages',
  templateUrl: './message.component.html'
})
export class MessagesComponent implements OnInit {

  public title="";
  public message="";


  constructor(
    private dialogRef: MatDialogRef<MessagesComponent>,
  ) { }


  private closeWithTimer() {
    setTimeout (() => {
      this.dialogRef.close();
    }, 2000);
  }


  ngOnInit() {
    this.closeWithTimer();
  }

}
