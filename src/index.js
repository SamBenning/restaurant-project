import navBar from './navBar';
import home from './home';
import menu from './menu';
import contact from './contact';
import backgroundImage from './images/dose-juice-sTPy-oeA3h0-unsplash.jpg';
import './style.css';

const content = document.createElement('div');
content.id = 'content';
const backgroundImg = document.createElement('img');
const backgroundImgWrapper = document.createElement('div');
backgroundImg.src = backgroundImage;
backgroundImg.classList.add('background-image');
backgroundImgWrapper.classList.add('background-image-wrapper');
backgroundImgWrapper.appendChild(backgroundImg);
document.body.appendChild(backgroundImgWrapper);


let myBar = navBar.drawNavBar();
//let myBar = navBar.createNavCointainer('navContainer', 'navTab', 3);
//navBar.setTabText('tab-1', 'Home')
//let myHome = home.drawHome();
//let myMenu = menu.drawMenu();



const showHome = () => {
    if (content.firstChild){
        content.removeChild(content.firstChild);
    }
    let homePage = home.drawHome();
    content.appendChild(homePage);
}

const showMenu = () => {
    if (content.firstChild){
        content.removeChild(content.firstChild);
    }
    let menuPage = menu.drawMenu();
    content.appendChild(menuPage);
}

const showContact = () => {
    if (content.firstChild){
        content.removeChild(content.firstChild);
    }
    let contactPage = contact.drawContact();
    content.appendChild(contactPage);
}

navBar.setTabHomeListener(showHome);
navBar.setTabMenuListener(showMenu);
navBar.setTabContactListener(showContact);

document.body.appendChild(myBar);
document.body.appendChild(content);


