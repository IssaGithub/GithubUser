

// THIS ONLY DELETES WHAT IS IN MEMORY.
// REFRESHING THE BROWSER CLEARS THE MEMORY
//   AND THE ORIGINAL FILE DB IS RELOADED.
// THERE IS NO REAL DATABASE HERE.
// FORK IT AND ADD FIREBASE IF YOU LIKE.

// Showing different ways to pass a URL to the service.


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { UserModel } from '../models/github.model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({ providedIn: 'root' })
export class HttpService {

  private api = '/api/';

  constructor(
    private http: HttpClient,
    ) { }

  //  Called by the Mat Datatable search.

  public nameSearch(terms:any) {
    try {
      return terms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => {
          const url = `https://api.github.com/users/${term}/repos`;
          return this.http.get(url);
          
      }));
    } catch (error) {
      console.error(error);
      return of();
    }
  
     
    
  }

  // --------------- FORM CONTROLS ---------------------


  public validateUsername(userName:string) {
 
    const url = `api/members/?user_name=${userName}`;
    return this.http.get(url).pipe(
      map(data => {
        return data;
      }),
      catchError((error: any) => {
           console.error(error);
           return of();
      }),
    );
  }
}
