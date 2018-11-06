// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Optimize file
const fs = require('fs')
const lqip = require('lqip');
const file = "./static/jarand-lokeland-142660-unsplash.jpg";
lqip.base64(file).then(result => {
  var base64Data = result.replace(/^data:image\/jpeg;base64,/, "");
  require("fs").writeFile("./static/jarand-lokeland-142660-unsplash-lqip.jpg", base64Data, 'base64', function(err) {
    console.log(err);
  });
});

const sqip = require('sqip');
const result =  sqip({
    filename: file,
    numberOfPrimitives: 10
});
require("fs").writeFile("./static/jarand-lokeland-142660-unsplash-sqip.svg", result.svg_base64encoded, 'base64', function(err) {
   console.log(err);
});

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/b', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/a', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})


// if (typeof window === 'undefined') {
//   const lqip = require('lqip');
//   const fs = require('fs')

//   console.log('server only')
// }