The web page is for the Louisville Fire Foundation.
This is a Charity Orgainization that supports Louisville firefighters, their families and the community.



In the pages folder start with the index.html page, this is the main page for my project.


Java Script can be found in the script folder in script.js.


CSS can be found in the css folder, there are four different files there.
smallscreen.css files has the majority of the css that is applied to the project.

Media queries can be found in the css folder at the top of the largescreen.css and mediumscreen.css files.
The style.css page has a normalize css that was used and credited from github. 



Cookie Consent Banner. 

Located: index.html line 131 and script.js line 19.
The banner pops up at the bottom of the screen 2 seconds after arriving to the page.
When the okay button is clicked the banner disappears, this action is saved in local storage.  In order for the banner to show again, local storage must be cleared and the page refreshed to see the cookie banner.



(I orginally used a standard pop up window to accept cookies when first arrving to the page. I used session storage to save the accept click so that every time you navigated to the home page you would have to accept the cookies. 
I did not like the look of this pop up so I switched to a banner cookie consent and changed the storage. I kept this disabled code for personal future reference.)



Navigation Bar at the top of the page. 

Located: index.html line 38 and script.js line 3.

When the page is seen with a medium screen (768px) or larger the navigation menu is shown horizontally at the top of the page.
On small screens the navigation bar is collapsed except the hamburger button is still shown.
When the hamburger button is clicked, the navigation menu expands and the page navigation is shown vertically.



Flex box is used in the footer.

Located index.html line 9 and found in smallscreen.css line 220 and line 235, mediumscreen.css line 11 and largescreen.css line 10.

On small screens the footer links are stacked on top of each other in a single column covering 100% of the screen. When using medium screens with a minimum width of 768px the footer is in two columns, each taking up 50% of the screen.
On large screens with a min width of 900px the footer is in 4 columns, each taking up 25% of the screen. 



Copyright Date automatic update.

Located : index.html line 124.

 I put this is Java Script in line on the index.html page
In the footer for the copyright date, the date will be updated with java script on January 1 of every year so that the year is up to date. 


Email Validation

In the footer under Social there is a Contact Us link. 
Also found in the pages folder in the contactus.html file.

Located: index.html line 119 and script.js line 44.

On this page there is a form to input first and last name and email address. When this form is submitted it checks to make sure that a valid email address has been entered. If the email address is valid on submit there is an alert that says "Thank you for your submission." If the email address does not fit the requirements, you will see an alert that says "invalid email address."

 
:nth-child 

Located: newsletter.html line 60 and on smallscreen.css line 349.

In the Nav bar click on News Letter. On that page there is a table for events. I used the :nth-child to change the colors of the odd rows and for the 4th column.
If you click on one of the RSVP buttons it brings you to an RSVP page to fill out and submit. On click you will get an alert that says "Thank you for your RSVP" Located: rsvp.html line 70 and script.js line 67.



The other pages I plan to continue to work on. 