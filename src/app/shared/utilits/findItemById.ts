import { map, Observable } from 'rxjs';

export function findItemById<T extends { id: string }>(stream: Observable<T[]>, ItemId: string | undefined): Observable<T | undefined> {
  return stream.pipe(map(data => data.find(({ id }) => ItemId === id)));
}
