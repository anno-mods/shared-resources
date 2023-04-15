const child_process = require('child_process');
const path = require('path');
const glob = require('glob');
const fs = require('fs');

const mods = glob.sync("./out/*/modinfo.json");
mods.forEach(modinfoPath => {
  const package = path.basename(path.dirname(modinfoPath));
  const modinfo = JSON.parse(fs.readFileSync(modinfoPath));
  if (modinfo.Version) {
    const zipName = package
      .replace(/\s/g, '-')
      .replace(/\[|\]/g, '')
      .replace(/-\(\w+\)/, '');
    child_process.execFileSync('tar', [
      '-c', '-a',
      '-f', `out/${zipName}-${modinfo.Version}.zip`,
      '-C', 'out/', `${package}`
    ])
  }
});
