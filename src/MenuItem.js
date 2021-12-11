const MenuItem = (dishName, dishDescrip, price) => {

    const createMenuItem = () => {
        const menuItemContainer = document.createElement('div');
        const dishNameContainer = document.createElement('div');
        const dishDescripContainer = document.createElement('div');
        const priceContainer = document.createElement('div');
        const dishNameText = document.createElement('h3');
        const dishDescripText = document.createElement('p');
        const priceText = document.createElement('p');

        dishNameText.innerText = dishName;
        dishDescripText.innerText = dishDescrip;
        priceText.innerText = price;

        priceContainer.appendChild(priceText);
        dishDescripContainer.appendChild(dishDescripText);
        dishNameContainer.appendChild(dishNameText);

        menuItemContainer.appendChild(dishNameContainer);
        menuItemContainer.appendChild(dishDescripContainer);
        menuItemContainer.appendChild(priceContainer);

        return menuItemContainer;
    }

    return {
        createMenuItem
    }
}

export default MenuItem;