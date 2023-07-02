let quote =document.getElementById('quote');
document.getElementById('generateButton').addEventListener('click',async()=>{
    try{
   let data =await fetch('http://api.quotable.io/random');
   let res=await data.json();
   quote.innerText=res.content;
    }catch(error){
     console.log(error);
    }
   
})