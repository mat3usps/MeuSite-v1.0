var images = ['1.jpg', '2.jpg', '3.jpg'];
$('C:\Users\Mateus\Desktop\Meu Site\MeuSite.html').css({'background-image':'url(files/' + images[Math.floor(Math.random() * images.length)] + ')'});