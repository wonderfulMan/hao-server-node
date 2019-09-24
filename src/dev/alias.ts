import * as path from 'path';

import * as moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@module': path.resolve(__dirname, '../module'),
  '@controller': path.resolve(__dirname, '../api'),
});
