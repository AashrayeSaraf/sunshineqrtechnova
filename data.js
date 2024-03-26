module.exports = {
    "config": {
        serverPort: 8080, // The port the server will run on
        devMode: false, // Whether to enable overviews of all paths and stages
        urlRoot: "http://localhost:80", // The root URL of the website, used for generating links (in overview mode only) Do NOT include a trailing slash for correct URL generation
        cookieSecret: "Cookie is delicious" // A secret string used to sign cookies. Change this to a random string for security
    },
    "paths": { // Every path must follow the format of the example below
        "1": { // path 3, accessible via /path/3/{stage}?code=blahblah
            "1": { // stage 1
                gameType: "text",
                code: "r8pnj4",
                config: {
                    successMessage: "I am taken from a mine, and shut up in a wooden case,\nfrom which I am never released, and yet I am used by almost every artist. What am I?",
                }
            },
            "4": { // stage 1
                gameType: "flappy",
                code: "4biwj5",
                config: {
                    successMessage: "Indian physicist who won the Nobel Prize in Physics in 1930 \nfor his groundbreaking work on the scattering of light. \nHe discovered that when light interacts with molecules, \nit can change its energy and wavelength. \nThis phenomenon, known as the 'Raman Effect'.",
                    pointsGoal: 7,
                    speedInterval: 20
                }
            },
            "3": {
                gameType: "num",
                code: "3eumtz",
                config: {
                    successMessage: 
                        "I am a place where the needy find light,\nEducational values shine bright.\nBooks are my treasure, knowledge my goal,\nIn my classes, young minds find their role.\n\nWhat am I?",
                }
            },
            "2": {
                gameType: "guess",
                code: "95xqn9",
                config: {
                    successMessage: "#include <string>\nusing namespace std;\nint main() {\nstring riddle = 'I'm hot and black, but not alive,\nYou'll sip me slow, in order to thrive.\nAt this place, burgers sizzle and pizzas bake,\nA cup of me, a burger, a slice, what do they make?';\nstring answer = 'cafe';\nstring guess;\ncout << 'Welcome to the Riddle Cafe!';\ncout << 'Here's a riddle for you:\n';\ncout << riddle << '\n';\ncout << 'Can you guess the place where people go out to hang on ?;\nwhile (true) {\ncout << 'Enter your guess: ';\ngetline(cin, guess);\nfor (char &c : guess) {\nc = tolower(c);\n}\nif (guess == answer) {\ncout << 'Congratulations! You guessed it right. Welcome to the cafe!';\nbreak;\n} else {\ncout << 'Sorry, that's not correct. Try again!';\n}\n}\nreturn 0;",
                }
            },
            "5": {
                gameType: "jumble", // Jumble requires successURL, not successMessage
                code: "24oo1e",
                config: {
                    successURL: "/path/1/6?code=xwxmcr"
                }
            },
            "6": {
                gameType: "pic",
                code: "xwxmcr",
                config: {} // Pic requires no additional configuration, but it is still required
            }
        },
        "2": { // path 3, accessible via /path/3/{stage}?code=blahblah
            "1": {
                gameType: "text",
                code: "b916yir",
                config: {
                    successMessage: "I'm a point in where where people hangout!!! \nNavigating the cosmos with grace, \nMy acronym's known, across the globe it's shown, \nTell me, friend, where am I known?",
                }
            },
            "3": { // stage 1
                gameType: "flappy",
                code: "pnacv3",
                config: {
                    successMessage: " #include <iostream> \nint main() { \nint forged = 0; \nbool machine= false; \nbool mould= true; \nbool casting = false; \nbool strong = true; \nbool tough = true; \nif (forged && !machine&& mould && !casting && strong && tough) { \nstd::cout << 'You've found the answer!' << std::endl; \n} else { \nstd::cout << 'Keep searching!' << std::endl; \n} \nreturn forged;\n}",
                    pointsGoal: 7,
                    speedInterval: 20
                }
            },
            "2": {
                gameType: "num",
                code: "xx2crwi",
                config: {
                    successMessage:
                        "#include <iostream> \nusing namespace std; \nint main() { \nchar routeDelta; \ncout << Welcome to the riddle challenge!'; \ncout << 'Where discipline blooms and courage is found in front of audi'; \nIf(routeDelta) \ncout << 'In this field flag hosted ' \nelse \ncout << 'In the NCC's domain, rising higher?'; \nreturn 0; \n}",
                }
            },
            "4": {
                gameType: "guess",
                code: "b7pep92",
                config: {
                    successMessage: "#include <iostream> \nint main() { \n int numScoops = 3; \nbool routeAlpha= true; \nstd::cout << 'Welcome to the ice cream area!' << std::endl; \nstd::cout << 'Number of scoops: ' << numScoops << std::endl; \nif (routeAlpha) { \nstd::cout << 'Enjoy your ice cream with toppings!' << std::endl; \n} else { \nstd::cout << 'Enjoy your ice cream!'; << std::endl; \n} \nreturn 0; \n}",
                }
            },
            "5": {
                gameType: "jumble", // Jumble requires successURL, not successMessage
                code: "3fbkkg",
                config: {
                    successURL: "/path/2/6?code=x8jnwm"
                }
            },
            "6": {
                gameType: "pic",
                code: "x8jnwm",
                config: {} // Pic requires no additional configuration, but it is still required
            }
        },
        "3": { // path 3, accessible via /path/3/{stage}?code=blahblah
            "1": {
                gameType: "text",
                code: "v6d87f",
                config: {
                    successMessage: "On the stage, we stand tall and proud,\nUniforms crisp, voices loud.\nMarching in sync, our spirit ablaze,\nIn unity, we honor our nation's praise.",
                }
            },
            "2": { // stage 1
                gameType: "flappy",
                code: "pfpkgy",
                config: {
                    successMessage: "Your riddle is \n Behind the Audi, where artists prepare, \n A haven for creativity, beyond compare. \n At DCRUST's heart, where performances resound, \n This exclusive spot can be found.",
                    pointsGoal: 7,
                    speedInterval: 20
                }
            },
            "3": {
                gameType: "num",
                code: "5t772i",
                config: {
                    successMessage:
                        "Congratulations! You guessed the number. Here is your riddle:\nWhere hunger strikes, and friendships bloom,\nA spot to dine, in the university's room.\nAt DCRUST's heart, where flavors are renowned,\nThis canteen oasis can be found.",
                }
            },
            "4": {
                gameType: "guess",
                code: "hqyr32",
                config: {
                    successMessage: "He was born on February 15, 1881, \nin the village of Beri in present-day Haryana, India. \nHe was a strong advocate for the rights of farmers, laborers, and the lower castes. \n\nGuess who I am and where I am situated???",
                }
            },
            "5": {
                gameType: "jumble", // Jumble requires successURL, not successMessage
                code: "rlncix",
                config: {
                    successURL: "/path/3/6?code=7dx4y7"
                }
            },
            "6": {
                gameType: "pic",
                code: "7dx4y7",
                config: {} // Pic requires no additional configuration, but it is still required
            }
        },
        "4": { // path 3, accessible via /path/3/{stage}?code=blahblah
            "1": {
                gameType: "text",
                code: "5mb1nm",
                config: {
                    successMessage: "Where bytes and circuits meet in stride, A bridge of knowledge, connections abide. \nFrom its height, departments all in sight, Scan the code here, your next clue's light. \nAbove the bustling campus, where minds take flight, Your next destination comes into sight.",
                }
            },
            "3": { // stage 1
                gameType: "flappy",
                code: "a59ldj",
                config: {
                    successMessage: "Where science's secrets begin to unfold, In a block where wonders are controlled. \nBiomedical marvels and chemicals bold, Scan the code here, your next clue, behold. \nIn this realm of discovery, your next path foretold. Where innovation sparks, and minds are enrolled.",
                    pointsGoal: 7,
                    speedInterval: 20
                }
            },
            "4": {
                gameType: "num",
                code: "x6ihi6",
                config: {
                    successMessage:
                        "#include <iostream> \nusing namespace std; \nint main() { \nchar routeDelta; \ncout << 'Welcome to the riddle challenge!'; \ncout << 'Where discipline blooms and courage is found in front of audi'; \nIf(routeDelta==0) \ncout << 'In this field flag hosted .'; \nelse \ncout << 'In the NCC's domain, rising higher?'; \nreturn 0; \n}",
                }
            },
            "2": {
                gameType: "guess",
                code: "20nodm",
                config: {
                    successMessage: "#include <iostream> \nvoid buyFood(const std::string& food) { \nstd::cout << 'You have purchased ' << food << '. Enjoy your meal!' << std::endl; \n} \nvoid displayMenu() { \nstd::cout << 'Welcome to our shop!' << std::endl; \nstd::cout << '1. Pizza\n2. Burger\n3. Salad\n4. Exit'<< std::endl; \n} \nint main() { \nint choice; \ndo {  \ndisplayMenu(); \nstd::cout << 'Enter your choice: '; \nstd::cin >> choice; \nswitch(choice) { \ncase 1: \nbuyFood('Pizza'); \nbreak; \ncase 2: \nbuyFood('Burger'); \nbreak; \ncase 3: \nbuyFood('Salad'); \nbreak; \ncase 4: \nstd::cout << 'Existing beside auditorium shop. Have a good day!' << std::endl; \nbreak; \ndefault: \nstd::cout << 'Invalid choice. Please try again.' << std::endl; \n} \n} while (choice != 4); \nreturn 0; \n}",
                }
            },
            "5": {
                gameType: "jumble", // Jumble requires successURL, not successMessage
                code: "wd1t6v",
                config: {
                    successURL: "/path/4/6?code=8rlcbc"
                }
            },
            "6": {
                gameType: "pic",
                code: "8rlcbc",
                config: {} // Pic requires no additional configuration, but it is still required
            }
        },
        "5": { // path 3, accessible via /path/3/{stage}?code=blahblah
            "1": {
                gameType: "text",
                code: "0r9v6v",
                config: {
                    successMessage: "Near where laughter and chatter intertwine, Opposite the girls' abode, \nyou'll find a sign. A haven for flavors, savory and fine, Scan the code here, \nyour next clue to align.",
                }
            },
            "4": { // stage 1
                gameType: "flappy",
                code: "r43492",
                config: {
                    successMessage: "Where gears and wrenches align with force, In the heart of learning's resource.\nFor all in first year, it's a mandatory course, Scan the code here,\nyour next clue's source. Beside the old helicopter, grounded, of course.",
                    pointsGoal: 7,
                    speedInterval: 20
                }
            },
            "2": {
                gameType: "num",
                code: "683w9l",
                config: {
                    successMessage:
                        "#include <iostream> \nusing namespace std; \nint main() \n{ \ncout<<'Midst the hustle of the day's delight, Where minds cups unite. Till evening's fall, it's a beacon bright, \nScan the code here, your next clue in sight. Here, conversations take flight, And Maggie adds to the delight. \nBut remember, each taste is a claim, For here, Maggie never tastes the same.'; \nreturn 0; \n}",
                }
            },
            "3": {
                gameType: "guess",
                code: "k4fztv",
                config: {
                    successMessage: "Sure thing! Here's the updated riddle:\n\n'Where the field stretches far and wide,\nWith open events, it's the pride.\nScan the code where many abide,\nYour next clue within will coincide.\nIn this expanse, adventure's guide.'\n\nDoes that fit what you had in mind?",
                }
            },
            "5": {
                gameType: "jumble", // Jumble requires successURL, not successMessage
                code: "njcpdl",
                config: {
                    successURL: "/path/5/6?code=ybne3e"
                }
            },
            "6": {
                gameType: "pic",
                code: "ybne3e",
                config: {} // Pic requires no additional configuration, but it is still required
            }
        }
    },
    // Switches are a URL that links to different pages depending on the path
    // The path is determined by the user's completion history. Therefore, the switch must not be placed first
    "switches": { // Every switch must follow the format of the example below
        "1": { // switch 1, accessible via /switch/1?code=blahblah
            "routes": {
                "1": "2",
                "3": "3", // people in path 3 will be redirected to stage 4 of path 3

            },
            "code": "rle9xu"
        },
        "2": { // switch 1, accessible via /switch/1?code=blahblah
            "routes": {
                "1": "3",
                "2": "2", 
            },
            "code": "31oh0n"
        },
        "3": { // switch 1, accessible via /switch/1?code=blahblah
            "routes": {
                "2": "3",
                "3": "2",
                "5": "4",
            },
            "code": "k6og0n"
        },
        "4": { // switch 1, accessible via /switch/1?code=blahblah
            "routes": {
                "2": "4",
                "5": "5",
            },
            "code": "jhumzi"
        },

    }
}

// Code generation code
function generateCode() {
    let code = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}
