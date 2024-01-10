import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name:'shortenEmail'
})export class ShortEmailPipe implements PipeTransform{
  transform(email: string): string {

    const atIndex  = email.indexOf('@');

    //123@gmail.com
    if(atIndex>4){
      email = '*** '+ email.substring(atIndex-4)
    }

    return email
  }

}
