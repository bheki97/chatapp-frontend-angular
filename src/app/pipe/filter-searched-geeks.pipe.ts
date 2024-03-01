import {Pipe, PipeTransform} from "@angular/core";
import {SearchedGeekModel} from "../model/searched-geek.model";


@Pipe({
  name:'filterSearchedGeeks'
})export class FilterSearchedGeeksPipe implements PipeTransform{

  transform(items: SearchedGeekModel[], searchText: string): SearchedGeekModel[] {

    return items.filter(item => {
      return (item.username||'').toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
