# browserify

Mininum viable setup to get Node Sass & Browserify with Babelify running.

## Use

```
git clone git@github.com:mininum-viable/sass-babelify.git
```

```
npm install
```

To build the project, simply run one of the following

```
npm run build
npm run build:js
npm run build:js:watch
npm run build:sass
npm run build:sass:watch
npm run build:production
```

To start the static server

```
npm start
```

or use nodemon.

NOTE: This project does not babel transform any of the server side code in
anyway.  Make sure you are using v5 of Node.
