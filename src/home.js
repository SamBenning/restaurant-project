const home = (() => {

    const drawHome = () => {

        //some stand-in text
        const mainHeadingText = "home"
        const aboutHeadingText = "about";
        const hoursHeadingText = "hours";
        const locationHeadingText = "location";
        
        const aboutContentText = "Herbivore Cafe is the best place in town for plant-based cuisine! \
        We use only high-quality, fresh ingredients, and everything is made from scratch."
        const hoursContentText = "Tuesday-Friday: 12:00pm - 10:00pm \t \
                                    Saturday-Sunday: 10:00am - 10:00pm \t \
                                    Closed Mondays"
        const locationContentText = "123 Main St, Allentown PA, 12345"

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