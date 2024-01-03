import {Injectable, Type} from "@angular/core";
import {Subject} from "rxjs";


@Injectable({
  providedIn:'root'
})
export class ModalEventService{


  private _firePopUp?:Subject<number>
  private _activePop?:number



  constructor() {
    this._firePopUp =new Subject<number>();
    this._activePop = -1
  }


  get activePop() {
    return this._activePop;
  }

  set activePop(value) {
    this._activePop = value;
  }


  get firePopUp(): Subject<number> {
    return this._firePopUp as Subject<number>;
  }

  set firePopUp(value: Subject<number>) {
    this._firePopUp = value;
  }
}
