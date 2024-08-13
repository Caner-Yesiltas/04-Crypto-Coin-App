//? MAIN.JS

const coinInput = document.getElementById("input");   //1. part
const coinBtn = document.getElementById("btn");




function coinSearch (e) {
                              //5.part 
                                
e.preventDefault(); // burasi cok onemli tarayicinin varsayilan davranisi FORM ICIN buton maglum formun icindedir butona tikladigimizda formunu icinde oldugu icin buton
 // sayfayi yeniler tarayici bizde tarayicinin sayfayi yenilemesini iptal ediyoruz !!!
                            

const userInput = coinInput.value.trim().toLowerCase()   // girilen bilgi inputa bosluksuz ve kucukharfle olsun

if (!userInput) {       
                                        //6.part
    Swal.fire({
        icon: "error",
        title: "Oops, Elon Musk is Confused!",
        text: "Did you mean to search for 'Dogecoin'? Elon might have misheard you over the rocket engines! 😉🚀",
        footer: '<a href="#">~ Tips For Effective Coin Searching HERE! ~ </a>'
      });
    
      return;
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

  
    console.log("API Response:", data);  // butona tiklamadan buradan gelen api degerlerini goremeyiz api degerleri butona tiklaninca geliyor iceriginde ne oldugunu goruruz 
    //debugging yaparken yani hata ayiklamada iyidir
    //buraya istedigimiz islem yazilir verinin alindigi kisim

//7.part tekrar yaziyoruz artik datayi aldik onu filtreleyip basacagiz

// datayi consolede goster parametre adi verdik bundan burada cikti de

const coins =data.data.coins; // data parametresiyle apidan gelen veriye ulasiyoruz bu veride data objectsi tanimlanmis objenin icinde data ve status adinda iki
// deger var bunlari . yontemi ile cekiyoruz ozelliklerini artik yeni degiskenimiz coins coins bir dizidir bunuda api belgelerinden ya da yaniti konsola basarak anlariz

const filteredCoins = coins.filter((coin) => {

    return  coin.name.toLowerCase().includes(userInput) || coin.symbol.toLowerCase().includes(userInput)  

    // coin.name coins dizisindeki her bir elemani temsil eder ve bu dizinin icinde name bir keydir namen degeri coin isimleridir bitcoin dodgecoin gibi bize bu nameler lazim
    // bu nameleri al kucuk harf yap ve userinputdaki deger ile aynimi ya da icerip iceriyormu bak VEYA 
    // SYMBOL keylerini al kucukharf yap ve sonra kullanicinin girdigi bilgilerle uyusuyormu bak bu iki uyusmadan biri varsa return ile bize geri dondur ! 
})

if (filteredCoins.length === 0) {
    Swal.fire({
        title: "Oops! Coin Not Found",
        text: "Looks like this coin is playing hide and seek!",
        icon: "question",
        footer: "Maybe it's just shy... or saving up for a grand entrance! 🚀💰"
    });
} else {
    displayCoins(filteredCoins);
}



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

