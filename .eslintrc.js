module.exports = {
"root": true,
"env": {
  "node": true
},
"extends": [
  "plugin:vue/vue3-essential",
  "eslint:recommended"
],
"parserOptions": {
  "parser": "@babel/eslint-parser"
},
// "lintOnSave": false,
"rules": {
  // "no-used-vars": process.env.NODE_ENV === "production" ? "error" : "warn"
}
}
