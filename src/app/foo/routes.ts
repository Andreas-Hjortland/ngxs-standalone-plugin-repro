import { Routes } from "@angular/router";
import { FooComponent } from "./foo.component";
import { provideStates, withNgxsPlugin } from "@ngxs/store";
import { FooPlugin } from "./foo.plugin";
import { FooState } from "./foo.state";
import { ENVIRONMENT_INITIALIZER, inject, Injector } from "@angular/core";

export default [
    {
        path: '',
        component: FooComponent,
        providers: [
            provideStates([FooState], withNgxsPlugin(FooPlugin)),
            /*
            {
                provide: ENVIRONMENT_INITIALIZER,
                multi: true,
                useValue: () => {
                    const injector = inject(Injector) as any
                    const pluginManagerToken = Array.from(injector.records.keys()).find((key: any) => key.prototype.getPluginHandlers);
                    injector.get(pluginManagerToken);
                }
            }
            */
        ]
    }
] satisfies Routes;