


export class GeekModel{
  constructor(private _firstname:string,
              private _lastname:string,
              private _username:string,
              private _email:string,
              private _cellNumber:string,
              private _password:string,
              private _registrationDate?:Date) {
  }


  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get cellNumber(): string {
    return this._cellNumber;
  }

  set cellNumber(value: string) {
    this._cellNumber = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get registrationDate(): any {
    return this._registrationDate?this.registrationDate:-1;
  }

  set registrationDate(value: Date) {
    this._registrationDate = value;
  }
}
