const Dotenv = require('dotenv-webpack')
const SitemapWebpackPlugin = require('sitemap-webpack-plugin').default

const paths = ['/', 'buscar', 'conocenos', '404-product', '404-box',
  'contactanos', 'deseos', 'usuario', 'caja-sorpresa',
  'registro', 'login', 'thankyou',
  'catalogo', 'pagos', 'informacion']

module.exports = {
  productionSourceMap: false,

  configureWebpack: {
    plugins: [
      new Dotenv({
        systemvars: true
      }),
      new SitemapWebpackPlugin('https://fellfitmarket.com', paths, {
        fileName: 'map.xml'
      })

    ]
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/', '/conocenos', '/contactanos', '/catalogo',
        '/pagos', '/buscar', '/informacion', '/deseos', '/registro',
        '/login', '/thankyou', '/usuario', '/caja-sorpresa', '/404-product', '/404-box'

      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: route => {
        // Defer scripts and tell Vue it's been server rendered to trigger hydration
        route.html = route.html
          .replace(/<script (.*?)>/g, '<script $1 defer>')
          .replace('id="app"', 'id="app" data-server-rendered="true"')
        return route
      }
    }
  }
}
