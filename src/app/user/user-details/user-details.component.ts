import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [
    MatCardModule,
    MatButtonModule,
    DatePipe
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  firestore: Firestore = inject(Firestore);

  private route = inject(ActivatedRoute);
  id!: string;

  user: any = {};

  constructor() { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      this.getUser();
    });
  }

  async getUser() {
    const userDocRef = doc(this.firestore, 'users', this.id);
    const userSnap = await  getDoc(userDocRef);
    if (userSnap) {
      this.user = userSnap.data();
    } else {
      console.error('No user found with ID: ', this.id);
    }
  }

}
