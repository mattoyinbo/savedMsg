( () => {

    const form = document.getElementById('message-form');
    form.addEventListener('submit', (event) => {
    event.preventDefault(); //prevent default action

    const msg = document.getElementById('message'); // get msg entered
    const lastmsg = document.querySelector('.message-content');

    // check if message is empty
    if(msg.value === ''){
        const feedback = document.querySelector('.feedback');
        feedback.classList.add('show');
        setTimeout(() =>{feedback.classList.remove('show')},3000);
    }
    else{
    //change value of messge content class
    lastmsg.textContent = msg.value;
    msg.value = '';
    }












    });

})();