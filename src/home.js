const home = (() => {

    const drawHome = () => {

        //some stand-in text
        const mainHeadingText = "Home"
        const aboutHeadingText = "About";
        const hoursHeadingText = "Hours";
        const locationHeadingText = "Location";
        
        const aboutContentText = "This is the about text."
        const hoursContentText = "These are our hours."
        const locationContentText = "This is our location."

        //container for main page and heading
        const pageContainer = document.createElement('div');
        const mainHeadingContainer = document.createElement('div');
        const mainHeading = document.createElement('h1');
        //slap heading together and append to pageContainer
        mainHeadingContainer.appendChild(mainHeading);
        pageContainer.appendChild(mainHeadingContainer);

        //section containers and heading containers for home page sections
        const itemContainerAbout = document.createElement('div');
        const subHeadingContainerAbout = document.createElement('div');
        const subHeadingAbout = document.createElement('h2');
        const contentContainerAbout = document.createElement('div');
        const contentAbout = document.createElement('p');
        const itemContainerHours = document.createElement('div');
        const subHeadingContainerHours = document.createElement('div');
        const subHeadingHours = document.createElement('h2');
        const contentContainerHours = document.createElement('div');
        const contentHours = document.createElement('p');
        const itemContainerLocation = document.createElement('div');
        const subHeadingContainerLocation = document.createElement('div');
        const subHeadingLocation = document.createElement('h2');
        const contentContainerLocation = document.createElement('div');
        const contentLocation = document.createElement('p');
        //slap corresponding heading, content, and item containers together
        subHeadingContainerAbout.appendChild(subHeadingAbout);
        contentContainerAbout.appendChild(contentAbout);
        itemContainerAbout.appendChild(subHeadingContainerAbout);
        itemContainerAbout.appendChild(contentContainerAbout);
        subHeadingContainerHours.appendChild(subHeadingHours);
        contentContainerHours.appendChild(contentHours);
        itemContainerHours.appendChild(subHeadingContainerHours);
        itemContainerHours.appendChild(contentContainerHours);
        subHeadingContainerLocation.appendChild(subHeadingLocation);
        contentContainerLocation.appendChild(contentLocation);
        itemContainerLocation.appendChild(subHeadingContainerLocation);
        itemContainerLocation.appendChild(contentContainerLocation);
        //append item containers to pageContainer
        pageContainer.appendChild(itemContainerAbout);
        pageContainer.appendChild(itemContainerHours);
        pageContainer.appendChild(itemContainerLocation);

        //apply overall page styles
        pageContainer.classList.add('page');
        pageContainer.classList.add('page-home');

        //apply item container styles
        itemContainerAbout.classList.add('item');
        itemContainerHours.classList.add('item');
        itemContainerLocation.classList.add('item');

        //apply heading styles
        mainHeadingContainer.classList.add('main-heading');
        subHeadingContainerAbout.classList.add('sub-heading');
        subHeadingContainerHours.classList.add('sub-heading');
        subHeadingContainerLocation.classList.add('sub-heading');

        //set text
        mainHeading.innerText = mainHeadingText;
        subHeadingAbout.innerText = aboutHeadingText;
        subHeadingHours.innerText = hoursHeadingText;
        subHeadingLocation.innerText = locationHeadingText;
        contentAbout.innerText = aboutContentText;
        contentHours.innerText = hoursContentText;
        contentLocation.innerText = locationContentText;

        return pageContainer;

    }

    return {
        drawHome
    }

})();

export default home;