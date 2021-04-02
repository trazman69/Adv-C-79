menu_list_array = ["Seven Cheese Pizza",
"Palak Paneer Pizza","Veggie Extravaganza Pizza",
"Special Chicken Pizza"
 ];

 function getmenu(){
     var htmldata;
     htmldata="<ol class= 'menulist'>"
     menu_list_array.sort();
     for(var i=0;i<menu_list_array.length;i++){
       htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
     }
     htmldata-htmldata+"<ol>"
     document.getElementById("display_menu").innerHTML = htmldata;
    }

    function additem(){
        var htmldata;
var item-document.getElementById("add_item").value;
menu_list_array.push(Item);
menu_list_array.sort();
htmldate="<section class-'cards'>"
for(var i=0;i<menu_list_array.length;i++)
htmldata-htmldata+'<div class="card">' +'<img scr="https://s3-media3.fl.yelpcdn.com/bphoto/hR7l1X4hX70IpdbgIv6ygg/o.jpg"/>' + menu_list_array[i] + '</div>'
    }
    `${htmldata - htmldata}</section>`
    document.getElementById("display_addmeu").innerHTML - htmldata;
}