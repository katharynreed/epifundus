# CrowdFunder

With this app you will be able add, edit, delete, and donate to funding events (not really, but in theory). The app itself was built to learn routing in Angular and continue to hone skills in JS.  

# Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular2](https://github.com/angular/angular)
* [Angular-CLI](https://github.com/angular/angular-cli)

## Installation

**Step 1**: Clone this repository to your local computer

```console
git clone https://github.com/katharynreed/epifundus
```

**Step 2**: Install all development and production dependencies from the project root directory

```console
npm install
```
```console
bower install
```

**Step 3**: Create a new file named `api-keys.ts` in the `src/app` directory to include your firebase information in the following format:

```js
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };
```

**Step 4**: Use Angular-CLI to run a local server instance

```console
ng serve
```

**Step 5**: Visit the app at [http://localhost:4200](http://localhost:4200).

## Planning

1. Configuration/dependencies
  * Install **bootstrap** and save as a dependency in bower.json for easier styling
  ```console
  bower install bootstrap --save
  ```
  * Add **bootstrap** to angular-cli.json under "styles"

  * Install **angularfire2** and **firebase** and add **firebase** to "types" on `tsconfig.json`

  * Build `api-keys.ts` and insert firebase access information, link to app and add to `.gitignore`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
