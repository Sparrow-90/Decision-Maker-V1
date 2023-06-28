const showAdvaice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions'); 
const add = document.querySelector('.add');
const clean = document.querySelector('.clean');
const h1 = document.querySelector('h1');
const responds = []
const input = document.querySelector('input')
const options = document.querySelector('.options');
const audio = document.getElementById('audio')


const addRespond = (e)=>{
e.preventDefault();
// nie odświeża strony
console.log(input.value);
responds.push(input.value);
console.log(responds);

// alert(`dodano poprawnie ${input.value}`)
input.value = "";

}


add.addEventListener('click', addRespond)
clean.addEventListener('click', ()=>{
    const responds = ['']
})

const show = ()=>{
   console.log(responds.length)
   const indexText = Math.floor(Math.random() * responds.length);
   console.log(responds.length)
   h1.style.transition = 'opacity 0.5s ease-in-out';
   h1.style.opacity = 0;
   setTimeout(() => {
    h1.textContent = responds[indexText]
    h1.style.opacity = 1;
    audio.play()
    document.body.style.cursor = 'default';
  }, 1000);
   
}

showOptions.addEventListener('click', function(){
    responds.forEach((respond)=>{
        const li = document.createElement('li');
        li.textContent = respond;
        options.appendChild(li)
    })
})
showAdvaice.addEventListener('click', ()=>{
    document.body.style.cursor = 'wait';
    setTimeout(show, 2000)
})