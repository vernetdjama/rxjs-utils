import $ from 'jquery';
import { fromEvent } from 'rxjs';

var keyUp = fromEvent($('#input'), 'keyup');

var observable = keyUp.pipe(
  map(e => e.target.value),
);

observable.subscribe(nb => {
  console.log(nb);
}, err => {
  console.log('Erreur');
}, completed => {
  console.log('Fini !');
});