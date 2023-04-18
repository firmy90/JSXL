const axios = require("axios");
const md = require("./modules");
const url = `https://api.openweathermap.org/data/2.5/weather?q=Kielce&appid=${md.apikey()}`;

axios
  .get(url)
  .then((response) => {
    console.log(response.data);
    console.log(response.data.coord.lat);
  })
  .catch((error) => {
    if (error.code === "ENOTFOUND") {
      console.log("Unable to connect to API servers.");
    }
    console.log(error.response.data.cod);
    if (error.response.data.cod == "404") {
      throw new Error("Unable to fetch weather");
    }
    // console.log(error.message);
    // console.log(error.response);
  });

//   Unable to connect to API servers.
// AxiosError: getaddrinfo ENOTFOUND aapi.openweathermap.org
//     at AxiosError.from (/home/javascript/Documents/JavaScriptXL/JSXL/weather-app/node_modules/axios/dist/node/axios.cjs:825:14)
//     at RedirectableRequest.handleRequestError (/home/javascript/Documents/JavaScriptXL/JSXL/weather-app/node_modules/axios/dist/node/axios.cjs:2971:25)
//     at RedirectableRequest.emit (node:events:513:28)
//     at eventHandlers.<computed> (/home/javascript/Documents/JavaScriptXL/JSXL/weather-app/node_modules/follow-redirects/index.js:14:24)
//     at ClientRequest.emit (node:events:513:28)
//     at TLSSocket.socketErrorListener (node:_http_client:494:9)
//     at TLSSocket.emit (node:events:513:28)
//     at emitErrorNT (node:internal/streams/destroy:151:8)
//     at emitErrorCloseNT (node:internal/streams/destroy:116:3)
//     at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
//   hostname: 'aapi.openweathermap.org',
//   syscall: 'getaddrinfo',
//   code: 'ENOTFOUND',
//   errno: -3008,
//   config: {
//     transitional: {
//       silentJSONParsing: true,
//       forcedJSONParsing: true,
//       clarifyTimeoutError: false
//     },
//     adapter: [ 'xhr', 'http' ],
//     transformRequest: [ [Function: transformRequest] ],
//     transformResponse: [ [Function: transformResponse] ],
//     timeout: 0,
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//     maxContentLength: -1,
//     maxBodyLength: -1,
//     env: { FormData: [Function], Blob: [class Blob] },
//     validateStatus: [Function: validateStatus],
//     headers: AxiosHeaders {
//       Accept: 'application/json, text/plain, */*',
//       'User-Agent': 'axios/1.3.5',
//       'Accept-Encoding': 'gzip, compress, deflate, br'
//     },
//     method: 'get',
//     url: 'https://aapi.openweathermap.org/data/2.5/weather?q=Kielce&appid=932e9946953aa6fbcc5b20db4e8051a0',
//     data: undefined
//   },
//   request: <ref *1> Writable {
//     _writableState: WritableState {
//       objectMode: false,
//       highWaterMark: 16384,
//       finalCalled: false,
//       needDrain: false,
//       ending: false,
//       ended: false,
//       finished: false,
//       destroyed: false,
//       decodeStrings: true,
//       defaultEncoding: 'utf8',
//       length: 0,
//       writing: false,
//       corked: 0,
//       sync: true,
//       bufferProcessing: false,
//       onwrite: [Function: bound onwrite],
//       writecb: null,
//       writelen: 0,
//       afterWriteTickInfo: null,
//       buffered: [],
//       bufferedIndex: 0,
//       allBuffers: true,
//       allNoop: true,
//       pendingcb: 0,
//       constructed: true,
//       prefinished: false,
//       errorEmitted: false,
//       emitClose: true,
//       autoDestroy: true,
//       errored: null,
//       closed: false,
//       closeEmitted: false,
//       [Symbol(kOnFinished)]: []
//     },
//     _events: [Object: null prototype] {
//       response: [Function: handleResponse],
//       error: [Function: handleRequestError],
//       socket: [Function: handleRequestSocket]
//     },
//     _eventsCount: 3,
//     _maxListeners: undefined,
//     _options: {
//       maxRedirects: 21,
//       maxBodyLength: Infinity,
//       protocol: 'https:',
//       path: '/data/2.5/weather?q=Kielce&appid=932e9946953aa6fbcc5b20db4e8051a0',
//       method: 'GET',
//       headers: [Object: null prototype],
//       agents: [Object],
//       auth: undefined,
//       beforeRedirect: [Function: dispatchBeforeRedirect],
//       beforeRedirects: [Object],
//       hostname: 'aapi.openweathermap.org',
//       port: '',
//       agent: undefined,
//       nativeProtocols: [Object],
//       pathname: '/data/2.5/weather',
//       search: '?q=Kielce&appid=932e9946953aa6fbcc5b20db4e8051a0'
//     },
//     _ended: true,
//     _ending: true,
//     _redirectCount: 0,
//     _redirects: [],
//     _requestBodyLength: 0,
//     _requestBodyBuffers: [],
//     _onNativeResponse: [Function (anonymous)],
//     _currentRequest: ClientRequest {
//       _events: [Object: null prototype],
//       _eventsCount: 7,
//       _maxListeners: undefined,
//       outputData: [],
//       outputSize: 0,
//       writable: true,
//       destroyed: false,
//       _last: true,
//       chunkedEncoding: false,
//       shouldKeepAlive: false,
//       maxRequestsOnConnectionReached: false,
//       _defaultKeepAlive: true,
//       useChunkedEncodingByDefault: false,
//       sendDate: false,
//       _removedConnection: false,
//       _removedContLen: false,
//       _removedTE: false,
//       strictContentLength: false,
//       _contentLength: 0,
//       _hasBody: true,
//       _trailer: '',
//       finished: true,
//       _headerSent: true,
//       _closed: false,
//       socket: [TLSSocket],
//       _header: 'GET /data/2.5/weather?q=Kielce&appid=932e9946953aa6fbcc5b20db4e8051a0 HTTP/1.1\r\n' +
//         'Accept: application/json, text/plain, */*\r\n' +
//         'User-Agent: axios/1.3.5\r\n' +
//         'Accept-Encoding: gzip, compress, deflate, br\r\n' +
//         'Host: aapi.openweathermap.org\r\n' +
//         'Connection: close\r\n' +
//         '\r\n',
//       _keepAliveTimeout: 0,
//       _onPendingData: [Function: nop],
//       agent: [Agent],
//       socketPath: undefined,
//       method: 'GET',
//       maxHeaderSize: undefined,
//       insecureHTTPParser: undefined,
//       path: '/data/2.5/weather?q=Kielce&appid=932e9946953aa6fbcc5b20db4e8051a0',
//       _ended: false,
//       res: null,
//       aborted: false,
//       timeoutCb: null,
//       upgradeOrConnect: false,
//       parser: null,
//       maxHeadersCount: null,
//       reusedSocket: false,
//       host: 'aapi.openweathermap.org',
//       protocol: 'https:',
//       _redirectable: [Circular *1],
//       [Symbol(kCapture)]: false,
//       [Symbol(kBytesWritten)]: 0,
//       [Symbol(kEndCalled)]: true,
//       [Symbol(kNeedDrain)]: false,
//       [Symbol(corked)]: 0,
//       [Symbol(kOutHeaders)]: [Object: null prototype],
//       [Symbol(kUniqueHeaders)]: null
//     },
//     _currentUrl: 'https://aapi.openweathermap.org/data/2.5/weather?q=Kielce&appid=932e9946953aa6fbcc5b20db4e8051a0',
//     [Symbol(kCapture)]: false
//   },
//   cause: Error: getaddrinfo ENOTFOUND aapi.openweathermap.org
//       at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:107:26) {
//     errno: -3008,
//     code: 'ENOTFOUND',
//     syscall: 'getaddrinfo',
//     hostname: 'aapi.openweathermap.org'
//   }
// }
