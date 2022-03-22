import { Pipe, PipeTransform } from '@angular/core';
import { NewsItem } from '../../core/models/news';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(cards: NewsItem[] | null, searchText: string): NewsItem[]  {
    if (!cards) {
      return [];
    }

    if (!searchText) {
      return cards;
    }

    searchText = searchText.toLowerCase();

    return cards.filter(data => data.title.toLowerCase().indexOf(searchText) !== -1,
    );

  }

}
