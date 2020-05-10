let episodes = document.getElementById('episodeList')

let toggleHiding = () => {
    let hiddenEpisodes = document.getElementsByClassName('toHide')
    // if(hiddenEpisodes[0].classList.contains('hidden')) {
    //     console.log('found hidden cards')
    // }
    for(let i = 0; i < hiddenEpisodes.length; i++){
        hiddenEpisodes[i].classList.toggle('hidden')
    }
    // hiddenEpisodes.forEach(element => {
    //     element.classList.toggle('hidden')
    // });
}
// if
for (let i = 0; i < 40; i++) {

    if(i < 3 && window.screen.width > 748){
        let col = document.createElement('div')
        col.classList.add('col-sm-12', 'col-md-4')

        let colSpacing = document.createElement('div')
        colSpacing.classList.add('card')
        
        let spaceBody = document.createElement('div')
        spaceBody.classList.add('card-body')

        colSpacing.appendChild(spaceBody)

        colSpacing.style.background = 'transparent'
        colSpacing.style.border = 'none'
        colSpacing.style.padding = '2.5%'

        col.appendChild(colSpacing)

        episodes.appendChild(col)
    }
    else if (i < 1 && window.screen.width < 769){
        let col = document.createElement('div')
        col.classList.add('col-sm-12', 'col-md-4')

        let colSpacing = document.createElement('div')
        colSpacing.classList.add('card')
        
        // let spaceBody = document.createElement('div')
        // spaceBody.classList.add('card-body')

        // colSpacing.appendChild(spaceBody)

        colSpacing.style.background = 'transparent'
        colSpacing.style.border = 'none'
        // colSpacing.style.padding = '2.5%'

        col.appendChild(colSpacing)

        episodes.appendChild(col)   
    }
    else {
        let col =  document.createElement('div');
        col.classList.add('col-sm-12', 'col-md-4');
        
        let card = document.createElement('div');
        card.classList.add('card');
        if(i > 4) {
           card.classList.add('hidden', 'toHide')
        }

        let cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.innerText = 'Episode Name';
        
        
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerText = 'information / episode dscription withd whatever goes in here that you decide to fill out';
        
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        
        col.appendChild(card);
        
        // let viewMoreCol =  document.createElement('div');
        // viewMoreCol.classList.add('col-sm-12', 'col-md-4');

        // let seeMore = document.createElement('div')
        // seeMore.onclick = () => toggleHiding();
        // seeMore.classList.add('toHide', 'card')
        // seeMore.innerText = "see more"

        // let seeLessCo =  document.createElement('div');
        // viewMoreCol.classList.add('col-sm-12', 'col-md-4');


        // let seeLess = document.createElement('a')
        // seeLess.onclick = () => toggleHiding();
        // seeLess.classList.add('hidden', 'toHide')

        episodes.appendChild(col);

        let seeMore = document.createElement('div')
        seeMore.classList.add('col-sm-12', 'col-sm-6')
        let moreCard = document.createElement('div')
        moreCard.classList.add('card', 'toHide')
        let moreBody = document.createElement('div')
        moreBody.classList.add('card-body')
        let seeLink = document.createElement('a')
        seeLink.innerText = 'see more'
        seeLink.addEventListener('click', () => toggleHiding())

        moreBody.appendChild(seeLink)
        moreCard.appendChild(moreBody)
        seeMore.appendChild(moreCard)

        if(i === 4) {
            console.log('added seemore')
            episodes.appendChild(seeMore)
        }

        let seeLess = document.createElement('div')
        seeLess.classList.add('col-sm-12', 'col-sm-6')
        let lessCard = document.createElement('div')
        lessCard.classList.add('card', 'toHide', 'hidden')
        let lessBody = document.createElement('div')
        lessBody.classList.add('card-body')
        let eesLink = document.createElement('a')
        eesLink.innerText = 'see less'
        eesLink.addEventListener('click', () => toggleHiding())

        lessBody.appendChild(eesLink)
        lessCard.appendChild(lessBody)
        seeLess.appendChild(lessCard)
        
        if(i === 39) {
            console.log('added seeless')
            episodes.appendChild(seeLess)
        }
    }
}



    
    {/* <div class="col-sm-12 col-md-3">
    <div class="card">
    <div class="card-header">
    test
    </div>
    <div class="card-body">
    testing
    </div>
    </div>
</div> */}