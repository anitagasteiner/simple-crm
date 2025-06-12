export class User {

    firstName: string;
    lastName: string;
    birthDate: number; // Ein Date-Objekt kann ich nicht speichern, daher Typ 'number' + Timestamp reinkopieren -> Timestamp kann ich super speichern, zB in meiner Firebase-Datenbank!
    address: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : ''; // Wenn das Object existiert, dann kommt der firstName rein, ansonsten ein leerer String.
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.address = obj ? obj.address : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }
    
}