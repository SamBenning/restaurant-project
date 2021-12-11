import navBar from './navBar';
import home from './home';
import menu from './menu';
import './style.css';

const content = document.createElement('div');
content.id = 'content';


let myBar = navBar.createNavCointainer('navContainer', 'navTab', 3);
//let myHome = home.drawHome();
let myMenu = menu.drawMenu();

document.body.appendChild(myBar);
document.body.appendChild(content);
content.appendChild(myMenu);
