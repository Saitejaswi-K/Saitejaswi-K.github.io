let dhonioldinfo = {
    imgurl: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg?w=400&h=300&c=crop",
    name: "Dhoni",
    Description: "Cricket player"
}
let dhoniyounginfo = {
    imgurl: "https://c.ndtvimg.com/2021-06/jvqa57jo_ms-dhoni-throwback-instagram_625x300_07_June_21.jpg",
    name: "Mahendra Singh Dhoni",
    Description: "Captain Cool"
}

let isdhoniold = true;
let displayobject;
let flipdata = function(){
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