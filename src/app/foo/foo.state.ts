import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";

export type FooStateModel = {
    foo: string;
}

export class SetFoo {
    static readonly type = 'SetFoo';
    constructor(public foo: string) { }
}

@State<FooStateModel>({
    name: 'foo',
    defaults: {
        foo: 'bar'
    }
})
@Injectable()
export class FooState {
    @Selector()
    static foo(state: FooStateModel) {
        return state.foo;
    }

    @Action(SetFoo)
    setFoo(ctx: StateContext<FooStateModel>, action: SetFoo) {
        ctx.patchState({ foo: action.foo });
    }
}