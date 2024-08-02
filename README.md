# Virtual-Cv-stuff
Home/Index Page Overview:
1.	Page Title and CSS Reference: The page is titled to clearly indicate that this is my Virtual CV. It references a CSS sheet that handles the animations, decorations, and overall visual appeal of the page.
2.	Autoplay Video Background: Instead of a static picture, I chose to use a video of myself that plays on an autoplay loop. This video serves as a dynamic background, replaying as many times as I prefer.
3.	Heading and Content: As a page heading, there's a bold statement outlining my career goals in the security industry. To make this heading stand out, it's written in capital letters and displayed prominently over the playing video.
4.	Explore Button Functionality: The “Explore” button is powered by JavaScript. I designed it for viewers who may prefer to skip interacting with the Virtual CV and instead access my traditional CV directly. Clicking this button smoothly scrolls down to a section where they can download my resume for further viewing.

Navigation and Interactivity:

1.	Navigation Bar: To make navigating my CV easier, I included a navigation bar with three tabs. These tabs allow viewers to switch between the home page (the current page in view) and the "About" page.
2.	Contact Button and Combo Box: There’s also a contact button that opens a combo box with different communication options. For example, selecting the LinkedIn link will take you directly to my LinkedIn profile, and the GitHub link will direct you to my GitHub account.
3.	Custom Cursor: I added a custom cursor that enhances interactivity. When you hover over headings, the cursor makes them become transparent, and it also allows you to make selections in the navigation bar.
4.	JavaScript Integration: Finally, I connected a JavaScript file to handle various page functionality enhancements, making the entire experience smoother and more engaging.

About Page Overview:

1.	Page Heading: The heading on this page is titled "About Me," clearly indicating the focus of the content.
2.	Navigation Bar: I added a navigation option that lets viewers easily return to the main/home page.
3.	Background Image: To keep a personal touch throughout the site, I used a background image of myself. This ensures that I’m visually present on every page of my virtual CV.
4.	About Content: In the content section, I provided a brief overview of my interests, keeping it concise to avoid overwhelming the reader with too much text. For detailed information about my projects, I direct viewers back to the home page where they can explore my CV for more in-depth descriptions.
5.	Interactivity: Just like on the other pages, I integrated a custom cursor to enhance navigation. The page also links to my JavaScript file for additional functionality.

My JavaScript.js:

1.	Following the Cursor
This code creates two circles that act like cursors on the screen. One is a normal cursor, and the other fades in and out. The code listens for your mouse movements and makes these circles follow your mouse around the screen.
2.	Smooth Scrolling to Different Sections
There's a button labeled "Explore" that when clicked, smoothly scrolls down the page to a section titled "Resume". 
3.	Contacting the Webpage Owner
There's a button labeled "Contact" that when clicked, shows or hides a menu with different contact options in the form of a combo box. Clicking outside of this menu when it's open will also make it disappear. This menu allows selection of any contact mode of ow to reach me - by email, phone, LinkedIn, or GitHub. Clicking on the chosen option will open the corresponding email address, phone number, LinkedIn profile, or GitHub profile in a new tab.
4.	Error Handling Making Sure There's a Valid Selection
The code also checks to make sure you've chosen a valid way to contact me before trying to open anything. If you pick something that isn't email, phone, LinkedIn, or GitHub, it will just write an error message.

Style.css:

1.	General Styling:
It starts by ensuring the page looks consistent across different browsers, resetting margins and paddings, and using a serif font for all text to give it a classic feel.
2.	Hero Section:
The hero section takes up the entire screen and has a cool gradient background. It centers its content, including a background video that resizes based on the screen’s size.
3.	Navigation Bar:
At the top of the page, the navigation bar spans the full width and uses a flexible layout to keep everything evenly spaced. The links are styled to sit in line without any list formatting, with a set font size and color.
4.	Hero Content:
The main heading in the hero section stands out with a big, bold font in white. It also has a hover effect that adds a text stroke and makes the text color transparent for a striking visual impact.
5.	Explore Button:
The explore button is styled with a border and padding and changes color when you hover over it, signaling to users that it’s interactive.
6.	Custom Cursor:
Two cursor elements are styled to follow the mouse and change in size and color depending on interaction, adding a bit of flair to the user experience.
7.	About Section:
This section features a dynamic background animation and a blurred overlay, giving it a sleek, modern look. The text inside is styled in white against a dark background to keep it easy to read.
8.	Dropdown Menu:
The dropdown menu is designed to show up when you hover over it, providing an easy way for users to select options. The menu and its items also change color on hover, enhancing the interactive experience.
9.	Contact Options:
The contact dropdown is hidden by default and appears when you trigger it. It includes a combo box where users can choose how they want to be contacted, with each option styled for clarity and ease of use.



