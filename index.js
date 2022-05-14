$("#botao").click(function(event){
    event.preventDefault();

    let dia= $("#data").val()
    console.log(dia);


    let chaveApi= "hcTqKUy2MqBktRecNTx4MtgkjOHoyNtl3I9q2OFz&date="
    let urlApi= "https://api.nasa.gov/planetary/apod?api_key="

    $.ajax({
        url:`${urlApi}${chaveApi}${dia}`, 
        success: function(result){
            console.log(result);

            $("#titulo").html(`<h1>${result.title}</h1>`)

            if (result.media_type == "image") { $("#imagem").html(`<img src="${result.url}"> <figcaption>${result.copyright}</figcaption>`)
        } else if (result.media_type == "video") { $("#imagem").html(`<iframe src="${result.url}"> </iframe>`) }

            
            $("#texto").html(`<p>${result.explanation}</p>`)

        } 

    })
})









// let enviar = document.getElementById('botao');

// // adiciona um event listener no botão da função enviaApi quando é clicado
// enviar = addEventListener("click", function(event) {
//     event.preventDefault();
//     console.log("click no botao")
//     //enviaApi()
// })

// // função assincrona para buscar a data do api
//     async function enviaApi(){
//     let chaveApi = "hcTqKUy2MqBktRecNTx4MtgkjOHoyNtl3I9q2OFz"
//     let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${chaveApi}`);
//     console.log(response)
//     let data = await response.json()
//     console.log(data)
//     dataApi(data)
// } 


// // função que faz alguma coisa quando puxa a data da api
// // o nome da função vai ser de acordo com o que ela está fazendo
// function dataApi(data){
//     $("#teste").html("Estou fazendo um teste")
//     document.querySelector("#content").innerHTML += data.explanation
//     document.querySelector('#content').innerHTML += `<img src="${data.url}">`
// }

