

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessagesComponent } from '../message/message.component';

@Injectable()
export class MessagesService {

  dialogRef: MatDialogRef<MessagesComponent> | undefined ;

  constructor(private dialog: MatDialog) { }

  public openDialog(title: string, message: string): Observable<any> {
    this.dialogRef = this.dialog.open(MessagesComponent);
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    return this.dialogRef.afterClosed();

    // Nothing can live after afterClosed.
  }

}
