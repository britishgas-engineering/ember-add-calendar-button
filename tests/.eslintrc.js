const fs = require('fs');
const configPath = __dirname + '/../config/';
const globalsFileName = 'eslint.globals.json';
const pathToGlobals = configPath + globalsFileName;
const customGlobals = fs.existsSync(pathToGlobals) ?
  JSON.parse(fs.readFileSync(pathToGlobals).toString()) :
  {};
const rules = require(__dirname + '/../.eslintrc').rules;

module.exports = {
  env: {
    embertest: true,
    es6: true,
    browser: true
  },
  extends: 'eslint:recommended',
  globals: Object.assign({
    select: true,
    sinon: true,
    expect: true,
    modules: true,
    server: true,
    extendService: true,
    lookupService: true
  }, customGlobals),
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules
};
