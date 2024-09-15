
async function API() {
    try{
    const res= await fetch('https://66e527625cc7f9b6273c701a.mockapi.io/endpoint/register')
    const data=await res.json()
    return data;
    }
    catch(error){
        console.log(error);
    }
    
}
async function APIDATA() {
    const apidata=await API()
    const isact=apidata.filter(data=>data.isActive)
    console.log(isact)
    const str=apidata.map((data)=>(console.log(data)))
    
}
APIDATA()