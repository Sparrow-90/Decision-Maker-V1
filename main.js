const showAdvaice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions'); 
const add = document.querySelector('.add');
const clean = document.querySelector('.clean');
const h1 = document.querySelector('h1');
let responds = []
const input = document.querySelector('input')
const options = document.querySelector('.options');
const audio = document.getElementById('robot')


const addRespond = (e)=>{
e.preventDefault();
// nie odświeża strony
console.log(input.value);
responds.push(input.value);
console.log(responds);
    const li = document.createElement('li');
    li.textContent = input.value;
    options.appendChild(li)


// alert(`dodano poprawnie ${input.value}`)
input.value = "";
}


add.addEventListener('click', addRespond)
clean.addEventListener('click', ()=>{
    let responds = ['']
})



const bars = () =>{
    const tl = new TimelineMax({ onComplete: bars });
    const scale = ()=>{
        return Math.random() * 2;
    }
    const color = ()=>{
        const colors = ['#f3edbb', '#e64661', '#f7b942']
        return colors[Math.floor(Math.random()*3)]
    }
    const voiceBars = document.querySelectorAll('#elements >*')
    tl.set(voiceBars, {transformOrigin: '50% 50%', repeat: 1})
    tl.staggerTo(voiceBars, .5, {scaleY: scale, yoyo: true, fill: color, ease: Elastic.easeIn}, .05)
    return tl;
}
const blink = () =>{
    const tl = new TimelineMax({repeat: -1, repeatDelay: 5, delay: 3});
    const eyes = document.querySelectorAll('#eye-left, #eye-right');
    tl
      .set(eyes, {transformOrigin: '50% 50%'})
      .to(eyes, .1,{scaleY: 0, fill:'#55bf9b'})
      .to(eyes, .05,{scaleY: 1, fill:'#f3edbb'})
      .to(eyes, .1,{scaleY: 0, fill:'#55bf9b'}, "+=.5")
      .to(eyes, .1,{scaleY: 1, fill:'#f3edbb'})
    return tl;
}
const move = () =>{
    const tl = new TimelineMax({onComplete: move});
    const legs = document.querySelectorAll('#leg-right, #leg-left')
    tl.staggerTo(legs, .2, {y: -20, yoyo: true, repeat: 1}, .1 )
    return tl;
}




const master = new TimelineMax();
master.add(blink(), "start")

showAdvaice.addEventListener('click', ()=>{
    audio.play()
    master.add(bars(),"start")
    master.add(move(-1),"start")
    setTimeout(show, 2000)
    console.log('klik')
})

const show = ()=>{
   console.log(responds.length)
   const indexText = Math.floor(Math.random() * responds.length);
   console.log(responds.length)
   h1.style.transition = 'opacity 0.2s ease-in-out';
   h1.style.opacity = 0;
   setTimeout(() => {
    h1.textContent = responds[indexText]
    h1.style.opacity = 1;
    document.body.style.cursor = 'default';
    master.remove(bars());
    master.remove(move());
        setTimeout(() => {
      clean.click(); // Wywołanie akcji przycisku clean
    }, 5000)
  }, 2000);
   
}