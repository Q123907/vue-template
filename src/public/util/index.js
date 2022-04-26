let files = require.context(".", false, /.js$/);
let modules = {};
files.keys().forEach((key) => {
  if (key.includes("index")) return;
  modules[key.match(/\/(\S*)\./)[1]] = files(key).default;
});
export default modules;
