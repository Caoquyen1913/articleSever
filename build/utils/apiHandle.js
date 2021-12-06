"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("../config/axios.config"));

var _articlesApi = require("../service/articlesApi/articlesApi.const");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import responseHandle from './responseHandle';
// const callAPI = async ({ url, method, data, options }) => {
//   try {
//     let result = {};
//     switch (method) {
//       case METHOD.POST:
//         console.log('here');
//         result = await axios.post(url, data, options);
//         // result = JSON.parse(result);
//         console.log('result', result);
//         // console.log(JSON.parse(JSON.stringify(response.data)));
//         // result = JSON.parse(JSON.stringify(response));
//         break;
//       case METHOD.PUT:
//         result = await axios.put(url, data, options);
//         break;
//       case METHOD.DELETE:
//         result = await axios.delete(url, options);
//         break;
//       default:
//         console.log('go here');
//         result = await axios.get(url, options);
//         break;
//     }
//     // console.log('result', result.status);
//     if (result.response)
//       return responseHandle.send(result.status, {
//         errors: [
//           {
//             error: result.error,
//           },
//         ],
//       });
//     return result.data;
//   } catch (error) {
//     return responseHandle.send(result.status, {
//       errors: [
//         {
//           error: error.status,
//         },
//       ],
//     });
//   }
// };
const callAPI = ({
  url,
  method,
  data,
  options
}) => {
  // let result;
  switch (method) {
    case _articlesApi.METHOD.POST:
      console.log('here');
      return _axios.default.post(url, data, options).then(response => {
        return {
          result: response.data,
          status: response.status
        };
      }).catch(error => {
        if (error.response) {
          console.log(error.response.data.error);
          return {
            result: error.response.data.error,
            status: error.response.data.status
          };
        }
      });
    // result = JSON.parse(result);
    // console.log('result', result);
    // console.log(JSON.parse(JSON.stringify(response.data)));
    // result = JSON.parse(JSON.stringify(response));
    // break;

    case _articlesApi.METHOD.PUT:
      return _axios.default.put(url, data, options).then(response => {
        return {
          result: response.data,
          status: response.status
        };
      }).catch(error => {
        if (error.response) {
          return {
            result: error.response.data.error,
            status: error.response.data.status
          };
        }
      });
    // break;

    case _articlesApi.METHOD.DELETE:
      return _axios.default.delete(url, options).then(response => {
        return {
          result: response.data,
          status: response.status
        };
      }).catch(error => {
        if (error.response) {
          return {
            result: error.response.data.error,
            status: error.response.data.status
          };
        }
      });
    // break;

    default:
      return _axios.default.get(url, options).then(response => {
        return {
          result: response.data,
          status: response.status
        };
      }).catch(error => {
        if (error.response) {
          return {
            result: error.response.data.error,
            status: error.response.data.status
          };
        }
      });
    // break;
  } // console.log('result', result.status);
  // if (result.response)
  //   return responseHandle.send(result.status, {
  //     errors: [
  //       {
  //         error: result.error,
  //       },
  //     ],
  //   });
  // return result.data;

};

var _default = {
  callAPI
};
exports.default = _default;
//# sourceMappingURL=apiHandle.js.map