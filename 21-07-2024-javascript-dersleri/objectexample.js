// 1 - Sipariş bilgilerini object içerisinde saklayınız.
// 2 - Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv:18)
// 3 - Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

/*
    sipariş id: 102
    sipariş tarihi: 30.12.2023
    ödeme şekli: kredi kartı
    kargo adresi: istanbul şişli
    satın alınan ürünler:
            ürün id : 5
            ürün başlığı: Iphone 14 pro
            ürün url: http://abc.com/iphone-14-pro
            ürün fiyatı: 32000

            ürün id : 6
            ürün başlığı: Iphone 14 pro max
            ürün url: http://abc.com/iphone-14-pro-max
            ürün fiyatı: 35000

    müşteri
      müşteri id : 12

     satıcı
      firma id : 34
      firma adı : apple türkiye 




sipariş id: 101
    sipariş tarihi: 31.12.2023
    ödeme şekli: kredi kartı
    kargo adresi: istanbul şişli 
    satın alınan ürünler:
            ürün id : 5
            ürün başlığı: Iphone 13 pro
            ürün url: http://abc.com/iphone-13-pro
            ürün fiyatı: 22000

            ürün id : 6
            ürün başlığı: Iphone 13 pro max
            ürün url: http://abc.com/iphone-13-pro-max
            ürün fiyatı: 25000

    müşteri
      müşteri id : 12

     satıcı
      firma id : 34
      firma adı : apple türkiye 
*/

let siparis_1 = {
    "id": 101,
    "tarih": "31.12.2023",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "ilce": "sisli",
        "il": "istanbul"
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "Iphone 13 pro",
            "urun_url": "http://abc.com/iphone-13-pro",
            "fiyat": 22000
        },
        {
            "urun_id": 6,
            "urun_adi": "Iphone 13 pro max",
            "urun_url": "http://abc.com/iphone-13-pro-max",
            "fiyat": 25000
        }
    ]  
}


let siparis_2 = {
    "id": 102,
    "tarih": "31.12.2023",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "ilce": "sisli",
        "il": "istanbul"
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "Iphone 14 pro",
            "urun_url": "http://abc.com/iphone-14-pro",
            "fiyat": 32000
        },
        {
            "urun_id": 6,
            "urun_adi": "Iphone 14 pro max",
            "urun_url": "http://abc.com/iphone-14-pro-max",
            "fiyat": 35000
        }
    ]  
}


let siparis1_toplam = (siparis_1.urunler[0].fiyat + siparis_1.urunler[1].fiyat ) * 1.18;
let siparis2_toplam = (siparis_2.urunler[0].fiyat + siparis_2.urunler[1].fiyat ) * 1.18;

console.log(siparis1_toplam);
console.log(siparis2_toplam);

let toplam_siparis = siparis1_toplam + siparis2_toplam;


console.log(toplam_siparis);