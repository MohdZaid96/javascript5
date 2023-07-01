async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

function displayData(data) {
  data.forEach((el) => {
    let div = document.createElement("div");

    let p = document.createElement("p");
		p.textContent = el.title;

    let img = document.createElement("img");
    img.src = el.image;

    div.append(img, p);
    document.getElementById('display-container').append(div);
  });
}

export { getData, displayData }