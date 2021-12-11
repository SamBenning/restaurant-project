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

    const generateMenuSection = (container, sectionName) => {

        const section = json[sectionName];

        section.forEach(item => {
            const price = _setPricePrecision(item.price);
            const newMenuItemObj = MenuItem(
                item.name,
                item.description,
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
        generateMenuSection
    }

})();

export default menuItems;