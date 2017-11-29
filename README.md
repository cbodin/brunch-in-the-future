# Brunch in the Future

Simple brunch skeleton with no included frontend frameworks.
Start a project with ES6 and Sass (scss) support like you've travelled to the future.

**Compilers/parsers**
- Babel ([babel-preset-airbnb](https://github.com/airbnb/babel-preset-airbnb))
- Sass ([scss](https://github.com/sass/node-sass))
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [UglifyJS](https://github.com/mishoo/UglifyJS2)

**To keep you sane and bug-free**
- ESLint ([eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb))
- Scss lint
- [Auto reload](https://github.com/brunch/auto-reload-brunch)


## Installation
- Install [Node.js](https://nodejs.org/)
- Configure supported browsers in `brunch-config.js`. This is used by Babel and Autoprefixer and is parsed by [Browserslist](https://github.com/ai/browserslist)
- Run `npm install`

## Usage
All src files are located in the `app` folder.
- `npm start` watches for file changes and automatically recompiles and reloads the web page. A local web server is started at `http://localhost:3333`
- `npm build` creates a production build in the `public` folder with minified css and js.

### Windows users
Make sure npm is added to PATH.
- `npm run start-windows` instead of `npm start`
- `npm run build-windows` instead of `npm build` 


## TODO
- Remove autoprefixer-brunch and replace with brunch-postcss when all issues are resolved https://github.com/brunch/brunch/pull/1664
- Use specific version instead of commit hash for eslint-brunch when a new tag is created https://github.com/brunch/eslint-brunch/issues/22
- Use .babelrc when .browserslistrc is working with babel-brunch and babel-preset-env (Possibly babel 7?)
- Use .browserslistrc for both Babel and Autoprefixer when postcss and babel todos are fixed.
