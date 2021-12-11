import MenuItem from "./MenuItem";
import json from './menu-items.json5';
import loadedFries from './images/loaded-fries.png';
import jalapenoPoppers from './images/jalapeno-poppers.png';
import avacadoToast from './images/avacado-toast.png';
import shrimplessCakes from './images/shrimpless-cakes.png';
import veggieBurger from './images/veggie-burger.png';
import pulledJackfruit from './images/pulled-jackfruit.png';
import rosemaryFries from './images/rosemary-fries.jpg';
import chipsDip from './images/chips-dip.jpg';
import hummus from './images/hummus.jpg';
import strawberrySmoothie from './images/strawberry-smoothie.jpg';
import chocoLatte from './images/choco-latte.jpg';
import herbalTea from './images/herbal-tea.jpg';

const menuItems = (() => {

    const _setPricePrecision = (price) => {
        const priceFloat = Number.parseFloat(price);
        if (priceFloat < 0) {
            return 0;
        } else if (priceFloat < 10) {
            return priceFloat.toPrecision(3);
        } else if (priceFloat < 100) {
            return priceFloat.toPrecision(4);
        } else {
            return priceFloat.toPrecision(5);
        }
    }

    const generateMenuSection = (container, sectionName) => {

        //object that holds image paths so that webpack can pick them up, and
        //they can be mapped to appropriate json object
        const Images = {
            loadedFries: loadedFries,
            jalapenoPoppers: jalapenoPoppers,
            avacadoToast: avacadoToast,
            shrimplessCakes: shrimplessCakes,
            veggieBurger: veggieBurger,
            pulledJackfruit: pulledJackfruit,
            rosemaryFries: rosemaryFries,
            chipsDip: chipsDip,
            hummus: hummus,
            strawberrySmoothie: strawberrySmoothie,
            chocoLatte: chocoLatte,
            herbalTea: herbalTea
        }

        const section = json[sectionName];
        

        section.forEach(item => {
            const price = _setPricePrecision(item.price);
            const newMenuItemObj = MenuItem(
                item.name,
                item.description,
                `$${price}`,
                Images[item.img]
            );
            
            const newMenuItemElement = newMenuItemObj.createMenuItem();

            container.appendChild(newMenuItemElement);
        });


        // const price = _setPricePrecision(json.appetizers[0].price);




        // const fries = MenuItem(
        //     json.appetizers[0].name, 
        //     json.appetizers[0].description, 
        //     `$${price}`)

        // const friesMenuItem = fries.createMenuItem();

        // container.appendChild(friesMenuItem);
    }

    return {
        generateMenuSection
    }

})();

export default menuItems;