//? MAIN.JS

const CoinInput = document.getElementById("input");   //1. part
const CoinBtn = document.getElementById("btn");




function CoinSearch (e) {
                              //5.part 
                                
e.preventDefault(); // burasi cok onemli tarayicinin varsayilan davranisi FORM ICIN buton maglum formun icindedir butona tikladigimizda formunu icinde oldugu icin buton
console.log("Arama butonu tıklandı"); // sayfayi yeniler tarayici bizde tarayicinin sayfayi yenilemesini iptal ediyoruz !!!
                            



    const CoinRankApiKey = "coinrankingfd080161bf3c6e9f143e6efa86956b64e891529ed7b1315c";     //3.part
  
    const CoinRankUrl = `https://api.coinranking.com/v2/coins?limit=100&offset=0&api_key=${CoinRankApiKey}`; // url nasil alinir dokumantasyonu end pointleri anlat
// base urlye degin ? ve & yapilarini ? sorgu belirtir & parametreleri ayirir birden fazla https://api.coinranking.com/v2/coins?limit=100&offset=0& burasi ilk 100 coin degeri
// api_key=${CoinRankApiKey} kullanicinin aradigi coin degerleri islesen degerleri bize getiriyor.


fetch(CoinRankUrl)

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

CoinBtn.addEventListener('click' , CoinSearch );

