const numberInput=document.getElementById("inputbox");
const  button=document.getElementById("btn");
const table=document.getElementById("output");

function generateTable(){
    const num=Number(numberInput.value);
    table.replaceChildren();
    for(let i=1;i<=10;i++){
        const row=document.createElement("p");
        row.textContent=`${num} x ${i} = ${num*i}`;
        table.appendChild(row);
    }

}
button.addEventListener("click",generateTable);
