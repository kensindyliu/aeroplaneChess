# aeroplaneChess
- This is a simple game between a human and a computer player.
### start a new game
 - Reflesh the web to start/restart a new game.
### How to paly
- By clicking the 'Roll dice' button at the bottom center, roll the dice.
- The computer player will automatically roll the dice with every click and display the dice number under 'Computer Dice'.
- The first '6' rolled on the dice will allow the plane to depart but not move yet.
- After the first '6', every dice number indicates the number of steps to move.
- The winner is the first player to move over 60 steps in total.

### sharing code snippets:
I add 60 divs in js instead of type it in html:
```javascript
    > // Create cells for the game board
    for (let i = 0; i < 60; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.id = `cell${i}`;
      cell.innerText = i + 1;
    > //set the color for every cell
      if (i % 4 == 1) {
        cell.classList.add("airport1");
      } else if (i % 4 == 2) {
        cell.classList.add("airport2");
      } else {
        cell.classList.add("airportNone");
      }
      board.appendChild(cell);
    }
...

### Core
This is a very basic Js practice.

### References
- [JavaScript cookbook](https://www.oreilly.com/library/view/javascript-cookbook-3rd/9781492055747/)
- [JavaScript: the new toys](https://www.wiley.com/en-us/JavaScript:+The+New+Toys-p-9781119367963)
- [Professional JavaScript for web developers](https://www.wiley.com/en-us/Professional+JavaScript+for+Web+Developers%2C+4th+Edition-p-9781119366447)