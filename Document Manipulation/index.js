// document.getElementById('b').style.border = '2px solid blue';
// let element = document.getElementById('b');
// console.log(element);
// let elemClass = document.getElementsByClassName("a");
// console.log(elemClass);
// // elemClass[0].style.background = 'yellow';
// elemClass[0].classList.add("bg-primary"); //class added
// // can also add classes that are not yet created
// elemClass[0].classList.add("text-white");
// // elemClass[0].classList.remove("text-white");
// console.log(element.innerHTML);
// console.log(element.innerText);

let tagName = document.getElementsByTagName('div');
console.log(tagName);

newElement = document.createElement('p');
newElement.innerText = "Paragraph from java script";
tagName[0].appendChild(newElement);
otherElement = document.createElement('h1');
otherElement.innerText = 'H1 from JavaScript';
tagName[0].replaceChild(otherElement,newElement);
// removeChild(element) --> removes an element

sel = document.querySelector('.a');
console.log("Query Selector =",sel);

sel = document.querySelectorAll('.c');
console.log(sel);
