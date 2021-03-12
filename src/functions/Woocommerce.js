import axios from 'axios';
import Oauth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

const ck = 'ck_cbf1e44875fe38947151f05f13f5ac5c5780959b';
const cs = 'cs_d8bc66c849e5e19ac10fe20f5ec2fb1e2e36caac';
const baseURL = 'http://different-eventausstattung.hztech.biz/wp-json';

const paramsToString = (params) =>
  Object.entries(params).reduce(
    (acc, [key, value], index, array) =>
      `${acc}${key}=${encodeURIComponent(value)}${
        index !== array.length - 1 ? '&' : ''
      }`,
    '',
  );

const Woocommerce = {
  getCategories: () => {
    return makeRequest('/wc/v3/products/categories');
  },
};

function makeRequest(endpoint, method = 'GET') {
  const oauth = getOauth();

  const requestData = {
    url: baseURL + endpoint,
    method,
  };

  const requestHTTP =
    requestData.url + '?' + paramsToString(oauth.authorize(requestData));

  console.log(requestHTTP, 'respone');

  return axios.get(requestHTTP);
}

function getOauth() {
  return Oauth({
    consumer: {
      key: ck,
      secret: cs,
    },
    signature_method: 'HMAC-SHA1',
    hash_function: function (base_string, key) {
      return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
    },
  });
}

export default Woocommerce;
