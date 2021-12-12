const contact = (() => {

    const drawContact = () => {
        //vars to hold text
        const mainHeadingText = 'contact us';
        const phoneContentText = '(123) 456-7890';
        const emailContentText = 'herbivore@cafe.org';

        //container for main page and heading
        const pageContainer = document.createElement('div');
        const mainHeadingContainer = document.createElement('div');
        const mainHeading = document.createElement('h1');
        //slap heading together and append to pageContainer
        mainHeadingContainer.appendChild(mainHeading);
        pageContainer.appendChild(mainHeadingContainer);

        //section containers and heading containers
        const itemContainerPhone = document.createElement('div');
        const subHeadingContainerPhone = document.createElement('div');
        const subHeadingPhone = document.createElement('h2');
        const phoneTextContainer = document.createElement('div');
        const phoneText = document.createElement('p');

        const itemContainerEmail = document.createElement('div');
        const subHeadingContainerEmail = document.createElement('div');
        const subHeadingEmail = document.createElement('h2');
        const emailTextContainer = document.createElement('div');
        const emailText = document.createElement('p');

        //slap corresponding headins and containers together
        subHeadingContainerPhone.appendChild(subHeadingPhone);
        phoneTextContainer.appendChild(phoneText);
        itemContainerPhone.appendChild(subHeadingContainerPhone);
        itemContainerPhone.appendChild(phoneTextContainer);

        subHeadingContainerEmail.appendChild(subHeadingEmail);
        emailTextContainer.appendChild(emailText);
        itemContainerEmail.appendChild(subHeadingContainerEmail);
        itemContainerEmail.appendChild(emailTextContainer);

        //append item containers to page container
        pageContainer.appendChild(itemContainerPhone);
        pageContainer.appendChild(itemContainerEmail);

        //apply styles
        mainHeadingContainer.classList.add('main-heading');
        itemContainerPhone.classList.add('item');
        itemContainerEmail.classList.add('item');
        subHeadingContainerPhone.classList.add('sub-heading');
        subHeadingContainerEmail.classList.add('sub-heading');
        phoneTextContainer.classList.add('content-container');
        emailTextContainer.classList.add('content-container');

        //set inner text
        mainHeading.innerText = mainHeadingText;
        subHeadingPhone.innerText = 'phone';
        subHeadingEmail.innerText = 'email';
        phoneText.innerText = phoneContentText;
        emailText.innerText = emailContentText;
        
        pageContainer.classList.add('page');

        return pageContainer;

    }

    return {
        drawContact
    }
})();

export default contact;