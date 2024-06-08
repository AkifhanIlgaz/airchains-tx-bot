<h1 align="center">Airchains</h1>

> UYARI : Güvenlik için lütfen ana cüzdanınızı veya airchains kurarken yedeklediğiniz cüzdanı kullanmayın.

> Metamask setInterval ve setTimeout fonksiyonlarına izin vermediği için ilk önce Metamask'ın güncellenmiş halini kuracağız.

```console
# Repoyu yüklüyoruz
git clone https://github.com/AkifhanIlgaz/mm-unit0.git
```

> Eğer bilgisayarınızda git yüklü değilse zip olarak da indirebilirsiniz.

#

![image](https://github.com/AkifhanIlgaz/airchains-tx-bot/blob/main/images/m1.JPG)

> Tarayıcının URL kısmına aşağıdakini yazıyoruz ve sağ üstten geliştirici modunu aktif ediyoruz.

```
chrome://extensions
```

> Yüklediğimiz klasörü tarayıcıya sürükleyip bırakıyoruz.

> Yeni bir cüzdan oluşturuyoruz ve Rues'in Airchains reposunda eklediğimiz ağı buraya da ekliyoruz ve cüzdana token gönderiyoruz.

> F12 veya Sağ Tık + İncele ile konsolu açıyoruz.

> allow pasting yazıp enterliyoruz

> Aşağıdaki kodu konsola yapıştırıyoruz

```console
 () => {
    setInterval(() => {
      setTimeout(() => {
        document
          .querySelector('div.wallet-overview__buttons button:nth-child(2)')
          .click();
      }, 500);

      setTimeout(() => {
        document
          .querySelector(
            'div.send__select-recipient-wrapper__group div.send__select-recipient-wrapper__group-item'
          )
          .click();
      }, 1000);

      setTimeout(() => {
        document.querySelector('footer button:nth-child(2)').click();
      }, 3500);

      setTimeout(() => {
        document.querySelector('footer button:nth-child(2)').click();
      }, 7000);
    }, 10000);
  }()
```
