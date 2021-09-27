import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodoModule} from './todo/todo.module';
import {HomeComponent} from './home/home.component';
import { UserGitListComponent } from './user-git-list/user-git-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Server/in-memory-data';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MessagesComponent } from './message/message.component';
import { MessagesService } from './services/message.service';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
MessagesComponent
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserGitListComponent,
        SearchBarComponent,
        MessagesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        TodoModule,
        
         // Material
        MatTableModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatFormFieldModule,
        HttpClientModule,
        MatDialogModule,
        MatInputModule ,
        MatProgressSpinnerModule
    ],
    exports:[ 
        MatAutocompleteModule,
        MatBadgeModule,
    ],
    providers: [MessagesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
