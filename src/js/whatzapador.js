$("#btnAbrirChat").click((event) => {
    
    event.preventDefault();

    let numeroCelular = this.numeroCelular.value;
    let link = "https://web.whatsapp.com/send?phone=55";
    let linkCompleto = link+numeroCelular;

    //console.log(linkCompleto);

    //console.log($("iframe").attr('src', linkCompleto));
    // console.log('<object data="'+linkCompleto+'"/>');   

    // $("#mydiv").html('<object data="'+linkCompleto+'"/>');

    window.open(linkCompleto);
});