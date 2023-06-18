<!-- REPLACE ALL THE [USERNAME] TEXT WITH YOUR GITHUB PROFILE NAME & THE [PROJECTNAME] WITH THE NAME OF YOUR GITHUB PROJECT -->

<!-- Repository Information & Links-->
<br />
https://github.com/anchenayres/termTwoProject_2023.git

![GitHub repo size](https://img.shields.io/github/repo-size/username/projectname?color=%000000)
![GitHub watchers](https://img.shields.io/github/watchers/username/projectname?color=%000000)
![GitHub language count](https://img.shields.io/github/languages/count/username/projectname?color=%000000)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/username/projectname?color=%000000)

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Anchen Ayres</h5>
<h5 align="center" style="padding:0;margin:0;">21100284</h5>
<h6 align="center">DEV300 Third Year</h6>
</br>
<p align="center">

  <a href="https://github.com/anchenayres/termTwoProject_2023.git">
    <img src="./assets/modelLogo.png" alt="Logo" width="200" height="200">
  </a>
  
  <h3 align="center">Model Search</h3>

  <p align="center">
    This app allows users to create competitions, vote for the best models and compete agaisnt one another as a chance to exploit their beauty <br>
      <a href="https://github.com/anchenayres/termTwoProject_2023.git"><strong>Explore the docs »</strong></a>
   <br />
   <br />
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/username/projectname/issues">Report Bug</a>
    ·
    <a href="https://github.com/username/projectname/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->
Table of Contents

- [About the Project](#about-the-project)
  - [Project Description](#project-description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [How to install](#how-to-install)
  - [Installation](#installation)
- [Features and Functionality](#features-and-functionality)
  - [Login / Sign Up](#login--sign-up)
  - [Competitions](#competitions)
  - [Feature 3](#feature-3)
- [Concept Process](#concept-process)
  - [Ideation](#ideation)
  - [Wireframes](#wireframes)
  - [User-flow](#user-flow)
- [Development Process](#development-process)
  - [Implementation Process](#implementation-process)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Reviews \& Testing](#reviews--testing)
    - [Feedback from Reviews](#feedback-from-reviews)
    - [Unit Tests](#unit-tests)
  - [Future Implementation](#future-implementation)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
  - [Video Demonstration](#video-demonstration)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Authors](#authors)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1][image1]

### Project Description

Welcome to Model Search. The competitive platform for users to exploit their beauty as they compete for the titles. Users are able to create an account / sign into their account and create a profile best suited to them for all the users to see. They are then able to compete in existing competitions by simply uploading images of themselves and allowing other people to vote for who should win the compeition. The judges or users are also able to add new competitions to the app and allow other users the chance to compete. The most votes will be showcased and awards will be given accordingly. Good Luck!

### Built With

* [Expo](https://expo.dev/)
* [Firebase](https://firebase.google.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [Software](path/to/where/they/can/download/software) installed on your machine. The [Plugin](path/to/where/they/can/download/plugin) plugin will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. Software </br>
`Android Studio` -> `File` -> `New` -> `From Version Control` -> `Git`</br>
Enter `https://github.com/anchenayres/termTwoProject_2023.git` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   git clone https://github.com/anchenayres/termTwoProject_2023.git
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies:
   ```sh
   npm install
   ```

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

### Authentication

### Login Screen

Authentication allows users who are already registered in the firebase database collection of 'users' to access their account. Passwords are encrypted as they sign up to the app which adds to the security of personal information. Only registered users are able to create, delete, or update any of thier information. 

![image3][image3]

### Register Screen

The regsiter screen is for new users who are able to create their profiles. As a user registers, their information gets added to the firebase database and is then a registered user.

![image4][image4]

### Navigation

### Stack Navigation

The app makes use of stack and bottom tab navigation to navigate through the different screens. The stack navigation is used when a user wants to log into their account or register. If the user is in the login screen, a button allows the user to navigate back to the register screen. Once a user has logged in or registered, they will navigate straight to the competitions screen where bottom tab navigation is used.

### Bottom Tab Navigation

Bottom tab navigation allows the user to navigate between the screens with the touch of a button. The different tabs are available at the bottom of the screen with the title and an image which is imported from Ionicons as part of react native navigation.

### All Competitions Screen

When a competition is available to the all the users in the database, it will be displayed in the competitions tab. Information regarding the competition is displayed with a button to be able to compete in the competition where users will then upload an image of themselves where other users are then able to vote. A user is not able to vote for their own competition entry.

![image5][image5]

### Add A New Competition

Users are able to upload a new competition to the database collection where they will need to fill in the appropriate information with the input fields, It will then be available to all users to compete in.

![image6][image6]

### Deployment

## IOS and Android 

The app is deployed using Expo.
1. Install EAS CLI (npm install -g eas-cli) 
2. Sign into your Expo account (eas login) and check if you are logged into your account (eas whoami)
3. Configure the project (eas build:configure)
4. Build the app. Android (eas build --platform android), IOS (eas build --platform ios), or both (eas build --platform all)


<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

### Ideation

<br>

### Wireframes

![image7][image7]

### User-flow

![image8][image8]

<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->

* Made use of both `functionality` to implement a specific feature.
* `MVC/MVVM` design architecture implemented.
* `Plugin` for this.
* ETC.

#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* Sunshine.
* Rainbows.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Encountered a lot of errors regarding the async functions. Most of them I was able to correct as I had forgotten to add an await to the async functions but currently there is still an error with the login screen. 
* Installing any dependencies. It looks like I was not working in my main root and had to include 'sudo' before any installations which then allowed me to upload a new dependency. 

### Reviews & Testing
<!-- stipulate how you've conducted testing in the form of peer reviews, feedback and also functionality testing, like unit tests (if applicable) -->


### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* Definitly improve my navigation functionality. When a user logs out of the app, it does not navigate back to the login and registration screen but in the console it does say 'Successfully Logged Out!".
* Front End. I need to work on the design of the app as I was more focused on the functionality working.
* Time management. As I encountered many bugs, I needed to start my functionality earlier to allow my app to work smoothly.

<!-- MOCKUPS -->
## Final Outcome

### Mockups

![image9][image9]
<br>
![image10][image10]

<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](path/to/video/demonstration)

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/username/projectname/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->
## Authors

* **Anchen Ayres** - [username](https://github.com/anchenayres/termTwoProject_2023.git)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **Anchen Ayres** - [email@address](mailto:21100284@virtualwindow.co.za)
* **Project Link** - https://github.com/anchenayres/termTwoProject_2023.git

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
<!-- all resources that you used and Acknowledgements here -->
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)
* [Resource Name](path/to/resource)


<!-- MARKDOWN LINKS & IMAGES -->
[image1]: /path/to/image.png
[image2]: /path/to/image.png
[image3]: ./assets/login.jpg
[image4]: ./assets/register.PNG
[image5]: ./assets/comp.jpg
[image6]: ./assets/newComp.PNG
[image7]: /path/to/image.png
[image8]: /path/to/image.png
[image9]: /path/to/image.png
[image10]: /path/to/image.png


<!-- Refer to https://shields.io/ for more information and options about the shield links at the top of the ReadMe file -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/nameonlinkedin/
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/instagram_handle/
[behance-shield]: https://img.shields.io/badge/-Behance-black.svg?style=flat-square&logo=behance&colorB=555
[behance-url]: https://www.behance.net/name-on-behance/
