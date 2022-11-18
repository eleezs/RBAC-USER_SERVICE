module.exports = {
  "env": {
      "node": true,
      'commonjs': true,
  },
  "rules":{
      "no-use-before-define": "error",
      "no-redeclare": "error",
      "no-unused-vars": "on",
      "no-async-promise-executor": "off",
      "no-extra-semi": "off",
      "no-prototype-builtins": "off"
    },
    "extends":["eslint:recommended"]
};