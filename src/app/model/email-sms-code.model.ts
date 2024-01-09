

export class EmailSmsCodeModel<T,U>{

  private _smsCode:T|null=null
  private _emailCode:U|null=null


  constructor() {
  }

  get smsCode(): T | null {
    return this._smsCode;
  }

  set smsCode(value: T | null) {
    this._smsCode = value;
  }

  get emailCode(): U | null {
    return this._emailCode;
  }

  set emailCode(value: U | null) {
    this._emailCode = value;
  }
}
