function displayComments(response) {
  console.log(response.data.email);
}
let apiUrl = "https://jsonplaceholder.typicode.com/comments/1";
axios.get(apiUrl).then(displayComments);
