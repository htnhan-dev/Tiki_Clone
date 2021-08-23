function contentShowPosterDiscount(){
    const getElementBox = document.querySelector('.content__poster-discount');
    let posterImages = [
        {
            id:1,
            link:'',
            image:'./assets/img/content-poster-discount/1.png'
        },{
            id:2,
            link:'',
            image:'./assets/img/content-poster-discount/2.png'
        },{
            id:3,
            link:'',
            image:'./assets/img/content-poster-discount/3.png'
        },
      
    ]
    if(getElementBox){
        let htmlPosterImage = posterImages.map( poster => {
            return `
            <a href="${poster.link}"><img src="${poster.image}" alt=""></a>
            `
        })
        getElementBox.innerHTML = htmlPosterImage.join('');
    }
}

contentShowPosterDiscount();