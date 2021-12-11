import MenuItem from "./MenuItem";
import json from './menu-items.json5';

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

    const generateAppetizers = (container) => {

        const appetizers = json.appetizers;

        appetizers.forEach(appetizer => {
            const price = _setPricePrecision(appetizer.price);
            const newMenuItemObj = MenuItem(
                appetizer.name,
                appetizer.description,
                `$${price}`
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
        generateAppetizers
    }

})();

export default menuItems;