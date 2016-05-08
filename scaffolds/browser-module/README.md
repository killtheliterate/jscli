# <%- name %> 

# About

<%- description %>

# Development 

## modify webpack.config
Since you're building a script to be executed in a browser, you ought to give
the script a name. In `webpack.config.js`, modify `output.library` to taste.
When you include your script in a webpage, it will be attached to `window`
with that name.

## build the js

Transpile `src/js` to `build/js/bundle.js` using webpack and Babel

## lint the js

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

ES2015 is supported. Add/modify the rules in `.eslintrc` to taste.

```shell
npm run lint 
```

## test

```shell
npm run test 
```

## deploy

The easy way:
  - `npm run build`
  - commit, tag, etc
  - push to a gh-pages branch on GitHub

Optionally you can host these files with nginx or apache or however you want.
