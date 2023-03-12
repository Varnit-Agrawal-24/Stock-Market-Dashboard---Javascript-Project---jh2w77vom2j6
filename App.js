const api_key='DA452BSDFSBL814Z';
let submit=document.querySelector("#submit");

submit.addEventListener("click",()=>{
    let time=document.querySelector("#time-series").value;
    let symbol=document.querySelector("#symbol").value.toUpperCase();
    let interval="";
    if(time=="TIME_SERIES_INTRADAY"){
        interval="interval=15min&";
    } 
    const api=`https://www.alphavantage.co/query?function=${time}&symbol=${symbol}&${interval}apikey=${api_key}`;

    fetch(api)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
       console.log(data);
    })
    document.querySelector("#time-series").value="none";
    document.querySelector("#symbol").value="";
});

