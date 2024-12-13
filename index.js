let cardsArray = [
    {
        'name': 'CSS',
        'img': './images.jpg',
    },
    {
        'name': 'HTML',
        'img': './p2.jpg',
    },
    {
        'name': 'jQuery',
       'img': './p3.jpg',
    },
    {
        'name': 'JS',
        'img': './p4.jpg',
    },
    {
        'name': 'Node',
        'img': './p5.jpg',
    },
    {
        'name': 'Python',
        'img': './p6.jpg',
    }
];

//step:1 make card
const parentdiv = document.querySelector('#card-selection');
const gamecard = cardsArray.concat(cardsArray)
//step 3: to rearrange every time card

let sufflecard = Array.from(gamecard).sort(comparefn  = () => 0.5-Math.random());
//step 5: only allow to select two card 
let clickcount  = 0;
let firstcard = "";
let seconcard = "";

const card_match = () => {
    let card_select  = document.querySelectorAll('.card_selected');
    card_select.forEach((curele)=>{
        curele.classList.add('card_match');
    })
} 

const reset_game = () => {
    firstcard="";
    seconcard="";
    clickcount = 0;
    let card_select  = document.querySelectorAll('.card_selected');
    card_select.forEach((curele)=>{
        curele.classList.remove('card_selected');
    })
}
//step 4

parentdiv.addEventListener('click' , (event) => {
    let curcard = event.target;
    if(curcard.id === 'card-selection') return false;
    clickcount++;
    if (curcard.parentNode.classList.contains('card_selected') ) {
        reset_game();
    }
    
    if(clickcount <= 2)
    {
       
        if(clickcount ===1 )
        {
            firstcard =  curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected');
           
           
           
        }
        else
        {
            seconcard =  curcard.parentNode.dataset.name;
            curcard.parentNode.classList.add('card_selected');
           
            
        }
        if(firstcard !== "" && seconcard !== "")
        {
            if(firstcard===seconcard)
            {
                // curcard.classList.add('card_match')
                setTimeout(()=> {
                    card_match();
                    reset_game();
                } , 1000)
                
            }
            else
            {
                reset_game();
            }
        }
       
    }
   
    
    
})

//step 2: show the card
for(let i=0; i<sufflecard.length;i++)
{
    const child = document.createElement('div')
    child.classList.add('card');
    child.dataset.name = sufflecard[i].name;
    // child.style.backgroundImage = `url(${sufflecard[i].img})`;
    const front_div = document.createElement('div');
    front_div.classList.add('front_card');
    const back_div = document.createElement('div');
    back_div.classList.add('back_card');
    back_div.style.backgroundImage = `url(${sufflecard[i].img})`;
    parentdiv.appendChild(child);
    child.appendChild(front_div);
    child.appendChild(back_div);
     
   
}
