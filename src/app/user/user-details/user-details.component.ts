import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.class';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DialogEditAddressComponent } from './dialog-edit-address/dialog-edit-address.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-details',
  imports: [
    MatCardModule,
    MatButtonModule,
    DatePipe,
    MatProgressBarModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  firestore: Firestore = inject(Firestore);

  private route = inject(ActivatedRoute);
  id!: string;

  user: User = new User();

  readonly dialog = inject(MatDialog);

  loading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      this.getUser();
    });
  }

  async getUser() {
    this.loading = true;
    const userDocRef = doc(this.firestore, 'users', this.id);
    const userSnap = await getDoc(userDocRef);
    if (userSnap) {
      this.user = new User(userSnap.data());
      this.loading = false;
    } else {
      console.error('No user found with ID: ', this.id);
    }
  }

  openDialogEditUser() {
    const dialogRef = this.dialog.open(DialogEditUserComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        // this.openDialogUserEdited();
        console.log('User successfully edited.');
      }
    });
  }

  openDialogEditAddress(): void {
    const dialogRef = this.dialog.open(DialogEditAddressComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        // this.openDialogUserEdited();
        console.log('Address successfully edited.');
      }
    });
  }

}
