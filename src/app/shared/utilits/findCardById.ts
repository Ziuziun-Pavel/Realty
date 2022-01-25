import { map, Observable } from "rxjs";

export function findCardById<T extends { id: string }>(stream: Observable<T[]>, cardId: string | undefined): Observable<T | undefined> {
  return stream.pipe(map(data => data.find(({id}) => cardId === id)))
}
