import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  getAllDataFromLocalForage,
  default as localForage,
} from 'ngrx-store-persist';
import { AppModule } from './app/app.module';

getAllDataFromLocalForage({
  driver: localForage.LOCALSTORAGE,
  keys: ['tasks', 'theme'],
}).then(() => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
});
