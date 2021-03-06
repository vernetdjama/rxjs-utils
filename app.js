import $ from 'jquery';
import { fromEvent } from 'rxjs';

var keyUp = fromEvent($('#input'), 'keyup');

var observable = keyUp.pipe(
  map(e => e.target.value),
  debounceTime(1000),
  distinctUntilChanged(),
  map(value => {
    const promise = $.get('http://www.omdbapi.com/?apikey=62c474d4&s=' + encodeURIComponent(value)).promise();
    return from(promise).pipe(
      retry(3),
      takeUntil(keyUp)
    );
  }),
  concatAll()
);

observable.subscribe(nb => {
  console.log(nb);
}, err => {
  console.log('Erreur');
}, completed => {
  console.log('Fini !');
});