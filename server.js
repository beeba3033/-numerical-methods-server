const jsonServer = require('json-server')
const auth = require('json-server-auth')
const app = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults({noCors:true})
var cors = require("cors");
const rules = auth.rewriter({
    "NumericalMethod":660
})
app.db = router.db
app.use(cors())
app.use(rules)
app.use(auth)
app.use(middlewares);
app.use(router)
app.listen(7800,()=>
{
    console.log("JSON SERVER is running!!");
})