import {Injectable, Type} from "@angular/core";
import {Subject} from "rxjs";


@Injectable({
  providedIn:'root'
})
export class ModalEventService{


  private _firePopUp?:Subject<number>


  constructor() {
    this._firePopUp =new Subject<number>();
  }


  get firePopUp(): Subject<number> {
    return this._firePopUp as Subject<number>;
  }

  set firePopUp(value: Subject<number>) {
    this._firePopUp = value;
  }
}
