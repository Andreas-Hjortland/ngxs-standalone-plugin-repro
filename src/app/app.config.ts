import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore, withNgxsPlugin } from '@ngxs/store';
import { FooPlugin } from './foo/foo.plugin';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore([],
      withNgxsReduxDevtoolsPlugin(),
      // withNgxsPlugin(FooPlugin),
    )
  ]
};
