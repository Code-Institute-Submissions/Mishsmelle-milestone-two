# Pinot Gogo Website

![alt text](https://screenshot.click/07-23-kpy5n-lu09u.png)

[View the live project here.](https://mishsmelle.github.io/milestone-two/)

This is a presentation website for assessment by the Code Institute. This focus of this assessment is interactive frontend development. The site should respond to users actions, allowing users to actively engage with data, alter the way data is displayed to achieve their goals. To demonstrate these skills I have built a wine tour website. The company is called Pinot Gogo and they are an irish owned luxury package tour operator. The site includes a js contact form, google maps api and an interactive quiz to allow suers to find a wine that suits them in a fun way. 

# User Experience (UX)

## User stories

### First Time Visitor Goals
* As a First Time Visitor, I want to find out more about Pinot Gogo. 
* As a First Time Visitor, I want to find a wine that would suit me. 
* As a First Time Visitor, I want to see what wine tours are available.

### Returning Visitor Goals
* As a Returning Visitor, I want to find contact information to enquire about by my wine tour. 
* As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.
* As a Returning Visitor, I want to see what wine tours are available..

### Frequent User Goals
* As a Frequent User, I want to read the blog to see if there are any new wine recommendations. 
* As a Frequent User, I want to find Pinot Gogo’s social media pages to follow. 
* As a Frequent User, I want to find contact information to enquire about by my wine tour. 

# Design

The design is fresh and simple. An earthy green colour was chosen reminding the user of a green grape. The logo was designed to also incorporate grapes. This was done with the intention of focusing the user on the growth and production of wine instead of the bottled drinking side. 
## Colour Scheme

The colour scheme was intentionally kept minialist here. I used a light green colour for the header and footer and to highliht the quiz. the rest was kept in an eas yot read black text on white background. 

## Typography

The font used is Bodoni, sourced from Google fonts. Bodoni is a serif font, which conveys a more traditional, classical tone. the letters contain a lot of space in keeping with the look if the website, space is often used in travel sites as it encourages curiosity and wanderlust. 

## Imagery
All the images on the site were sourced from pexels.com. all images are high quality and chosen for their colourful depictions of vineyards.

## Wireframes
Home Page Wireframe - [View]("assets/images/homepage-wireframe.png")
Mobile Wireframe - [View]("assets/images/Mobile_homepage.png")
Quiz Wireframe - [View]("assets/images/Quiz-desktop-wireframe.png")

## Features
* Responsive on all device sizes
* An interactive quiz 
* A Contact Form
* A google maps intergration

**Languages Used**
* HTML5
* CSS
* Javascript

## Frameworks, Libraries & Programs Used
* [Bootstrap](https://getbootstrap.com/) was used to assist with the responsiveness and styling of the website.
* [Google Fonts](https://fonts.google.com/) used to import the font into the style.css file which is used on all pages throughout the project.
* [Font Awesome](https://fontawesome.com/) used on all pages throughout the website to add icons for aesthetic and UX purposes.
* [jQuery](https://jquery.com/download/) came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
* [Gitpod](https://ivory-chicken-o25zvxtn.ws-eu08.gitpod.io/) was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* [GitHub](https://github.com/Mishsmelle/milestone-two) is used to store the projects code after being pushed from Git.
* [Canva](https://www.canva.com/) used to create the logo, resizing images and editing photos for the website.
* [Balsamiq](https://balsamiq.com/wireframes/?gclid=Cj0KCQjwh_eFBhDZARIsALHjIKdD25XHbow7FIopzi753SjsP3YK-D7vjTjD-GuP0kOcYlpXvvOgp_8aAq9gEALw_wcB) used to create the wireframes during the design process.
* [Vue](https://vuejs.org/) used for the interactive quiz. 
* [Email JS](https://dashboard.emailjs.com/admin/templates/30bekqu) used for the contact form. 

# Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

W3C Markup Validator: 
* [Index.html Results](/assets/docs/index-html-validator.png)
* [About-us.html Results](/assets/docs/about-us-validator.png)
* [Contact-us.html Results](/assets/docs/contact-us-validator.png)
* [Explore-wine-tours.html Results](/assets/docs/explore-wine-tours-validator.png)
* [Booking-form.html Results](/assets/docs/booking-form-validator.png)
W3C CSS Validator: 
* [CSS Results](/assets/docs/CSS-Validator.png)

The index.html is showing 13 errors relating to the Vue.JS app. 

![](/assets/docs/images/validator filtering.png)

**What are the errors?** 

The only errors are those relating to the Vue.js framework. Including: 

* v-cloak
* v-show
* v-for
* v-bind
* v-model
* v-on
* v-if

Each error stating that the vue framework element (indicated by the **v-**) is not allowed on the respective HTML element, (div, input, button and li)

**What is the cause of the errors?**
As HTML validators expect pure HTML these frameworks are expected to show as errors here. Further research, [example](https://livebook.manning.com/book/testing-vue-js-applications/chapter-13/5), confirmed this. Here it explains that without the use of Server Side rendoring HTML validators are unable to interpret VUE.js code. 

**Why I chose to keep the framework in the project despite the errors** 
* First, I did some research into possible ways to remove these errors and warnings from the HTML validator. I researched different suggestions I found online, for example, [this Stackflow article on W3C Validation and Vue's HTML binding syntax](https://stackoverflow.com/questions/39498365/w3c-validation-and-vues-html-binding-syntax) referenced a [github issue](https://github.com/vuejs/vue/issues/273) which suggested a vue comfig prefix. I then found a subsequent github entitled [Why was "Vue.config.prefix" removed?](https://github.com/vuejs/vue/issues/2415) noting this option was no longer available. 
* Second, I considered using a different framework for the site but utimately feel that the vue.js is the best suited for this project. I learned a lot from including it and it allows me to include a quiz that functions exactly how I wanted it to. 
* Third, as this is a resubmission I sought additional guidance from tutors, my mentor and peers on this and from these discussions decided to proceed with the project and include futher insights into the errors here in the README. 

## Testing User Stories from User Experience (UX) Section

### First Time Visitor Goals
* As a First Time Visitor, I want to find out more about Pinot Gogo. 

**The site includes an About Us page where first time visitors can learn more about hte company, there is also links to their social media pages and contact info.**

* As a First Time Visitor, I want to find a wine that would suit me. 

**The site includes a fun interactive quiz to help win newbies fine one that suites.**

* I want the site to be easy to find on Google

**meta description was added to the head to improve SEO** 

### Returning Visitor Goals
* As a Returning Visitor, I want to request more info about booking my wine tour. 

**Clicking on any link to book brings the user to a registration form to request a brochure and be contacted by a member of the team**

* As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.

**The built-in contact page is highly visible in the footer that shows on every page. The user can also find the company email address and phone number here too.**

* As a Returning Visitor, I want to see what wine tours are available.

**The site includes a page called Explore Wine Tours that details packages available for each region, and a map to help users tailor their wone tour to their own needs.**

### Frequent User Goals
* As a Frequent User, I want to find Pinot Gogo’s social media pages to follow. 

**Social links can be found in the footer on each page**

* As a Frequent User, I want to see what else is available in the region after I have booked my tour. 

**Users can view the google map with places to navigate through the region and familiarise themselves.**

Further Testing

* The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
* Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

## Known Bugs/issues

* The site is not as responsive as I would like, alignments are off when moving from desktop to mobile. This is an issue I had in my previous project also and while I feel on this site I have made improvements it is still an area I need to work on. 
* The title on the registration form should toggle depending on the region chosen. It worked previously but while working on the site leading up to deadline it stopped and I was unable to resolve this. I had to remove this feature for this iteration of the website so it functions as expected. 
  
# Deployment

### GitHub Pages
The project was deployed to GitHub Pages using the following steps...
* Log in to GitHub and locate the [GitHub Repository](https://github.com/Mishsmelle/milestone-two)
* At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
--Alternatively Click Here for a GIF demonstrating the process starting from Step 2.
* Scroll down the Settings page until you locate the "GitHub Pages" Section.
* Under "Source", click the dropdown called "None" and select "Master Branch".
* The page will automatically refresh.
* Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...
* Log in to GitHub and locate the [GitHub Repository](https://github.com/Mishsmelle/milestone-two)
* At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
* You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone
* Log in to GitHub and locate the [GitHub Repository](https://github.com/Mishsmelle/milestone-two)
* Under the repository name, click "Clone or download".
* To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
* Open Git Bash
* Change the current working directory to the location where you want the cloned directory to be made.
* Type git clone, and then paste the URL you copied in Step 3.
$ git clone https://github.com/mishsmelle/pinot-gogo

* Press Enter. Your local clone will be created.
$ git clone https://github.com/mishsmelle/milestone-two
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits
https://www.w3schools.com/howto/howto_css_hero_image.asp
https://www.w3schools.com/howto/howto_css_image_overlay.asp
https://codepen.io/heatherduvall/pen/ggedwy
https://timmorrisdev.github.io/south-coast-sup/
https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array/38846107

All of these code sources have been commented in the respective file. 

## Content
All content was written by myself, MichelleO'Connor. 

## Media
All Images were sourced from [Pexels.com](https://www.pexels.com/)

## Acknowledgements
My Mentor for continuous helpful feedback.
Tutor support at Code Institute for their support.
