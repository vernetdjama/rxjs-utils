import $ from 'jquery';
import { fromEvent } from 'rxjs';

var keyUp = fromEvent($('#input'), 'keyup');
