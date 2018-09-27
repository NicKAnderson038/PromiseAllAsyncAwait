document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
<div>
  <h4>Console out promise all.</h4>
</div>
`;
const getFoo = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
    let data = await response.json();
    console.log("Todos Data: ", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getBar = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/4");
    let data = await response.json();
    console.log("Posts Data: ", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

Promise.all([getFoo(), getBar()])
  .then(res => console.log("My Results: ", res))
  .catch(err => console.error(err));
