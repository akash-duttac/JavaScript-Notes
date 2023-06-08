/** localStorage.clear()
undefined
localStorage.getItem("akash")
null
localStorage.setItem('name','akash')
undefined
localStorage.getItem('akash')
null
localStorage.getItem('name')
'akash'
localStorage.removeItem('name')
localStorage.clear()
undefined */
obj = {name: "Akash", length: 1, a: {this: 'that"or'}}
jso = JSON.stringify(obj);
console.log(typeof obj); 
console.log(typeof jso);
console.log(obj); 
console.log(jso); 
parsed = JSON.parse(`{"name":"Akash","length":1,"a":{"this":"that\\"or"}}`)
console.log(parsed);

//Template literals - backticks
a = 34;
console.log(`this is my $(a)`);