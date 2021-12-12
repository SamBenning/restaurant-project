import navBar from './navBar';
import home from './home';
import menu from './menu';
import backgroundImage from './images/dose-juice-sTPy-oeA3h0-unsplash.jpg';
import './style.css';

const content = document.createElement('div');
content.id = 'content';
const backgroundImg = document.createElement('img');
backgroundImg.src = backgroundImage;
backgroundImg.style.position = 'fixed';
backgroundImg.style.width = 'auto'
backgroundImg.style.height = '100%'
backgroundImg.style.left = '0';
backgroundImg.style.zIndex = '-1'
backgroundImg.style.marginLeft = '0'
document.body.appendChild(backgroundImg);


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

navBar.setTabHomeListener(showHome);
navBar.setTabMenuListener(showMenu);

document.body.appendChild(myBar);
document.body.appendChild(content);


