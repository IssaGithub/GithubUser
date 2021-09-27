import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { skip, tap } from 'rxjs/operators';
import { HttpService } from '../services/http.service';
import { MessagesService } from '../services/message.service';

@Component({
    selector: 'app-user-git-list',
    templateUrl: './user-git-list.component.html',
    styleUrls: ['./user-git-list.component.scss'],
})
export class UserGitListComponent {
    @Input() set searchTerm(searchTerm: string) {
        this.searchTerm$.next(searchTerm);
    }
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;

    public dataLength: number | undefined;

    loading = false;

    //progress-spinner
    color: ThemePalette = 'primary';
    mode: ProgressSpinnerMode = 'indeterminate';
    value = '50';

    public displayedColumns = ['id', 'name', 'description', 'url'];

    public dataSource = new MatTableDataSource();

    // For last name query
    public searchTerm$ = new Subject<string>();

    constructor(
        private httpService: HttpService,
        public dialog: MatDialog,
        public messagesService: MessagesService,
        private route: ActivatedRoute
    ) {
        this.httpService
            .nameSearch(this.searchTerm$)
            .subscribe((data: any) => {
              if(!data.length){
              this.messagesService.openDialog('Sorry', 'Keine Daten vorhanden.');
              }
                this.dataLength = data.length;
                this.dataSource.data = data;
                this.loading=false;
            });
    }

    ngOnInit() {
        this.route.queryParams
            .pipe(
                tap((value) => {
                    this.loading =true;
                })
            )
            .subscribe((params) => {
                this.loading = false;
                this.searchTerm$.next(params['messageText']);
            });
    }

    searchGithubRepo(value:any){
      this.loading =value.length?true:false;
      this.searchTerm$.next(value);
    }
    ngAfterViewInit() {
      
        this.dataSource.paginator = this.paginator;
    }

    private success() {
        this.messagesService.openDialog(
            'Success',
            'Database updated as you wished!'
        );
    }

    private handleError(error: any) {
        this.messagesService.openDialog('Error', 'No database connection.');
    }
}
