import menuItems from './menuItems';

const menu = (() => {

    const drawMenu = () => {

        //some stand-in text
        const mainHeadingText = "menu";
        const entreHeadingText = "entres";
        const appetizerHeadingText = "appetizers";
        const sidesHeadingText = "sides";
        const drinksHeadingText = "drinks";

        //container for main page and heading
        const pageContainer = document.createElement('div');
        const mainHeadingContainer = document.createElement('div');
        const mainHeading = document.createElement('h1');
        //slap heading together and append to pageContainer
        mainHeadingContainer.appendChild(mainHeading);
        pageContainer.appendChild(mainHeadingContainer);

        //section containers and heading containers
        const itemContainerAppetizers = document.createElement('div');
        const subHeadingContainerAppetizers = document.createElement('div');
        const subHeadingAppetizers = document.createElement('h2');
        const menuItemContainerAppetizers = document.createElement('div');

        const itemContainerEntres = document.createElement('div');
        const subHeadingContainerEntres = document.createElement('div');
        const subHeadingEntres = document.createElement('h2');
        const menuItemContainerEntres = document.createElement('div');

        const itemContainerSides = document.createElement('div');
        const subHeadingContainerSides = document.createElement('div');
        const subHeadingSides = document.createElement('h2');
        const menuItemContainerSides = document.createElement('div');

        const itemContainerDrinks = document.createElement('div');
        const subHeadingContainerDrinks = document.createElement('div');
        const subHeadingDrinks = document.createElement('h2');
        const menuItemContainerDrinks = document.createElement('div');

        //slap corresponding headings and containers together
        subHeadingContainerAppetizers.appendChild(subHeadingAppetizers);
        itemContainerAppetizers.appendChild(subHeadingContainerAppetizers);
        itemContainerAppetizers.appendChild(menuItemContainerAppetizers);

        subHeadingContainerEntres.appendChild(subHeadingEntres);
        itemContainerEntres.appendChild(subHeadingContainerEntres);
        itemContainerEntres.appendChild(menuItemContainerEntres);

        subHeadingContainerSides.appendChild(subHeadingSides);
        itemContainerSides.appendChild(subHeadingContainerSides);
        itemContainerSides.appendChild(menuItemContainerSides);

        subHeadingContainerDrinks.appendChild(subHeadingDrinks);
        itemContainerDrinks.appendChild(subHeadingContainerDrinks);
        itemContainerDrinks.appendChild(menuItemContainerDrinks);

        //call menuItems function to generate menu items
        menuItems.generateMenuSection(menuItemContainerAppetizers,'appetizers');
        menuItems.generateMenuSection(menuItemContainerEntres, 'entres');
        menuItems.generateMenuSection(menuItemContainerSides, 'sides');
        menuItems.generateMenuSection(menuItemContainerDrinks, 'drinks');
        
        //append item containers to pageContainer
        pageContainer.appendChild(itemContainerAppetizers);
        pageContainer.appendChild(itemContainerEntres);
        pageContainer.appendChild(itemContainerSides);
        pageContainer.appendChild(itemContainerDrinks);

        //apply overall page styles
        pageContainer.classList.add('page');
        pageContainer.classList.add('page-menu');

        //apply styles to child elements
        mainHeadingContainer.classList.add('main-heading');
        itemContainerAppetizers.classList.add('item');
        itemContainerEntres.classList.add('item');
        itemContainerSides.classList.add('item');
        itemContainerDrinks.classList.add('item');

        subHeadingContainerAppetizers.classList.add('sub-heading');
        subHeadingContainerEntres.classList.add('sub-heading');
        subHeadingContainerSides.classList.add('sub-heading');
        subHeadingContainerDrinks.classList.add('sub-heading');


        menuItemContainerAppetizers.classList.add('menu-items');
        menuItemContainerEntres.classList.add('menu-items');
        menuItemContainerSides.classList.add('menu-items');
        menuItemContainerDrinks.classList.add('menu-items');


        //set inner text
        mainHeading.innerText = mainHeadingText;
        subHeadingAppetizers.innerText = appetizerHeadingText;
        subHeadingEntres.innerText = entreHeadingText;
        subHeadingSides.innerText = sidesHeadingText;
        subHeadingDrinks.innerText = drinksHeadingText;

        return pageContainer;

    }

    return {
        drawMenu
    }

})();

export default menu;