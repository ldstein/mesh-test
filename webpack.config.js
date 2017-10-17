var webpackTools = require('../../mesh-builder');
var options =
{
    projectName              : 'mesh-test',
    projectRootPath          : __dirname,
    projectEntryPath         : '.',
    projectType              : 'intermediate'
};
module.exports = webpackTools.getWebpackOptions(options);