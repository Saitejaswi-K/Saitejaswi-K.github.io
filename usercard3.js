let dhonioldinfo = {
    imgurl: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg?w=400&h=300&c=crop",
    name: "Dhoni",
    Description: "Cricket player"
}


let displayobject;
let  getRandomUser = function(){
    fetch('https://randomuser.me/api')
    .then(Response => Response.json())
    .then(data => console.log(data))
    document.getElementById("dhoni_img").src = displayobject.imgurl;
    document.getElementById("dhoni_name").innerHTML = displayobject.name;
    document.getElementById("dhoni_desc").innerHTML = displayobject.Description;
}