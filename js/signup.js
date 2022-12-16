const form = document.querySelector("#signup").addEventListener("submit",(e)=>{
    e.preventDefault()
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const repeat_password = document.querySelector("#repeat_password").value;
    console.log(name,email,password,repeat_password)
    
    const formData = {
        name,
        email,
        password,
        repeat_password
    }

    fetch("http://localhost:3000/api/auth/signup",{
        method:"POST",
        mode:"cors",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })
        .then(res=>res.text())
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))
})