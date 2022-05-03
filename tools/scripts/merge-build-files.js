const path = require('path');
const fs = require('fs-extra');
const concat = require('concat');

const projects = process.argv.slice(2) || [];

(async function build() {
  const appsPath = path.resolve(__dirname, '../../dist/apps');
  projects.forEach((project) => {
    const filesPath = path.resolve(appsPath, project);
    const files = fs.readdirSync(filesPath);
    let jsFiles = files.filter((f) => f.lastIndexOf('.js') == f.length - 3);
    jsFiles = jsFiles.map((f) => path.resolve(filesPath, f));
    concat(jsFiles, path.resolve(filesPath, `${project}.js`)).then(() => {
      jsFiles.forEach((f) => fs.unlinkSync(path.resolve(filesPath, f)));
    });
  });
})();
