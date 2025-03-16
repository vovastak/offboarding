# Offboarding

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
npm run start
```

Its also necessary start mock server, run:

```bash
npm run json-server
```

<!--
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files. -->

## Implementation notes

I tried to use the most recent Angular features, including signals, zoneless mode, and component input binding from routes.

The code follows a declarative style with strong type coverage, which makes it concise, robust, and easy to read (Note: there are no `if` statements in `.ts` files). Often declarative code even doesn't require testing. Additionally, the code is organized according to the single responsibility principle - all components are dumb with one smart component-container, which simplifies testing and promotes best practices.

State management implemented as a simple service with necessary signals. In more complex cases, with large data collections, we could use **NgRx entity store**, for example.

I have installed the latest **TailwindCSS**, which no longer requires a `tailwind.config.js`. However, VS Code plugins still need it, so I added one.

<!--
## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page. -->
