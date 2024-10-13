import { NgxsNextPluginFn, NgxsPlugin } from "@ngxs/store";

export class FooPlugin implements NgxsPlugin {
    private readonly output: HTMLUListElement = document.getElementById('plugin-output') as HTMLUListElement;
    
    handle(state: any, action: any, next: NgxsNextPluginFn) {
        const li = document.createElement('li');
        const code = document.createElement('code');
        li.appendChild(code);
        this.output.prepend(li);
        code.textContent = JSON.stringify(action);
        console.log('FooPlugin', state, action);
        return next(state, action);
    }
}