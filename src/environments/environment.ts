// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDmnZx3sFRGMvkt3VepLzzgZhyg7w8MLj8",
    authDomain: "authentication-b73d6.firebaseapp.com",
    databaseURL: "https://authentication-b73d6.firebaseio.com",
    projectId: "authentication-b73d6",
    storageBucket: "authentication-b73d6.appspot.com",
    messagingSenderId: "240797922448"
  }
};
