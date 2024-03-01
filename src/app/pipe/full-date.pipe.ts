import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name:'fullDate'
})export class FullDatePipe implements PipeTransform{
  transform(date: Date|undefined, ...args: any[]): string {
    if(!date){
      date = new Date()
    }
    date = date as Date;
    console.log(date)
    const myDate:Date = new Date(date)
    const day = myDate.getDate();
    const monthIndex = myDate.getMonth();
    const year = myDate.getFullYear();

    const suffix = this.getSuffix(day);

    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    return `${day}${suffix} of ${monthNames[monthIndex]} ${year}`;
  }

  private getSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

}
