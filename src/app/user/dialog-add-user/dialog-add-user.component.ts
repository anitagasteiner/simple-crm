import { Component, inject, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../../models/user.class';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-dialog-add-user',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDatepickerModule,
    MatProgressBarModule
  ],
  templateUrl: './dialog-add-user.component.html',  
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user: User = new User();
  birthDate: Date;

  firestore: Firestore = inject(Firestore);
  users$: Observable<any[]>;

  readonly dialogRef = inject(MatDialogRef<DialogAddUserComponent>);

  loading: boolean = false;

  constructor(private ngZone: NgZone) {
    this.birthDate = new Date();
    const aCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(aCollection);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime(); //NOTE - Variable wird hinzugefügt, aber mit Timestamp.
    console.log('Current user is: ', this.user);
    this.loading = true;
    await this.addData('users', this.user.toJSON());
    this.loading = false;
  }

  async addData(collectionName: string, data: any): Promise<any> {
    return this.ngZone.run(() => {
      const collectionRef = collection(this.firestore, collectionName);
      return addDoc(collectionRef, data);
    });
  }

}
