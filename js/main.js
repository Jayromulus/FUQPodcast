let episodes = document.getElementById('episodeList')

for (let i = 0; i < 40; i++) {
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