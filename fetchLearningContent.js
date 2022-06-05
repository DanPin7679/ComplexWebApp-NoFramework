export const fetchLearningContent = (cb) => {
  fetch("./data.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => cb(jsondata.body));
};
