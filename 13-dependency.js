// npm global commands comes with node
// check npm (node package manager)

// local dependency - use it only this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (strore important info about project/package)
// 3 step of doing so
// 1. manual approach (crate package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// to get taste of lodash dependency

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems);