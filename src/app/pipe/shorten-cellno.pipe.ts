import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name:'shortenCellNo'
})export class ShortenCellNoPipe implements PipeTransform{
  transform(cellNo: string): string {



    if(cellNo.length>9){
      //0123456789
     const firstPart =  cellNo.substring(0,4)
     const lastPart =  cellNo.substring(6)

      cellNo = firstPart +' **** '+lastPart
    }else{
      const index = Math.floor(cellNo.length/2)
      cellNo = cellNo.substring(index) +' ***'
    }

    return cellNo
  }

}
