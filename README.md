Backend repo: https://github.com/EliW09/capstone-api
Deployed frontend: https://EliW09.github.io/capstone-client
Deployed backend: https://powerful-mountain-74350.herokuapp.com/

My game is called Escape, built in html5, canvas (html5, made my background), sass, toastr (for popups), JQuery and javascript. The game has a backend to save your game choices and to get the storyline to be displayed on the frontend. As you play the game you constantly make requests to the backend to save what you pick. This game is very backend heavy meaning the majority of the javascript is just event listeners and ajax requests other than a few jquery hide and show functions to display what you need at that very time. I made a colorful shaped background with canvas to add some color and design to the game without using any images.

Something I want to accomplish with my game is allow for a mix of games to pick from and some sort of way to pick up from where you left off if you didn't finish the game.

For this project I made my wireframe via HTML and jumped right into the backend to get my ajax requests setup so I could start my game logic. After my api was setup and working correctly I went right into making all the buttons I needed and making certain ones show at set times during the game. After getting all buttons to show correctly I created the ajax get requests to fetch the game storyline to be displayed on screen.

Wireframe: https://www.lucidchart.com/invitations/accept/86efffd5-cb18-4cd3-a518-538f6ee36c55

User stories:
    As a user, I want to be able to save my choices as I play the game.
    As a user, I want to be able to view my previous games.
    As a user, I want to be able to change my password.
    As a user, I want to only see my own games.

the app: https://www.tinyurl.com/y8qofhzl

Installation: 
    1: clone my repo
    2: npm install
    3: grunt serve