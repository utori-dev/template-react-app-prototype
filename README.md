# Simple React App Template

Starter React app with TypeScript and several helpful dependencies.

This template is intended for prototype apps.

It includes the following dependencies:

- [Dexie][dexie] (rather than Redux) for state management.
  - Dexie uses IndexedDB, so state is persisted.
  - Makes prototype development easier, since there may not be a backend at first.
- [Lodash][lodash] for generic utilities.
- [Luxon][luxon] for managing dates.
  - Recommended successor to the Moment.
- [Material UI][mui] for UI components.
  - Material UI is one of the most complete UI component libraries available.
- [Type Fest][type-fest] for useful TypeScript types.
- [React Router][react-router] for routing.

This template is ideal for prototypes,
but includes more dependencies that are likely needed for your individual use case.

## Scripts

### Build: `npm run build`

To build the app, run `npm run build`.

The generated output will be in the `dist/` directory.

### Format: `npm run format`

To format the source code, run `npm run format`.

### Serve: `npm start`

To serve the app, run `npm start`.

The app will be updated automatically as code changes are saved.

To simulate a production environment, run `npm run start:production`.
Note that the `webpack-dev-server` is not intended for use in production environments.

### Test: `npm test`

To test the app, run `npm test`.

## Setting Up a Local Development Environment

### Pre-requisites

Before getting started, you will need [Git] and [Node.js].

#### [Git]

1. Open a terminal and run `git --version`
1. If Git is not installed, follow
   [the GitHub guide for setting up Git][github_docs_git]

#### [Node.js]

1. Open a terminal and run `node -v`
1. If Node.js is not installed or is not `v16.0.0` or above, follow
   [the official guide for installing Node.js][node_docs_install]

### Instructions

1. If you haven't already, [create a new GitHub repository from this template][generate].
1. On your machine, open a terminal.
1. Clone the repository you've created from the template.\
   Run `git clone <your-repository-url> <some-directory>`
1. Navigate to the directory where you cloned the repository.\
   Run `cd <some-directory>`
1. Install dependencies.\
   Run `npm install`
1. Serve app in development mode.\
   Run `npm start`

You are now ready to start coding!

[babel]: https://babeljs.io/
[dexie]: https://dexie.org/
[generate]: https://github.com/utori-dev/template-react-app-prototype/generate
[git]: https://git-scm.com/
[github_docs_git]: https://docs.github.com/en/get-started/quickstart/set-up-git
[lodash]: https://lodash.com/
[luxon]: https://lodash.com/
[mui]: https://mui.com/material-ui/getting-started/installation/
[node.js]: https://nodejs.org/
[node_docs_install]: https://nodejs.dev/learn/how-to-install-nodejs
[react-router]: https://reactrouter.com/en/main
[type-fest]: https://github.com/sindresorhus/type-fest
