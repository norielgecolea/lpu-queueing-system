
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L6GD54IE.js",
      "chunk-W35VZIMM.js",
      "chunk-BBXTOAOJ.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MFZJW7TY.js",
      "chunk-BBXTOAOJ.js",
      "chunk-6HZLNQN5.js"
    ],
    "route": "/teller"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-X5MVSHSD.js",
      "chunk-W35VZIMM.js",
      "chunk-BBXTOAOJ.js",
      "chunk-6HZLNQN5.js"
    ],
    "route": "/customer"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-OZSRMVTB.js",
      "chunk-6HZLNQN5.js"
    ],
    "route": "/display"
  },
  {
    "renderMode": 1,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 707, hash: 'c93997227513087ac6b67b33554d76474575dde7bf61af2c0dc3b689bd48632a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1247, hash: '54b3b39baf11b0e85173c7c57c0a9d2f5dd64cf8a8eb870a95a721b97fea22dc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}
  },
};
