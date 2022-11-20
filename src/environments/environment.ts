// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'apjglfront',
    appId: '1:618895370862:web:c595b0aabe28521d24d47f',
    storageBucket: 'apjglfront.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyBwLvRytUdqN6KwI4iiy6fSb42tfOdLgU0',
    authDomain: 'apjglfront.firebaseapp.com',
    messagingSenderId: '618895370862',
  },
  production: false,
  apiBaserUrl: 'https://apjgl.herokuapp.com/',
  apiAuth: 'https://apjgl.herokuapp.com/Auth/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
