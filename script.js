const header = document.querySelector('header')
const footer = document.querySelector('footer')

const clickBlueButton = () => {
    header.classList.add("blue-header")
    header.classList.remove("orange-header")
    footer.classList.add("blue-footer")
    footer.classList.remove("orange-footer")

    blueButton.src = './images/blue_focus.svg'
    orangeButton.src = './images/colour_orange_button.svg'
    pinkButton.src = './images/colour_pink_button.svg'
}

const blueButton = document.querySelector('.blue-button');
blueButton.addEventListener('click', clickBlueButton);


const clickOrangeButton = () => {
    header.classList.add("orange-header")
    footer.classList.add("orange-footer")
    header.classList.remove("blue-header")
    footer.classList.remove("blue-footer")

    orangeButton.src = './images/orange_focus.svg'
    blueButton.src = './images/colour_blue_botton.svg'
    pinkButton.src = './images/colour_pink_button.svg'
}

const orangeButton = document.querySelector('.orange-button');
orangeButton.addEventListener('click', clickOrangeButton);



const clickPinkButton = () => {
    header.classList.remove("orange-header", "blue-header")
    footer.classList.remove("orange-footer" ,"blue-footer")

    pinkButton.src = './images/pink_focus.svg'
    orangeButton.src = './images/colour_orange_button.svg'
    blueButton.src = './images/colour_blue_botton.svg'
}

const pinkButton = document.querySelector('.pink-button');

pinkButton.addEventListener('click', clickPinkButton);



// search animation
let width = 40;

const clickSearchBar = () => {
    if (width === 40 && window.innerWidth <= 1024){
        let id = null;
        clearInterval(id);
        width = 4;
        id = setInterval(frame, 5);
        function frame() {
            if (width === 43) {
            clearInterval(id);
            } else {
            width++;
            searchBar.style.width = width + 'vw';
            }
        }
        searchBar.classList.add('expanded-search')
        input.classList.add('show-input')
        input.removeAttribute('placeholder')
        document.querySelector('.lupa').classList.add('lupa-expanded')
    }
}
const input = document.querySelector('input')
const searchBar = document.querySelector('.search');

searchBar.addEventListener('click', clickSearchBar);


// search filter
const picoles = ['tablito','chica-bon', 'morango','brigadeiro','minions','azul']
function search (){
    let iceCream = document.getElementById('search').value.toLowerCase()
    
    picoles.forEach((existing_iceCream) => {
        if ( !existing_iceCream.includes(iceCream) && !iceCream.includes(existing_iceCream)) {
            
            if (existing_iceCream === 'tablito'){
                document.querySelector('.tablito').classList.add('invisible') 
                document.querySelector('.tablito').classList.remove('show') 
            }

            else if (existing_iceCream === 'minions'){
                document.querySelector('.minions').classList.add('invisible') 
                document.querySelector('.minions').classList.remove('show') 
            }

            else if (existing_iceCream === 'morango'){
                document.querySelector('.morango').classList.add('invisible') 
                document.querySelector('.morango').classList.remove('show') 
            }

            else if (existing_iceCream === 'brigadeiro'){
                document.querySelector('.brigadeiro').classList.add('invisible') 
                document.querySelector('.brigadeiro').classList.remove('show') 
            }

            else if (existing_iceCream === 'azul'){
                document.querySelector('.azul').classList.add('invisible') 
                document.querySelector('.azul').classList.remove('show') 
            }

            // chica bon
            else if  ( !iceCream.includes('chica')) {
                document.querySelector('.chica-bon').classList.add('invisible')
                document.querySelector('.chica-bon').classList.remove('show') 
            }
        }

        else{
            document.querySelector('.'+existing_iceCream).classList.add('show') 
            document.querySelector('.'+existing_iceCream).classList.remove('invisible') 
        }
    })
}