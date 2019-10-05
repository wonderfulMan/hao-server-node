import * as path from 'path';

import * as moduleAlias from 'module-alias';

moduleAlias.addAliases({
  '@module': path.resolve(__dirname, '../module'),
  '@controller': path.resolve(__dirname, '../api'),
  '@util': path.resolve(__dirname, '../util'),
  '@global': path.resolve(__dirname, '../global'),
  '@exception': path.resolve(__dirname, '../exception/'),
  '@config': path.resolve(__dirname, '../config/'),
  '@common': path.resolve(__dirname, '../common/'),
});
