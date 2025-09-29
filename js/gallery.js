/*Name this external file gallery.js*/
function tabupdate(){
   let image_list = document.querySelectorAll(".preview");
   console.log(image_list);
   for(i=0; i<image_list.length; i++){
         let currentimgalt = image_list[i].alt;
         image_list[i].setAttribute("tabindex", "0");
        console.log("current image:" + currentimgalt);
        console.log("Tabindex value:" +image_list[i].getAttribute("tabindex"));
   }
}

function upDate(previewPic){
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo(){   
   document.getElementById('image').style.backgroundImage = "url('')";
   document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}