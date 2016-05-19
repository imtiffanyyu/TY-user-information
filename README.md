# HW: User Information App - AJAX Server

User Information App - AJAX Server


Starting with your previous website, create a new branch to preserve the old site.
Your site has a form on it that acts like a search bar. When someone types into the search bar, it should retrieve a list of matching users and list them by name on the same page, similar to how the search bars on airbnb.com or hipmunk.com function.

Once the user submits the search bar, it should exhibit the same behavior as the previous assignment, i.e. display a new page with the search results.

Hints:

use https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf (Links to an external site.)
you cannot send or render a response more than once per request.
you must find a way to capture whenever the user's input changes in the search bar. This will trigger your Ajax request to your server.

Part 1: Autocomplete
Modify your form so that every time the user enters a key, it makes an AJAX call that populates the search results.
Do this work in a git branch called "autocomplete". Then, merge this branch into master with a pull request.

Part 2: Bandwidth optimization
Modify your form again so that AJAX requests happen at most once every 300 milliseconds.
Do this work in a git branch called "bandwidth-optimization". Then, merge this branch into master with a pull request.

Hints:

Use https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now (Links to an external site.) (Links to an external site.)
Test it by opening the Network tab in Chrome's Developer Tools by checking that fewer requests are going off.
