# tailored-semantic-ui-react-bundles-with-webpack

This repo shows how to customize
[semantic-ui-react](https://www.npmjs.com/package/semantic-ui-react) and
[semantic-ui-less](https://www.npmjs.com/package/semantic-ui-less)
when bundling with Webpack.

## Features

- Member imports from `semantic-ui-react` are transformed to default
  imports to reduce the bundle size (vendor js chunk):  
  `import { Button } from 'semantic-ui-react';` becomes  
  `import Button from 'semantic-ui-react/dist/es/elements/Button/Button.js';`  
  
  This is done with
  [babel-plugin-transform-semantic-ui-react-imports](https://www.npmjs.com/package/babel-plugin-transform-semantic-ui-react-imports)
  (see .babelrc file).
- Imports for the .less files from `semantic-ui-less` that are needed
  for the components imported from `semantic-ui-react` are added
  automatically and selectively:  
  `import { Button } from 'semantic-ui-react';` will automatically add  
  `import 'semantic-ui-less/definitions/elements/button.less';`
  
  This reduces the bundle size (compared to including the full Semantic
  UI css) without the hassle to import the correct .less files manually.
  
  This is also done with
  [babel-plugin-transform-semantic-ui-react-imports](https://www.npmjs.com/package/babel-plugin-transform-semantic-ui-react-imports),
  by specifying `"addLessImports": true` in the plugin options in the
  .babelrc file.
- Theming support for `semantic-ui-less` is added by
  [semantic-ui-less-module-loader](https://www.npmjs.com/package/semantic-ui-less-module-loader).
  
  See webpack.config.js file, src/semantic-ui-theme folder and
  [https://semantic-ui.com/usage/theming.html](https://semantic-ui.com/usage/theming.html).
- The Lato fonts are packaged locally instead of including them from
  Google Fonts.
  
  See assets/fonts/lato, src/semantic-ui-theme/globals/site.variables
  and src/semantic-ui-theme/globals/site.overrides.
  
## Try it out

    git clone https://github.com/skleeschulte/tailored-semantic-ui-react-bundles-with-webpack.git
    cd tailored-semantic-ui-react-bundles-with-webpack
    npm install
    npm run build
    npm run serve
