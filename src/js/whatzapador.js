$("#btnAbrirChat").click((event) => {
    
    event.preventDefault();

    let numeroCelular = this.numeroCelular.value;
    let link = "https://api.whatsapp.com/send?phone=55";
    let linkCompleto = link+numeroCelular;

    //console.log(linkCompleto);

    //console.log($("iframe").attr('src', linkCompleto));

    window.open(linkCompleto);
});