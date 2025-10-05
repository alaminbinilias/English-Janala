
const display=(arr)=>{
    const details= arr.map(it=>`<span class='btn'>${it}</span>`);
    return(details.join(" "));
}






const arr=["Hello","mita","Babago"];

display(arr);
