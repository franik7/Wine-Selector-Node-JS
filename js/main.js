document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const meat = document.querySelector("#meat").value;
  const res = await fetch(`/api?meat=${meat}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#typeOfMeat").textContent = data.name
 
}