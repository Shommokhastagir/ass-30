const rot = document.getElementById('rot');
const ul = document.createElement('ul')



let arr= ['home', 'contact', 'about us', 'help'];

arr.forEach(arr => {
    
    const li = document.createElement("li");
    li.textContent=arr
    ul.appendChild(li);

}); 
rot.appendChild(ul);