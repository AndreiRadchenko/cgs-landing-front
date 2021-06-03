const { default: fetch } = require('node-fetch');

const regex = /<div class="name" title="(.+?)">[^]+?<span class="alpha-2">(.+?)<\/span>/g;

const coutryCodes = {};

const run = async () => {
  let response = await fetch('https://flagicons.lipis.dev/');

  response = await response.text();

  for (const { 1: name, 2: code } of response.matchAll(regex)) {
    coutryCodes[code] = name;
  }

  require('fs').writeFileSync('coutryCodes.json', JSON.stringify(coutryCodes, null, 2));
};

run().catch(console.error);
