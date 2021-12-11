const navBar = (() => {

    let _tabHome;
    let _tabMenu;
    let _tabContact;

    const drawNavBar = () => {
        const navContainer = document.createElement('div');
        navContainer.classList.add('nav-container');

        const tabHome = document.createElement('div');
        tabHome.classList.add('nav-tab');
        tabHome.id = 'tab-home';
        const tabHomeText = document.createElement('p');
        tabHomeText.innerText = 'Home';
        tabHome.appendChild(tabHomeText);

        const tabMenu = document.createElement('div');
        tabMenu.classList.add('nav-tab');
        tabMenu.id = 'tab-menu';
        const tabMenuText = document.createElement('p');
        tabMenuText.innerText = 'Menu';
        tabMenu.appendChild(tabMenuText);

        const tabContact = document.createElement('div');
        tabContact.classList.add('nav-tab');
        tabContact.id = 'tab-contact';
        const tabContactText = document.createElement('p');
        tabContactText.innerText = 'Contact';
        tabContact.appendChild(tabContactText);

        const titleContainer = document.createElement('div');
        const titleText = document.createElement('span')
        titleText.innerText = 'herbivore cafe';
        titleContainer.id = 'restaurant-name';
        titleContainer.appendChild(titleText);

        navContainer.appendChild(tabHome);
        navContainer.appendChild(tabMenu);
        navContainer.appendChild(tabContact);
        navContainer.appendChild(titleContainer);

        _tabHome = tabHome;
        _tabMenu = tabMenu;
        _tabContact = tabContact;

        return navContainer;
    }

    const setTabHomeListener = (someFunc) => {
        _tabHome.addEventListener('click', someFunc);
    }

    const setTabMenuListener = (someFunc) => {
        _tabMenu.addEventListener('click', someFunc);
    }

    return {
        drawNavBar,
        setTabHomeListener,
        setTabMenuListener
    }
})();

export default navBar;