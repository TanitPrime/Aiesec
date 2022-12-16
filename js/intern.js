const container = document.querySelector(".data-display");

const getData = async () => {
  return (data = await fetch("http://localhost:3000/api/posts/post/intern", {
    mode: "cors",
    credentials:"include"
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    }));
};

getData()
  .then((data) => {
    console.log(data)
    if(document.cookie.includes("Guest")){console.log("i am a guest")}
    if (data.msg == "protected route") {
      container.innerHTML = `<h1>you must be logged in to view</h1>`;
    } else if(data.length > 0){
      data.map((item) => {
        if(document.cookie.includes("Admin")){
          container.innerHTML += `
          <div class="opportunity">
            <div class="pic">pic here teehee</div>
            <div class="body">
                <h1 id="title">${item.title}</h1>
                <p class="disc">${item.disc}</p>
                <button class="Apply">Apply</button>
                <button class="Apply" style="right:90px">Delete</button>
                <button class="Apply" style="right:160px">Edit</button>
            </div>
          </div>
          `;
        }else{

          container.innerHTML += `
                                <div class="opportunity">
                                  <div class="pic">pic here teehee</div>
                                  <div class="body">
                                      <h1 id="title">${item.title}</h1>
                                      <p class="disc">${item.disc}</p>
                                      <button class="Apply">Apply</button>
                                  </div>
                                </div>
                                `;
        }
      });
    }
    else{
      container.innerHTML = `<h1>no opportunities available</h1>`;
    }
  })
  .catch((err) => {
    container.innerHTML = `<h1>server is down</h1>`;
    console.log(err);
  });
