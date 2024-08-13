//? MAIN.JS

const coinInput = document.getElementById("input");   //1. part
const coinBtn = document.getElementById("btn");




function coinSearch (e) {
                              //5.part 
                                
e.preventDefault(); // burasi cok onemli tarayicinin varsayilan davranisi FORM ICIN buton maglum formun icindedir butona tikladigimizda formunu icinde oldugu icin buton
 // sayfayi yeniler tarayici bizde tarayicinin sayfayi yenilemesini iptal ediyoruz !!!
                            

const userInput = coinInput.trim().toLowerCase()   // girilen bilgi inputa bosluksuz ve kucukharfle olsun

if (!userInput) {       

    Swal.fire({
        icon: "error",
        title: "Oops, Elon Musk is Confused!",
        text: "Looks like the coin you searched for doesn't exist. Did you mean to search for 'Dogecoin'? Elon might have misheard you over the rocket engines! 😉🚀",
        footer: '<a href="#">Tips for effective coin searching</a>'
      });
    
}

    const coinRankApiKey = "coinrankingfd080161bf3c6e9f143e6efa86956b64e891529ed7b1315c";     //3.part
  
    const coinRankUrl = `https://api.coinranking.com/v2/coins?limit=100&offset=0&api_key=${coinRankApiKey}`; // url nasil alinir dokumantasyonu end pointleri anlat
// base urlye degin ? ve & yapilarini ? sorgu belirtir & parametreleri ayirir birden fazla https://api.coinranking.com/v2/coins?limit=100&offset=0& burasi ilk 100 coin degeri
// api_key=${CoinRankApiKey} kullanicinin aradigi coin degerleri islesen degerleri bize getiriyor.


fetch(coinRankUrl)

.then((res) => {
    if (!res.ok) {
        throw new Error ("Veri Cekme Islemi Basarisiz");
    }
    return res.json();
})

                                            //4.PART
.then((data) => {

  
    console.log("API Response:", data);  // butona tiklamadan buradan gelen api degerlerini goremeyiz api degerleri butona tiklaninca geliyor
    
    //buraya istedigimiz islem yazilir verinin alindigi kisim
})

.catch((error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message || "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  });


};











  //2.part

coinBtn.addEventListener('click' , coinSearch );

