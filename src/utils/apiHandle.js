import axios from '../config/axios.config';
import { METHOD } from '../service/articlesApi/articlesApi.const';
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
  options,
}) => {
  // let result;
  switch (method) {
    case METHOD.POST:
      console.log('here');
      return axios
        .post(url, data, options)
        .then((response) => {
          return { result: response.data, status: response.status };
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data.error);
            return {
              result: error.response.data.error,
              status: error.response.data.status,
            };
          }
        });
    // result = JSON.parse(result);
    // console.log('result', result);
    // console.log(JSON.parse(JSON.stringify(response.data)));
    // result = JSON.parse(JSON.stringify(response));
    // break;
    case METHOD.PUT:
      return axios
        .put(url, data, options)
        .then((response) => {
          return { result: response.data, status: response.status };
        })
        .catch((error) => {
          if (error.response) {
            return {
              result: error.response.data.error,
              status: error.response.data.status,
            };
          }
        });
    // break;
    case METHOD.DELETE:
      return axios
        .delete(url, options)
        .then((response) => {
          return { result: response.data, status: response.status };
        })
        .catch((error) => {
          if (error.response) {
            return {
              result: error.response.data.error,
              status: error.response.data.status,
            };
          }
        });
    // break;
    default:
      return axios
        .get(url, options)
        .then((response) => {
          return { result: response.data, status: response.status };
        })
        .catch((error) => {
          if (error.response) {
            return {
              result: error.response.data.error,
              status: error.response.data.status,
            };
          }
        });
    // break;
  }
  // console.log('result', result.status);
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

export default { callAPI };
