const messageStart = ['We are ', 'I am ', 'You are '];
const messageMiddle = ['powerful beyond measure. Light, not darkness, is what frightens us. ', 'built to achieve. ', 'capable of the spectacular. '];
const messageEnd = ['Never give up!!', 'Believe!!', 'Shoot for greatness!!', 'Push on!!'];

 function randomMessage() {
    const randomIndexStart = Math.floor(Math.random() * messageStart.length);
    const randomIndexMiddle = Math.floor(Math.random() * messageMiddle.length);
    const randomIndexEnd = Math.floor(Math.random() * messageEnd.length);

    return messageStart[randomIndexStart] + messageMiddle[randomIndexMiddle] + messageEnd[randomIndexEnd];
 }

 //console.log(randomMessage());

 let showQuoteButton = document.getElementById('show');
 let displayArea = document.getElementById('display');

 showQuoteButton.addEventListener('click', function() {
   displayArea.innerHTML = randomMessage();
 });

