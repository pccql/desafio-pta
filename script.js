const header = document.querySelector('header')
const footer = document.querySelector('footer')

const clickBlueButton = () => {
    header.classList.add("blue-header")
    header.classList.remove("orange-header")
    footer.classList.add("blue-footer")
    footer.classList.remove("orange-footer")
}

const blueButton = document.querySelector('.blue-button');
blueButton.addEventListener('click', clickBlueButton);


const clickOrangeButton = () => {
    header.classList.add("orange-header")
    footer.classList.add("orange-footer")
    header.classList.remove("blue-header")
    footer.classList.remove("blue-footer")
}

const orangeButton = document.querySelector('.orange-button');
orangeButton.addEventListener('click', clickOrangeButton);



const clickPinkButton = () => {
    header.classList.remove("orange-header", "blue-header")
    footer.classList.remove("orange-footer" ,"blue-footer")
}

const pinkButton = document.querySelector('.pink-button');

pinkButton.addEventListener('click', clickPinkButton);



// search animation
let width = 40;

const clickSearchBar = () => {
    if (width === 40){
        let id = null;
        clearInterval(id);
        id = setInterval(frame, 6);
        function frame() {
            if (width === 200) {
            clearInterval(id);
            } else {
            width++;
            searchBar.style.width = width + 'px';
            }
        }
        searchBar.classList.add('expanded-search')
        document.querySelector('input').classList.add('show-input')
        document.querySelector('.lupa').classList.add('lupa-expanded')
    }
}

const searchBar = document.querySelector('.search');

searchBar.addEventListener('click', clickSearchBar);