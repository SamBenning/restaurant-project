const MenuItem = (dishName, dishDescrip, price, imgPath='') => {

    const createMenuItem = () => {
        //create the html elements
        const menuItemContainer = document.createElement('div');
        const dishNameContainer = document.createElement('div');
        const dishDescripContainer = document.createElement('div');
        const priceContainer = document.createElement('div');
        const dishNameText = document.createElement('h3');
        const dishDescripText = document.createElement('p');
        const priceText = document.createElement('p');
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');

        //apply classes
        menuItemContainer.classList.add('menu-item-container');
        dishNameContainer.classList.add('dish-name-container');
        dishDescripContainer.classList.add('dish-descrip-container');
        priceContainer.classList.add('price-container');

        //set inner text
        dishNameText.innerText = dishName;
        dishDescripText.innerText = dishDescrip;
        priceText.innerText = price;
        img.src = imgPath;

        //throw stuff into appropriate containers
        priceContainer.appendChild(priceText);
        dishDescripContainer.appendChild(dishDescripText);
        dishNameContainer.appendChild(dishNameText);
        imgContainer.appendChild(img);

        menuItemContainer.appendChild(dishNameContainer);
        menuItemContainer.appendChild(dishDescripContainer);
        menuItemContainer.appendChild(priceContainer);
        menuItemContainer.appendChild(imgContainer);

        return menuItemContainer;
    }

    return {
        createMenuItem
    }
}

export default MenuItem;