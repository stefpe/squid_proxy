import fetch from 'node-fetch';
import HttpsProxyAgent from 'https-proxy-agent';

const proxy = "http://127.0.0.1:8080";

(async () => {
    const proxyAgent = new HttpsProxyAgent(proxy);
    const response = await fetch('https://medium.com', { agent: proxyAgent});
    const body = await response.text();
    console.log(body);
})();