import { Injectable } from '@angular/core';
import { fromEvent, interval, merge, Observable } from 'rxjs';
import { filter, scan, startWith,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageLoaderService {

  constructor() { }


  timeBreakingImages(time:number = 1000): Observable<any> {
    const loadingCount = interval(time).pipe(map(i=>i));
    return loadingCount;

  }

  waitForImagesToLoad(): Observable<any> {
    const images = Array.from(document.images);
    const imageLoadEvents = images.map(img => fromEvent(img, 'load').pipe(map(() => 1)));
    return merge(...imageLoadEvents).pipe(
      startWith(0),
      scan((acc, curr) => acc + curr),
      filter(count => count === images.length)
    );
  }
}
