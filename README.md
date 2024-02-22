# Project 1
## Create a number guessing game with a simple interface
Game goal: Guess a number between 1 and 100 in as few attempts as possible.
_This will require you to populate the HTML with the necessary elements for the front-end user experience, and implement the JavaScript logic._
## Interface && Game Play
-   H1 / H2 / P: Interface should include a title for the game and directions for what to do / expect
-   BUTTON: Use the provided form INPUT element paired with a button to get a number from the user; this is the user’s GUESS (Yes, we could use a number type of input, but we want you to practice your validation skills. Please leave it as text.)
```js
<input type=“text” id=“inputGuess” name=“inputGuess” placeholder=“Make a guess”>
// To get the number entered by the user, you want the element’s **value**
// If Element.textContent gets the content of a P tag, then Element.value gets the content of an INPUT tag
```
-   BUTTON: Allow the game to be REPLAYed using a button
-   DIV: Create a space for messages to the user updating their progress (too high, too low, you guessed it); Tip: Number.isInteger()
-   If the number is not valid (not a number or out of range), display an appropriate error message
-   Display how many guesses have been made so far, and keep this value updated
-   When the number is correctly guessed, INPUT and GUESS button are disabled, and the only option is to REPLAY; Tip: you want to _disable_ the button and the input with an attribute (possible methods to modify HTML attributes are listed in Chapter 5). Anything given an attribute of “disabled” can then be styled in the CSS like so:
```
*:disabled {
    background-color: lightgray;
    color: #333333;
    opacity: 0.8;
    pointer-events: none;
}
```
Or, because we are using Materialize, you can look up how to not only _add_ fancy buttons, but _disable_ them using [https://materializecss.com/buttons.html](Materialize's built-in button classes).
## Expectations
-   Create your project individually. It is not a group assignment.
-   Use functions, good naming and syntax conventions, and comments as needed
-   If you look up code / techniques we have not introduced in class, it would be wise to explain in a comment what you are doing, why, and link to where you learned it
-   Create Project 1 in a local clone of your IU GitHub repository
-   Submit your work by commiting and syncing with your IU Github repository by the deadline
## Recommended Steps
1.  First make the number guessing game purely in the JavaScript (and the console) with no HTML elements at all. Use prompt() to take user inputs, and console.log() to output feedback. Make sure all the game logic works, including checking the validity of the user input and tracking the number of guesses.
2.  Next, add in the minimal number of HTML elements for an interactive game (e.g. input text fields, buttons).
    Integrate the HTML interface with your back-end JavaScript game.
3.  Finally, use CSS to create a usable interface, adding in additional elements and resources as needed.
4.  Remember, test often, test along the way, and test after you’re done! Edge cases might be non-numbers, non-integers and numbers that are not in range.
