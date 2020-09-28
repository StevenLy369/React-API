

// export const makeApiCall = () => {
//     return dispatch => {
//       dispatch(requestHeadlines);
//       return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
//         .then(response => response.json())
//         .then(
//           (jsonifiedResponse) => {
//             dispatch(getHeadlinesSuccess(jsonifiedResponse.results));
//           })
//         .catch((error) => {
//           dispatch(getHeadlinesFailure(error));
//         });
//     }
//   }