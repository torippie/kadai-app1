const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const qs = require('querystring')
const url = require('url');

const index = fs.readFileSync('./index.ejs','utf8');
const sample = fs.readFileSync('./sample.ejs','utf8');
const style_css = fs.readFileSync('./style.css','utf8');

var server = http.createServer(getFromClient);
server.listen(3000);
console.log('Server start!');

function getFromClient(req,res){

    var url_parts = url.parse(rew.url,true);

    switch(url_parts.pathname){

        case '/':
          response_index(req,res);
            break;

        case '/sample':   
          response_index(req,res);
            break; 

        case '/style.css':
            res.writeHead(404,{'Content-Type':'text/html'}); 
            res.write(style_css);
            res.end();
            break; 

        default:
            res.writeHead(404,{'Content-Type':'text/html'}); 
            res.end('no page...');
            break; 
        }
    }

    function response_index(req,res) {
        var message = "what do you want to do?"
        var content = ejs.render(index, {
            title: "kadai",
            message: message,
        });

        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(content);
        res.end();
    }

    function response_index(req,res) {
        var message = '阪神優勝しました。ジョーシンでセールしてました。'
        if (req.method == 'POST') {
            var body = '';

            req.on('data',(data) => {
                body += data;
                console.log(qs.parse(body));
            });
            req.on('end', () => {
                var post_data = qs.parse(body);
                msg = 'It was written, "'+ post_data.msg + '."';
                var content = ejs.render(sample, {
                    title: "Thanks.",
                    message: msg
            });
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(content);
                res.end();
            });

        } else {
            var msg = "ページがありません。"
            var content = ejs.render(sample, {
                title: "Thanks.",
                message: msg,
            });
            res.writeHead(200, {'Content-Type':'text/html'});
                res.write(content);
                res.end();
        }
    }