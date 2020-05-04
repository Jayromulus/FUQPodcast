let episodes = document.getElementById('episodeList')



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
    else if (i < 1 && window.screen.width < 749){
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
        
        let cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.innerText = 'Episode Name';
        
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerText = 'information / episode dscription withd whatever goes in here that you decide to fill out';
        
        card.appendChild(cardHeader);
        card.appendChild(cardBody);
        
        col.appendChild(card);
        
        episodes.appendChild(col);
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