export default {
    projects: [
        {
            id: '12',
            imageSrc: 'images/urbanPrairieWheat.svg',
            imageAlt: '',
            background: '#0072bb',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/urbanPrairieMobile.png',
            desktopScreenshot: 'images/urbanPrairieDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Urban Prairie Homes',
            path: '/urban-prairie-homes',
            motivation: 'The client, a semi-custom home builder in Fargo, ND, wanted to refresh their current website. The design needed to be responsive and allow for many pictures of the company\'s various floor plans so React was a natural choice to help improve performance. The company also has a modern aesthetic and wanted this to be reflected in the design of the new site.',
            description: 'This is a website created in React for  ',
            technicalInfo: '',
            technologies: 'HTML, CSS, JavaScript, React, Amazon S3',
            npmPackages: '',
            futureDev: '',
            role: 'Part of a two person development team. Responsible for design, creation of custom graphics, front end code and integrating with back end. Also responsible for all client interactions and communicating client requirements and desires to back end developer.',
            githubLink: '',
            projectLink: 'https://www.urbanprairiehomes.com/'
        },
        {
            id: '19',
            imageSrc: 'images/bri-spy.svg',
            imageAlt: 'bri-spy icon',
            background: '#FC354C',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: '',
            mobileScreenshot: 'images/chapterTooMobile.png',
            desktopScreenshot: '',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'bri-SPY',
            path: '/bri-spy',
            motivation: '',
            description: '',
            technicalInfo: '',
            technologies: 'HTML, CSS, JavaScript, React Native, Node.js, Express, Heroku',
            npmPackages: 'express, express-handlebars',
            futureDev: '',
            role: 'Technical lead of a three person development team. Responsible for design, code and creation of custom graphics.',
            githubLink: [
                'https://github.com/lexi-winstanley/bri-SPY',
                'https://github.com/lexi-winstanley/bri-SPYBackend'
            ],
            projectLink: ''
        },
        {
            id: '23',
            imageSrc: 'images/somethingBorrowed.svg',
            imageAlt: '',
            background: '#45bce5',
            textColor: '#0F0F0D',
            mobileBackgroundSrc: 'images/phoneBackDark.svg',
            desktopBackgroundSrc: 'images/desktopDark.svg',
            mobileScreenshot: 'images/somethingBorrowedMobile.png',
            desktopScreenshot: 'images/somethingBorrowedDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Something Borrowed',
            path: '/something-borrowed',
            motivation: 'The motivation behind this project was to reduce waste and help save money by borrowing items you may need only once or twice from friends.',
            description: 'Something Borrowed is a web application that facilitates friend-to-friend lending to help users save money and reduce wasteful purchasing of items to be used only once or twice. Once users create an account they can create or request to join existing groups and add items they are willing to lend out to the members of those groups. They can view the items that the other group members have added and make requests to borrow them. The requester and item owner can then message back and forth until a location and time for pickup are agreed upon and then the owner can confirm the request. If a mutually agreeable location and time cannot be found the owner can deny the request or the requester can delete it.',
            technicalInfo: 'This application is organized using the Model-View-Controller (MVC) design pattern. Sequelize is used to handle MySQL connection and queries. Once database data is gathered or altered, the view updates from the Handlebars template using a page reload.',
            technologies: 'HTML, Handlebars, CSS, JavaScript, jQuery, MySQL, Node.js, Express, Heroku',
            npmPackages: 'express, express-handlebars, mysql2, sequelize, google-auth-library, nodemailer, nodemon, dotenv, cookie-parser',
            futureDev: 'Some ideas for future development include integration with Google Maps and Calendar so that users can suggest locations and have calendar invites sent out automatically once exchange details have been agreed upon. Another idea would be to integrate with PayPal or another money handling service and allow users to set a deposit for borrowing expensive items.',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/something-borrowed',
            projectLink: 'https://something---borrowed.herokuapp.com/'
        },
        {
            id: '9',
            imageSrc: 'images/packIt.svg',
            imageAlt: '',
            background: '#680a4d',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/packItMobile.png',
            desktopScreenshot: 'images/packItDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Pack It!',
            path: '/pack-it',
            motivation: 'Our motivation to develop this application was that we wanted to create something that would simplify an aspect of travel. In our experience, the most stressful part of a trip is generally the days leading up to it when you’re pressed for time and trying to remember and complete all the last minute to-dos at work or home, including packing your suitcases. We’ve all made lists of items to pack for trips before and this seemed like an area that could be streamlined as we often end up packing the same items trip after trip. We wanted to be able to dynamically generate a suggested list that the user could then further customize and save for later.',
            description: 'When a user navigates to Pack It! they are presented with a landing page where they input a destination and trip duration. These inputs are captured and the location is used to call the Open Weather Map API which returns forecast results for the next 120 hours (about five days) in three hour increments and the latitude and longitude of the forecast location. We then use that latitude and longitude to call the Webcams.Travel API which returns webcams within a 250 km (approximately 155 mile) radius which can help inform the user\'s packing plans. We display up to six webcam stills on our results page which users can click to navigate to the live stream. Using jQuery we loop through the forecast results from Open Weather Map and get the highest maximum temperature and lowest minimum temperature to display for each day. The weather description used is the first that occurs. The average high temperature over the entire forecast period is used to determine whether a warm weather or cold weather packing list should be suggested. The list display is then generated from an array. Once the user gets their results they can customize their list as desired and choose to create an account in order to save their list to our Firebase database. We use Firebase user authentication to create an email/password login and then a new node is created in our root directory using the user ID. The next time the user visits Pack It! they can log in and retrieve their saved list.',
            technicalInfo: 'This application is written with jQuery. User inputs are captured and used in API calls. The results of these calls are looped through and acted on as needed to generate the appropriate sections of HTML and add them to the page. Arrays are used to hold the packing list items and edited as the user adds or deletes items. If the user chooses to make an account and save their list the array is saved to the Firebase database for retrieval later.',
            technologies: 'HTML, CSS, Materialize, JavaScript, jQuery',
            npmPackages: '',
            futureDev: '',
            role: 'Part of a three person developer team. Contributed to design, responsible for altering as needed to make responsive. Authored code to capture user inputs, call Open Weather Map API, parse latitude and longitude to be used in call to Webcams.Travel API, average temperature data and serve appropriate packing list. Created custom weather graphics and favicon.',
            githubLink: 'https://github.com/lexi-winstanley/packIt',
            projectLink: 'https://lexi-winstanley.github.io/packIt/'
        },
        {
            id: '16',
            imageSrc: 'images/threeScoreDev.svg',
            imageAlt: '',
            background: '#cbc5ef',
            textColor: '#0F0F0D',
            mobileBackgroundSrc: 'images/phoneBackDark.svg',
            desktopBackgroundSrc: 'images/desktopDark.svg',
            mobileScreenshot: 'images/threeScoreDevMobile.png',
            desktopScreenshot: 'images/threeScoreDevDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Three Score Development',
            path: '/three-score-development',
            motivation: '',
            description: '',
            technicalInfo: '',
            technologies: 'HTML, CSS, JavaScript',
            npmPackages: '',
            futureDev: '',
            role: 'Part of a two member development team. Responsible for design, code and creation of custom graphics.',
            githubLink: '',
            projectLink: 'https://www.threescoredevelopment.com/'
        },
        {
            id: '20',
            imageSrc: 'images/chapterToo.svg',
            imageAlt: '',
            background: '#041232',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/chapterTooMobile.png',
            desktopScreenshot: 'images/chapterTooDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Chapter Too Travel Blog',
            path: '/chapter-too',
            motivation: '',
            description: '',
            technicalInfo: '',
            technologies: 'HTML, CSS, JavaScript',
            npmPackages: '',
            futureDev: '',
            role: 'Part of a two person development team. Responsible for design, code and creation of custom graphics.',
            githubLink: '',
            projectLink: 'https://www.mvchaptertoo.com/'
        },
        {
            id: '24',
            imageSrc: 'images/threeScoreRub.svg',
            imageAlt: '',
            background: '#0072bb',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/threeScoreRubMobile.png',
            desktopScreenshot: 'images/threeScoreRubDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Three Score Rub',
            path: '/three-score-rub',
            motivation: '',
            description: '',
            technicalInfo: '',
            technologies: 'HTML, Handlebars, CSS, JavaScript, jQuery, MySQL, Node.js, Express, Heroku',
            npmPackages: '',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: '',
            projectLink: 'https://threescorerub.com/'
        },
        {
            id: '13',
            imageSrc: 'images/swissFavicon.svg',
            imageAlt: '',
            background: '#b5ca30',
            textColor: '#0F0F0D',
            mobileBackgroundSrc: 'images/phoneBackDark.svg',
            desktopBackgroundSrc: 'images/desktopDark.svg',
            mobileScreenshot: 'images/swissMemoryMobile.png',
            desktopScreenshot: 'images/swissMemoryDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Swiss Memory Game',
            path: '/swiss-memory-game',
            motivation: '',
            description: '',
            technicalInfo: '',
            technologies: 'HTML, CSS, JavaScript, React',
            npmPackages: 'create-react-app',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/swissMemoryGame',
            projectLink: 'https://lexi-winstanley.github.io/swissMemoryGame/'
        },
        {
            id: '6',
            imageSrc: 'images/burger.svg',
            imageAlt: 'double decker burger icon',
            background: '#0072bb',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/burgerMobile.png',
            desktopScreenshot: 'images/burgerDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Eat Da Burger',
            path: '/eat-da-burger',
            motivation: '',
            description: 'Eat Da Burger is a web application deployed with Heroku. On home page load, the user is presented with any existing burgers in the MySQL database, non-devoured burgers in the \'Ready to Eat\' section and devoured burgers in the \'Devoured\' section. There is also a form to allow them to input the name of new burgers they\'d like to eat. Once they hit submit, the new burger is added to the MySQL database as \'Ready to Eat\' and the page is reloaded so the burger is displayed in the appropriate section with a \'Devour It!\' button. If the user clicks this button the devoured state for that burger is updated in the MySQL database and the page is reloaded showing the burger moved to the \'Devoured\' section of the page.',
            technicalInfo: 'This application is organized using the Model-View-Controller (MVC) design pattern. An Object Relational Mapper (ORM) is defined with functions to handle the MySQL queries and the model further defines those functions specific to the Eat Da Burger application. The routing is defined in the controller and the functions are called as appropriate, once database data is gathered or altered, the view updates from the Handlebars template using a page reload.',
            technologies: 'HTML, Handlebars, CSS, JavaScript, jQuery, MySQL, Node.js, Express, Heroku',
            npmPackages: 'express, express-handlebars, mysql',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/BurgerLog',
            projectLink: 'https://nameless-taiga-35229.herokuapp.com/'
        },
        {
            id: '10',
            imageSrc: 'images/gifGenerator.svg',
            imageAlt: 'gif generator icon',
            background: '#041232',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/gifMobile.png',
            desktopScreenshot: 'images/gifDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'GIF Generator',
            path: '/gif-generator',
            motivation: '',
            description: 'Users press the buttons to search for animal GIFs. They can add their own buttons to create custom searches. Each search will return 10 GIFs but pressing the \'Get More\' button after the initial search will return additional GIFs in the category. Users can expand or collapse the favorites section by pressing the arrow and pressing any \'Add to Favorites\' button will add that GIF to the section.',
            technicalInfo: 'This application uses jQuery to populate sections of the results page with GIFs. Logic was written to capture user text input to create new buttons that can then be clicked (click event listeners) to call the Giphy API with the search query. A response is received from the Giphy API and the JSON data is used to display the GIFs on the page. If the API call is not successful, an error is shown.',
            technologies: 'HTML, CSS, JavaScript, jQuery',
            npmPackages: 'express, express-handlebars, mysql',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/GiphyGenerator',
            projectLink: 'https://lexi-winstanley.github.io/GiphyGenerator/'
        },
        {
            id: '15',
            imageSrc: 'images/friendFinder.svg',
            imageAlt: 'friend finder icon',
            background: '#680a4d',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/friendFinderMobile.png',
            desktopScreenshot: 'images/friendFinderDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Friend Finder',
            path: '/friend-finder',
            motivation: '',
            description: '',
            technicalInfo: '',
            technologies: '',
            npmPackages: '',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/FriendFinder',
            projectLink: 'https://afternoon-falls-93974.herokuapp.com/'
        },
        {
            id: '22',
            imageSrc: 'images/train.svg',
            imageAlt: '',
            background: '#cbc5ef',
            textColor: '#0F0F0D',
            mobileBackgroundSrc: 'images/phoneBackDark.svg',
            desktopBackgroundSrc: 'images/desktopDark.svg',
            mobileScreenshot: 'images/trainMobile.png',
            desktopScreenshot: 'images/trainDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Train Schedule',
            path: '/train-schedule',
            motivation: '',
            description: '',
            technicalInfo: '',
            technologies: 'HTML, CSS, JavaScript, jQuery, Firebase',
            npmPackages: '',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/TrainSchedule',
            projectLink: 'https://lexi-winstanley.github.io/TrainSchedule/'
        },
        {
            id: '26',
            imageSrc: 'images/sawblade.svg',
            imageAlt: 'saw blade icon',
            background: '#0cb2ba',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/woodworkingMobile.png',
            desktopScreenshot: 'images/woodworkingDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Woodworking Trivia',
            path: '/woodworking-trivia',
            motivation: '',
            description: '',
            technicalInfo: '',
            technologies: 'HTML, Handlebars, CSS, JavaScript, jQuery, MySQL, Node.js, Express, Heroku',
            npmPackages: 'express, express-handlebars, mysql',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/WoodworkingTrivia',
            projectLink: 'https://lexi-winstanley.github.io/WoodworkingTrivia/'
        },
        {
            id: '8',
            imageSrc: 'images/pawPrint.svg',
            imageAlt: 'dog paw print icon',
            background: '#b5ca30',
            textColor: '#0F0F0D',
            mobileBackgroundSrc: 'images/phoneBackDark.svg',
            desktopBackgroundSrc: 'images/desktopDark.svg',
            mobileScreenshot: 'images/dogBreedMobile.png',
            desktopScreenshot: 'images/dogBreedDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Guess that Dog Breed Game',
            path: '/guess-that-dog-breed',
            motivation: '',
            description: 'In this application the computer randomly chooses a word from a predefined array of dog breeds, then displays underscores corresponding to the number of letters. The user then presses keys to guess letters that may be in the word. If they guess a letter that is in the word the appropriate blanks are changed to that letter and the number of letters remaining in the word decreases. If they guess a letter that is not in the word it is displayed on the page as an incorrect letter guessed and the number of guesses remaining decreases. \nThe user is allowed 10 incorrect guesses, if they do not guess all the letters in the word before they run out of guesses the number of losses is incremented and the game resets. If they guess the word correctly then the number of wins is incremented and the game resets. \nWhen the game resets the computer randomly chooses a new word from the remaining dog breeds in the array and the incorrect guesses are cleared and number of guesses remaining set back to 10. Each time the computer selects a new word the picture is updated to display a dog of the previous breed (i.e. if the previous word was "poodle" when the computer selects a new word the picture will update to be of a poodle). The computer will go through each word in the array once before beginning to repeat words. There are 20 unique dog breeds in the game.',
            technicalInfo: 'This application is written with JavaScript. Arrays are used to hold possible words, letters guessed incorrectly and correctly, underscores corresponding to current word and words that have been used since page load. Loops, variables and event listeners (on key up) are used to carry out the logic to determine what the user is guessing and if that guess is correct or not as well as update the HTML elements.',
            technologies: 'HTML, CSS, JavaScript',
            npmPackages: '',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/DogBreedGuessingGame',
            projectLink: 'https://lexi-winstanley.github.io/DogBreedGuessingGame/'
        },
        {
            id: '17',
            imageSrc: 'images/greenCrystal.svg',
            imageAlt: 'green crystal icon',
            background: '#FC354C',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/crystalMobile.png',
            desktopScreenshot: 'images/crystalDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Crystal Counting',
            path: '/crystal-counting',
            motivation: '',
            description: 'This is a JavaScript game utilizing the jQuery library. At the start of the game a target score between 19-120 will be randomly generated. Each of the four crystals will also be assigned a random value 1-12. The crystal values will not be displayed to the player. \nEach time a crystal is clicked its value will be added to the current score. The object of the game is to click on the crystals in such a way that the sum of all the crystals clicked equals the target score; this will constitute a win for the player which will be displayed at the bottom of the page. If the current score goes over the target score the game ends and the player loses; the losses display at the bottom of the page will be incremented. \nOnce the player wins or loses a new target score and crystal values will be generated.',
            technicalInfo: '',
            technologies: 'HTML, CSS, JavaScript, jQuery',
            npmPackages: '',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/CrystalCountingGame',
            projectLink: 'https://lexi-winstanley.github.io/CrystalCountingGame/'
        },
        {
            id: '27',
            imageSrc: 'images/crystalBall.svg',
            imageAlt: 'crystal ball icon',
            background: '#680a4d',
            textColor: '#f8f7f7',
            mobileBackgroundSrc: 'images/phoneBackLight.svg',
            desktopBackgroundSrc: 'images/desktopLight.svg',
            mobileScreenshot: 'images/letterGuessMobile.png',
            desktopScreenshot: 'images/letterGuessDesktop.png',
            mobileScreenshotAlt: '',
            desktopScreenshotAlt: '',
            title: 'Letter Guessing Game',
            path: '/letter-guessing-game',
            motivation: '',
            description: 'This is a JavaScript game in which the computer will choose a letter from the alphabet and the user will then press keys to guess what the letter is. The user will have 9 tries to guess the letter correctly. Incorrect guesses will display on the page and the number of remaining guesses will decrease. If the user is not able to guess the letter in 9 tries the number of losses will increment and the display will update. If the user guesses the letter correctly, the number of wins will increment and the display will update. The computer then chooses a new letter and the number of guesses remaining resets to 9 and the incorrect guesses are cleared.',
            technicalInfo: '',
            technologies: 'HTML, CSS, JavaScript',
            npmPackages: '',
            futureDev: '',
            role: 'Sole developer responsible for design, code and creation of custom graphics.',
            githubLink: 'https://github.com/lexi-winstanley/LetterGuessingGame',
            projectLink: 'https://lexi-winstanley.github.io/LetterGuessingGame/'
        }
    ]
}