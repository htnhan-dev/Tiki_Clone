function showContentAdvertisement(){
    const getBoxElement = document.querySelector('.content__advertisement');
    let images = [
        {
            id:1,
            image:'./assets/img/conten-advertisement/1.png',
            link:'',
        },
        {
            id:2,
            image:'./assets/img/conten-advertisement/2.png',
            link:'',
        },
        {
            id:3,
            image:'./assets/img/conten-advertisement/3.png',
            link:'',
        },
        {
            id:4,
            image:'./assets/img/conten-advertisement/4.png',
            link:'',
        }
    ]

    if(getBoxElement){
        let html = images.map(img=>{
            return ` 
            <a class="content__advertisement-link-img" href="${img.link}"><img class="content__advertisement-img" src="${img.image}"></a>
            
            `
        })
        getBoxElement.innerHTML = html.join("");
    }
    
}




showContentAdvertisement();
