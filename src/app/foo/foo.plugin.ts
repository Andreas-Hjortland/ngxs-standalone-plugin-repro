import { NgxsNextPluginFn, NgxsPlugin } from "@ngxs/store";

export class FooPlugin implements NgxsPlugin {
    
    handle(state: any, action: any, next: NgxsNextPluginFn) {
        console.log('FooPlugin', state, action);
        return next(state, action);
    }
}