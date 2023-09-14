// postbuild.js
const fs = require('fs');
const path = require('path');

const originalPkgPath = path.join(__dirname, 'projects', 'resource-sharing', 'package.json');
const distPkgPath = path.join(__dirname, 'dist', 'resource-sharing', 'package.json');

const originalPkg = JSON.parse(fs.readFileSync(originalPkgPath, 'utf-8'));
const distPkg = JSON.parse(fs.readFileSync(distPkgPath, 'utf-8'));

// Copia a propriedade "scripts" para o package.json da distribuição
distPkg.scripts = originalPkg.scripts;

fs.writeFileSync(distPkgPath, JSON.stringify(distPkg, null, 2), 'utf-8');
