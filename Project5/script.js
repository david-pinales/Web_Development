

var imgArray = [
    "assets/desserts1.jpg", "assets/desserts2.jpg", "assets/desserts3.jpg", "assets/desserts4.jpg", "assets/dessert5.jpg", "assets/dessert6.jpg"
]

// var index = 0;
// var indexReverse = index.reverse();
// function previous(){
//     document.querySelector("img").setAttribute("src", imgArray[indexReverse]);
//     index++;
//     if ( >= imgArray.length){ //Fix this code!
//         index = 0;
//     }
// }

function next(){
    document.querySelector("img").setAttribute("src", imgArray[index]);
    index++;
    if (index >= imgArray.length){
        index = 0;
    }
}
    
    
