# Beep boop

beep boop website, 12/8/2017

**By Natalia Telpukhova**

https://telpuhova.github.io/beep-boop/

## Description

Web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the few exceptions.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| counting up to the provided number | 3 | [0, 1, 2, 3] |
| returning "boop" instead of 1 | 3 | [0, "boop", 2, 3] |
| returning "beep" instead of 0 | 3 | ["beep", "boop", 2, 3] |
| returning "I'm sorry, Dave. I'm afraid I can't do that." instead of 3 | 3 | ["boop", "beep", 2, "I'm sorry, Dave. I'm afraid I can't do that."] |
| returning "boop" instead of numbers that contain a 1 | 11 | ["boop", "beep", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, "boop", "boop"] |
| returning "beep" instead of numbers that contain a 0 | 20 | ["boop", "beep", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, "boop", "boop", "boop", "boop", "boop", "boop", "boop", "boop", "boop", "boop", "beep"] |
| returning "I'm sorry, Dave. I'm afraid I can't do that." instead of numbers divisible by 3 | 10 | ["beep", "boop", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, "I'm sorry, Dave. I'm afraid I can't do that.", 7, 8, "I'm sorry, Dave. I'm afraid I can't do that.", "boop"] |


## Setup

* clone repository
* open index.html in browser

## Technologies Used

HTML, CSS, JS, Bootstrap, jquery

Copyright (c) 2017 Natalia Telpukhova
