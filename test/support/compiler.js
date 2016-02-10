/*eslint-disable */

var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var origJs = require.extensions['.js'];

require.extensions['.js'] = function (module, fileName) {
  var output;
  if (fileName.match('node_modules/react-native/Libraries/react-native/react-native.js')) {
    fileName = path.resolve('./test/support/mocks/react-native.js');
  }
  if (fileName.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, fileName);
  }
  var src = fs.readFileSync(fileName, 'utf8');
  output = babel.transform(src, {
    filename: fileName,
    sourceFileName: fileName,

    //keep below in sync with babelrc
    "retainLines": true,
    "compact": true,
    "comments": false,
    "presets": ["es2015", "react"],
    "plugins": [
      "syntax-async-functions",
      "syntax-class-properties",
      "syntax-trailing-function-commas",
      "transform-class-properties",
      "transform-flow-strip-types",
      "transform-object-assign",
      "transform-object-rest-spread",
      "transform-react-display-name",
      "transform-react-jsx",
      "transform-regenerator"
    ],
    "sourceMaps": false
  }).code;

  return module._compile(output, fileName);
};
