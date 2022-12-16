const Logout = async () => {
  await fetch("http://localhost:3000/api/auth/logout", {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.msg.includes("logged out")) {
        document.cookie =
          "AuthCookie" +
          "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=localhost;";
        document.cookie =
          "Me" +
          "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=localhost;";
        window.location.href = "../index.html";
      }
    })
    .catch((err) => {
      alert("Can't logout something went wrong" + err);
    });
};

const create = ()=>{
    window.location.href = "./newPost.html"
}

window.onload = async () => {
  //fill fields with info
  if (document.cookie.includes("AuthCookie")) {
    let myUserName = document.querySelector(".myUserName");
    let myEmail = document.querySelector(".myEmail");
    let myRole = document.querySelector(".myRole");
    let myPromise = new Promise(async (resolve, reject) => {
      let array = document.cookie.split("; ");
      let id;
      array.map((item) => {
        if (item.includes("id")) {
          id = item.slice(3);
        }
      });
      resolve({ id: id });
      reject("poo");
    });
    await myPromise.then((id) => {
      fetch("http://localhost:3000/api/user/me", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
        body: JSON.stringify(id),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          myEmail.innerHTML = "e-mail: " + res.email;
          myRole.innerHTML = "Role: " + res.role;
          myUserName.innerHTML = "Welcome " + res.name + "!";
          if (res.role == "Admin") {
            document.querySelector(
              ".buttons"
            ).innerHTML += `              <button class="newPost" onclick="create()">New Post</button>
                    <button class="manageUsers" >Manage Users</button>`;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
};
