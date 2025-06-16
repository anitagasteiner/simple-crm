export class User {

    id: string;
    firstName: string;
    lastName: string;
    birthDate: number; //NOTE - Ein Date-Objekt kann ich nicht speichern, daher Typ 'number' + Timestamp reinkopieren -> Timestamp kann ich super speichern, zB in meiner Firebase-Datenbank!
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : ''; //NOTE - Wenn das Object existiert, dann kommt der firstName rein, ansonsten ein leerer String.
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON(): Record<string, any> {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        };
    }
}