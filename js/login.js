const form = document.querySelector("#login").addEventListener("submit",async (e)=>{
    e.preventDefault()
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const warning = document.querySelector(".error");
    console.log(email,password)
    
    const formData = {
        email,
        password,
    }

    await fetch("http://localhost:3000/api/auth/login",{
        method:"POST",
        mode:"cors",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
            'withCredentials':true,
        },
        body:JSON.stringify(formData)
    })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            if(res.msg.includes("welcome")){

                window.location.href = "../index.html"
            }else{
                password.value = ""
                warning.style.display = "block"
            }
            
        })
        .catch(err=>{
            console.log(err)
            password.value = ""
            warning.style.display = "block"
        })
})