# _Beep boop_

#### _beep boop website, 12/8/2017_

#### By _**telpuhova**_

## Description

_Web application that takes a number from a user and returns a range of numbers from 0 to the chosen number with the few exceptions._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| counting up to the provided number | 3 | [0, 1, 2, 3] |
| returning "boop" instead of 1 | 3 | [0, "boop", 2, 3] |
| returning "beep" instead of 0 | 3 | ["beep", "boop", 2, 3] |
| returning "I'm sorry, Dave. I'm afraid I can't do that." instead of 3 | 3 | ["boop", "beep", 2, "I'm sorry, Dave. I'm afraid I can't do that."] |
| returning "boop" instead of numbers that contain a 1 | 11 | ["boop", "beep", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, "boop", "boop"] |
| returning "beep" instead of numbers that contain a 0 | 11 | ["boop", "beep", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, "boopbeep", "boop"] |
| returning "I'm sorry, Dave. I'm afraid I can't do that." instead of numbers that contain a 3 | 13 | ["boop", "beep", 2, "I'm sorry, Dave. I'm afraid I can't do that.", 4, 5, 6, 7, 8, 9, "boopbeep", "boop", "boop", "I'm sorry, Dave. I'm afraid I can't do that."] |


## Setup

* _clone repository_
* _open index.html in browser_

## Technologies Used

_HTML, CSS, JS, Bootstrap, jquery_

Copyright (c) 2017 **_telpuhova_**
