var http = require('http')
var url = require('url')
function myfun(req,res){
    res.writeHead(200,{'Content-type' : 'text/html'})
    var q = url.parse(req.url,true).query
    var text = 'Hi'+' '+q.name+'. '+'Your birthday is on '+q.date+'/'+q.month+'/'+q.year
    res.write(text)
    res.end()
}
http.createServer(myfun).listen(8080);