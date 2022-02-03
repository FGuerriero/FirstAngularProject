import{ Component } from '@angular/core';

@Component({
  selector: 'test',
  template: '<h2> {{title}} </h2>'
})

export class TestComponent{
  title = "My Title";
}