import { Component, inject, model, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';
import { DialogUserAddedComponent } from './dialog-user-added/dialog-user-added.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-user',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    RouterLink,
    MatProgressBarModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  firestore: Firestore = inject(Firestore);

  user: User = new User();

  readonly dialog = inject(MatDialog);
  readonly userAdded = inject(MatDialog);

  displayedColumns: string[] = ['name', 'city'];

  users$: Observable<any[]>;

  constructor() {
    this.users$ = this.getData('users');
  }

  openDialogAddUser(): void {
    const dialogRef = this.dialog.open(DialogAddUserComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.openDialogUserAdded();
      }
    });
  }

  openDialogUserAdded(): void {
    const dialogRef = this.userAdded.open(DialogUserAddedComponent, {});
    setTimeout(() => {
      dialogRef.close();
    }, 5000);
  }

  getData(data: string): Observable<any[]> {    
    const dataCollection = collection(this.firestore, data); //NOTE - Ich hole mir eine Collection aus Firestore.    
    return collectionData(dataCollection, { idField: 'id' });    
    //NOTE - Mit { idField: 'id' } wird die Firebase-Dokument-ID automatisch als Feld 'id' ins Ergebnisobjekt eingebunden.
  }

}
