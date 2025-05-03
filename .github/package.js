const child_process = require('child_process');
const path = require('path');
const glob = require('glob');
const fs = require('fs');

const mods = glob.sync("./out/*/modinfo.json");
mods.forEach(modPath => {
  const package = path.basename(path.dirname(modPath));
  const modinfo = JSON.parse(fs.readFileSync(modPath, 'utf8'));
  const zipName = modinfo.ModID;

  child_process.execFileSync('tar', [
    '-c', '-a',
    '-f', `out/${zipName}.zip`,
    '-C', 'out/', `${package}`
  ]);
});
