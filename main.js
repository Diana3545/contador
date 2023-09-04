
const num = document.querySelector("#num");
const inc = document.querySelector("#inc");
const dec = document.querySelector("#dec");
const res = document.querySelector("#reset");

let count = 0;
num.textContent = count


inc.addEventListener("click", ()=>{count++;num.textContent = count;
console.log(count)
    if (count >=5)num.style.color="pink";
	if (count >=10)num.style.color="yellow";

});

dec.addEventListener("click", ()=>{count--;num.textContent = count;
    if (count >=0)num.style.color="#000";
	if (count >=5)num.style.color="pink";
	if (count >=10)num.style.color="yellow";

});

res.addEventListener("click", ()=>{
	count=0;
	num.textContent = count;
	num.style.color = "#000";

});
