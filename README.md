# playwright-tests-group-3
Playwright UI testing

## Instructions
This test suite uses Playwright to test the functionality of the Yle Areena website. 
The tests check if the website loads properly, if the user registration form works, if the channel labels are present 
and if the information about a specific episode is displayed correctly.

## Setup
# To run the tests, follow these steps:

1. Install Node.js and npm (https://nodejs.org/).
2. Clone the repository from GitHub.
3. Open a terminal in the project directory.
4. Run npm install to install the necessary packages.
5. Run npm test to run the test suite.

# Test Cases
## Test Case 1: has title
This test checks if the website has the correct title.

1. The test opens the Yle Areena website.
2. The test checks if the title contains the expected substring.

## Test Case 2: register
This test checks if the user registration form works properly.

1. The test opens the Yle Areena website.
2. If a cookie banner is present, the test clicks the "Vain välttämättömät" button.
3. The test clicks the login button.
4. The test clicks the "Luo Yle Tunnus" button in the login form.
5. The test fills the email input with a fake email.
6. The test clicks the "Luo Tunnus" button in the registration form.
7. The test checks if the error message "Tarkista sähköpostiosoitteen muoto." is visible.

## Test Case 3: check channel labels
This test checks if the channel labels are present on the TV guide page.

1. The test opens the TV guide page.
2. If a cookie banner is present, the test clicks the "Vain välttämättömät" button.
3. The test checks if the aria-label attribute is defined for all channel logo elements using a for/of loop instead of the page.$$() method.

## Test Case 4: season 3 ep 5 date and name
This test checks if the information about a specific episode is displayed correctly.

1. The test opens the page of the specific episode.
2. If a cookie banner is present, the test clicks the "Vain välttämättömät" button.
3. The test clicks the "Kausi 3" button.
4. The test clicks the "5. Kummeli" button.
5. The test waits for the page to load.
6. The test checks if the episode name and publication date are displayed correctly.

## Note
These tests were written in April 2023 and may no longer work as expected due to changes made to the Yle Areena website or to the Playwright library.
