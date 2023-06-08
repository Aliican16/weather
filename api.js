
let citiesArray=new Array();


let url = 'https://ikarusoftwebapi.azurewebsites.net/api/Home/GetCustomerList'


//document.querySelector("#araBtn").addEventListener("click", async(e)=>{


let tbody = document.querySelector("#tbody");

document.querySelector("#sehirAdı").addEventListener("submit", async (e) => {

  e.preventDefault();
  try {
    let response = await axios(url);
    const { data:customerData } = response.data;

     $('#example').DataTable({
   
        data : customerData,
        columns: [
            { data: 'username' },
            { data: 'email' }
        ]
    });
    
  }
  catch (error) {
    alert("Böyle Bi ŞEHİR BULUNMAMAKTADIR.!!" +" "+error)

    e.target.reset();
  }

});
