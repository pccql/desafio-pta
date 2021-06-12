const clickBlueButton = () => {
    document.querySelector('header').classList.add("blue-header")
    document.querySelector('footer').classList.add("blue-footer")
}

const blueButton = document.querySelector('.blue-button');
blueButton.addEventListener('click', clickBlueButton);


const clickOrangeButton = () => {
    document.querySelector('header').classList.add("orange-header")
    document.querySelector('footer').classList.add("orange-footer")
}

const orangeButton = document.querySelector('.orange-button');
orangeButton.addEventListener('click', clickOrangeButton);



const clickPinkButton = () => {
    document.querySelector('header').classList.remove("orange-header", "blue-header")
    document.querySelector('footer').classList.remove("orange-footer" ,"blue-footer")
}

const pinkButton = document.querySelector('.pink-button');

pinkButton.addEventListener('click', clickPinkButton);