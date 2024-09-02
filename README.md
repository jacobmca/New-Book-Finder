# New-Book-Finder
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install, please clone this repository to your computer using the following steps in Github:

1. Click the "Code" dropdown menu and copy the SSH URL.
2. Open your terminal and navigate to the directory you would like to clone this repository into.
3. Type "git clone <paste SSH URL>", replacing <paste SSH URL> with your copied SSH URL. You can substitute an SSH URL with an HTTPS URL.
4. Press enter.

## Description

This is the New Book Finder, a Google Books API-based search engine program. Once a user signs up for the program, they can search for books within Google books' library and add them to their list of Saved Books. These books can be removed when they no longer want them there.

Note that a user must be logged in to access these features. An account requires a username, an e-mail address, and a password.

This program utilizes GraphQL built with Apollo Server to connect with the Google Books API. It's built using the MERN stack; the front-end utilizes React, the back-end uses MongoDB database and Node.js/Express.js.

## Usage

After downloading the program per the below, run the following commands in your terminal:

npm install
npm run build
npm start

Once the program is running, you should see the following home page:

![Screenshot](public/screenshot1.png)

If you do not have an account already, click the "Sign Up" button and create an account using a user name, e-mail, and password. If you do, click Login to access your account.

![Screenshot](public/screenshot2.png)

To search for a book, simply enter a title or key words in the "Search For Books!" field and click "Submit Search." Click "Save This Book!" under a search result to add the book to your saved books list.

![Screenshot](public/screenshot3.png)

You can view your saved books by clicking on the "Saved Books" button in the top right of your navigation bar. To remove a book from your list, click "Delete this Book! underneath the title.

![Screenshot](public/screenshot3.png)

## Contributions
When contributing to this repository, please reach out to me via e-mail to discuss the change you would like to make first. I am open to ideas both with regards to data stored in the tables and alterations to user interaction with the data.

## License
This project is licensed under the MIT License. For more information, please see the [MIT License](https://opensource.org/licenses/MIT).

## Credits
This program was created by Jacob McAuliffe for the UC Berkeley eDX Coding Boot Camp.

## Tests
In the future, I would love to find ways for users to store more personalized data about the books they save, such as likes/dislikes, reviews, or be able to change the order the books appear in the list. I would also like to be able to allow the user to have multiple saved lists that they could save different books too. They could then also change the names of the lists, giving each list a unique utility.

## Questions
If you have further questions, you can reach me at [mcauliffemedia@gmail.com](mailto:mcauliffemedia@gmail.com).

GitHub Account: [jacobmca](https://github.com/jacobmca)
