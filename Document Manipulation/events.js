function clicked(){
    console.log("This button was clicked");
}
// window.onload = function(){
//     console.log("Document was loaded");
// }

let prevHTML = document.querySelectorAll('.b')[0].innerHTML;
b.addEventListener('mouseup', function(){
    document.querySelectorAll('.b')[0].innerHTML = prevHTML;
    console.log("Mouse up when clicked on b");
})

// b.addEventListener('mouseover', function(){
//     console.log("Mouseover on container")
// })

// b.addEventListener('mouseout', function(){
//     console.log("Mouseout on container")
// })

// b.addEventListener('mouseup', function(){
//     console.log("Mouse up on container")
// })

// b.addEventListener('mousedown', function(){
//     console.log("Mouse down on container")
// })
