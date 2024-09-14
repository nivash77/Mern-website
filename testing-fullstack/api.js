
async function API() {
    try{
    const res= await fetch('https://66e527625cc7f9b6273c701a.mockapi.io/endpoint/register')
    const data=await res.json()
    console.table(data)
    }
    catch(error){
        console.log(error);
    }
    
}
API()