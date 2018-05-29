# POC Meteor 1.6.1 + Angular 6 + Ionic 4

Available on [github]()

Based on:
* [abritopach/angular-ionic-master-detail](https://github.com/abritopach/angular-ionic-master-detail)
* [runisland/meteor-ionic4](https://github.com/runisland/meteor-ionic4)

ATM doesn't work, see [meteor-1-6-angular-6-ionic4 wrong configuration](https://stackoverflow.com/questions/50574612/meteor-1-6-angular-6-ionic4) 


## How to

```bash
$ git clone https://github.com/atao60/meteor-angular-ionic4.git
$ cd meteor-angular-ionic4
$ meteor npm install
$ meteor

```

Open the browser with `http://localhost:3000`

Open the browser's console (here with FF):

```
SyntaxError: export declarations may only appear at top level of a module
modules.js:89289
TypeError: Package.modules is undefined
[En savoir plus]
babel-runtime.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
promise.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
url.js:17:5
TypeError: Package.url is undefined
[En savoir plus]
http.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
dynamic-import.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
ecmascript-runtime-client.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
base64.js:17:5
TypeError: Package.base64 is undefined
[En savoir plus]
ejson.js:17:5
TypeError: Package.ejson is undefined
[En savoir plus]
diff-sequence.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
geojson-utils.js:17:5
TypeError: Package.ejson is undefined
[En savoir plus]
id-map.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
random.js:17:5
TypeError: Package.ejson is undefined
[En savoir plus]
mongo-id.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
ordered-dict.js:17:5
TypeError: Package["diff-sequence"] is undefined
[En savoir plus]
minimongo.js:17:5
TypeError: Package.ejson is undefined
[En savoir plus]
check.js:17:5
TypeError: Package.random is undefined
[En savoir plus]
retry.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
callback-hook.js:17:5
TypeError: Package.check is undefined
[En savoir plus]
ddp-common.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
reload.js:17:5
TypeError: Package.retry is undefined
[En savoir plus]
socket-stream-client.js:17:5
TypeError: Package.check is undefined
[En savoir plus]
ddp-client.js:17:5
TypeError: Package["ddp-client"] is undefined
[En savoir plus]
ddp.js:14:5
TypeError: Package.minimongo is undefined
[En savoir plus]
allow-deny.js:17:5
TypeError: Package["allow-deny"] is undefined
[En savoir plus]
mongo.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
webapp.js:17:5
TypeError: Package.modules is undefined
[En savoir plus]
es5-shim.js:17:5
TypeError: Package["ddp-client"] is undefined
[En savoir plus]
livedata.js:14:5
TypeError: Package.retry is undefined
[En savoir plus]
autoupdate.js:19:5
TypeError: Package.mongo is undefined
[En savoir plus]
global-imports.js:3:1
ReferenceError: meteorInstall is not defined
[En savoir plus]
app.js:1:5

```