let container = document.querySelector("#container");

container.innerHTML += `
<div class="item">
        <h5><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></h5>
    </div>
</div>`;


document.querySelector(".item").style = "position:relative;height:100%"
document.querySelector("#special").src="../img/volanteer_3.jpg"
document.querySelector("#special").style="height:100%;width:100%"