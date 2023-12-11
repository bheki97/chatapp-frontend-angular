

export class AuthGeekModel{


  constructor(private _username:string, private _authToken:string) {

  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get authToken(): string {
    return this._authToken;
  }

  set authToken(value: string) {
    this._authToken = value;
  }
}
