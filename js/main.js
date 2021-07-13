// const homeScroll = () => {document.querySelector('.header').scrollIntoView(true);console.log('scrolled home')}

const mainContainer = document.querySelector('.mainContainer');
const sideContainer = document.querySelector('.sideContainer');

// youtube video id , just add the new ones at the bottom of the list for now
const vidList = [
  'plNIhaShxzo',
  'dADOl5En4T4'
];

{/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/plNIhaShxzo" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

vidList.forEach((vid, index) => {
  // console.log(index);
  if(index === vidList.length - 1) {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube.com/embed/${vid}`;
    frame.height = '100%';
    frame.width = '100%';
    frame.title = `FUQ Episode ${index}`;
    // frame.frameBorder = 0;
    frame.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    frame.allowFullscreen = true;

    const contain = document.createElement('div');
    contain.classList.add('card', 'mainCard');

    // console.log(document.body.clientHeight)
    // console.log(contain.offsetHeight)
    // contain.height = document.body.clientHeight - contain.offsetTop - 80
    

    contain.appendChild(frame);
    mainContainer.appendChild(contain);
  } else {
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube.com/embed/${vid}`;
    frame.height = '100%';
    frame.width = '100%';
    frame.title = `FUQ Episode ${index}`;
    // frame.frameBorder = 0;
    frame.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    frame.allowFullscreen = true;

    const contain = document.createElement('div');
    contain.classList.add('card', 'sideCard');

    // console.log(document.body.clientHeight)
    // console.log(contain.offsetHeight)
    // contain.height = document.body.clientHeight - contain.offsetTop - 80
    

    contain.appendChild(frame);
    sideContainer.appendChild(contain);
  }
})