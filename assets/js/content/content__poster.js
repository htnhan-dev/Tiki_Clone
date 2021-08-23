function showPoster(){
    const getBoxElement = document.querySelector('.content__poster');
    let poster = [
        {
            id:1,
            image:'./assets/img/porduct-sale-content/poster/1.png',
            link:'',
        },
        {
            id:2,
            image:'./assets/img/porduct-sale-content/poster/2.png',
            link:'',
        },
        {
            id:3,
            image:'./assets/img/porduct-sale-content/poster/3.png',
            link:'',
        },
    ];

    if(getBoxElement){
        let html = poster.map(poster =>{
            return ` <a class="content__poster-link" href="${poster.link}"><img src="${poster.image}" alt=""></a>`
        })
        getBoxElement.innerHTML = html.join('');
    }


}


showPoster();
