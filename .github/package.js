const child_process = require('child_process');
const path = require('path');
const glob = require('glob');

const mods = glob.sync("./out/*");
mods.forEach(modPath => {
  const package = path.basename(modPath);
  const zipName = package
    .replace(/\s/g, '-')
    .replace(/\[|\]|\(|\)/g, '')
    .toLowerCase()
    // skip category for some
    .replace('ui-', '')
    // ModID and ModName don't match
    .replace('fix-influence-tooltip', 'ToolTip_OtherResidences');

  child_process.execFileSync('tar', [
    '-c', '-a',
    '-f', `out/${zipName}.zip`,
    '-C', 'out/', `${package}`
  ]);
});
