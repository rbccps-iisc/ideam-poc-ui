const request = require('request');
const url  = require('url');
const curl = new (require( 'curl-request' ))();
const elcita_share_url = 'https://electroniccity.rbccps.org:8443/api/1.0.0/share'
const exec = require('child_process').exec;
var api_key = '2yV42DThBljdyrm4d6qUHUmglooWyrIB';
var entity_id = 'etoilet';
 
exports.get = function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    //console.log(query); //{Object}

var child = exec('curl -k -X POST "https://electroniccity.rbccps.org:8443/api/1.0.0/share" -H \'apikey: ' + api_key + '\' -d \'{"entityID": "' + entity_id + '", "permission":"read", "validity":"100D", "requestorID":"testapp1", "email": "rajaraman.vasanth@gmail.com"}\''
,
    (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
res.json({'status':'OK','value':stdout, 'url':elcita_share_url})
        if (error !== null) {
            console.log(`exec error: ${error}`);
res.json({'status':'ERROR','value':error, 'url':elcita_share_url})
        }
});
    /*curl.setHeaders(['apikey: 6UugLVBMIdechjaQPNlDUb7WxMzPrzvf'])
	.setBody({ "entityID": query.e, "permission": query.p, "validity": ""+query.v, "requestorID":query.r, "email":query.email, "contact":query.c })
	.post('https://electroniccity.rbccps.org:8443/api/1.0.0/follow')
	.then(({statusCode, body, headers}) => {
    //console.log("s",statusCode, body, headers);
res.json({'status':'OK','value':body, 'url':elcita_follow_url})
*/

/*})
.catch((e) => {
    //console.log('error',e);
res.json(res.json({'status':'ERROR','value':error, 'url':elcita_follow_url}))
});
/*  request({'url':elcita_cat_url, 'json':true},function (error, response, body) {
            if(error) {
              res.json({'status':'ERROR','value':error, 'url':elcita_cat_url})
            } else {
              res.json({'status':'OK','value':body, 'url':elcita_cat_url})
          }
        });
*/
};

