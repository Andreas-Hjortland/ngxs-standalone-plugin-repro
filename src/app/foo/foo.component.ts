import { Component, Signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { FooState, SetFoo } from './foo.state';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.css'
})
export class FooComponent {
  public readonly title: Signal<string>;
  
  constructor(
    private readonly store: Store
) { 
    this.title = store.selectSignal(FooState.foo)
  }

  updateFoo($event: Event) {
    const str = ($event.target as HTMLInputElement)?.value;
    if(str) {
      this.store.dispatch(new SetFoo(str));
    }
  }
}
