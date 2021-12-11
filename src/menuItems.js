import MenuItem from "./MenuItem";

const menuItems = (() => {

    const generateAppetizers = (container) => {
        const fries = MenuItem('french fries', 'Made from genuine Idaho potatoes',
        '$5.50');

        const friesMenuItem = fries.createMenuItem();

        container.appendChild(friesMenuItem);
    }

    return {
        generateAppetizers
    }

})();

export default menuItems;