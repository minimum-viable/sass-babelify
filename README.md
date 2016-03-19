# browserify

Mininum viable setup to get Browserify running.

## Use

```
git clone git@github.com:mininum-viable/browserify.git
```

```
npm install
```

The project uses [UglifyJS2](https://github.com/mishoo/UglifyJS2),
[browserify](https://github.com/substack/node-browserify) and
[watchify](https://github.com/substack/watchify). If you have
these installed globally, you can run `npm install --production` to
skip installing them locally inside the project.

To build the project, simply run one of the following

```
npm run build
npm run build:watch
npm run build:production
```

To start the static server

```
npm start
```

or use nodemon.
