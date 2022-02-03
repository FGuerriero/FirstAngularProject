import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: '<h2> {{title}} </h2>'
})
export class HelloComponent  {
  title= "Hello World!";
}
