const multipart = require('connect-multiparty');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

class Server {

  init(config) {
    this.app = express();

    this.middleware = webpackMiddleware(webpack(config), {
      publicPath: config.output.publicPath,
      serverSideRender: false,
      watchOptions: {
        ignored: /.*/
      }
    });

    app.use(this.middleware);
    app.use(multipart());
    app.use(express.static('public'));
  }

  use(path, object) {
    this.app.use(path, object);
  }

  listen() {
    const port = process.env['REACT_APP_PORT'];
    app.listen(port, () => console.log(`Launching... http://localhost:${port}\n`));

    try {
      pjs.register(this.app, this.middleware);
    } catch (error) {
      console.error(error);
    }
  }
}

const playJsExpress = {
  Server: Server
}

module.exports = playJsExpress;
