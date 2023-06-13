let dhonioldinfo = {
    imgurl: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg?w=400&h=300&c=crop",
    name: "Dhoni",
    Description: "Cricket player"
}


let displayobject;
let  getRandomUser = function(){
    if (isdhoniold == true){
        displayobject = dhoniyounginfo;
        isdhoniold = false;
    }
    else{
        displayobject = dhonioldinfo;
        isdhoniold = true;
    }
    document.getElementById("dhoni_img").src = displayobject.imgurl;
    document.getElementById("dhoni_name").innerHTML = displayobject.name;
    document.getElementById("dhoni_desc").innerHTML = displayobject.Description;
}