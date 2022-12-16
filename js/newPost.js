if (document.cookie.includes("Admin")) {
  document
    .querySelector("#opportunityForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = document.querySelector("#title").value;
      const category = document.querySelector("#category").value;
      const disc = document.querySelector("#disc").value;
      const imgLink = document.querySelector("#imgLink").value;

      const formData = {
        title,
        category,
        disc,
        imgLink,
      };

      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.text())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    });
}
