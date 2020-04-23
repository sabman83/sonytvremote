
export  function send (url) {
  return axios
          .get(url)
          .then(function (response) {
            console.log("success : " + response);
          })
          .catch(function (error) {
            // handle error
            console.log("error : " + error);
          });
}

