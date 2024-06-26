const http = require("node:http")
const json = require("./middlewares/json")
const routes = require("./routes")
const extractQueryParams = require("./utils/extract-query-params")


const server = http.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find(route => {
    return route.method === method && route.path.test(url)
  })

  if (route) {
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups 
    
    req.params = params

    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res)
  }

  return res.writeHead(404).end()
})

const port = 3000

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
 