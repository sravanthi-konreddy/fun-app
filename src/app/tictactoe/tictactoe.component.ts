import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css'],
})
export class TictactoeComponent implements OnInit {
  xIsNext: boolean = true;
  xMoves: string[];
  oMoves: string[];
  winLines: string[][];
  xIsWinner: boolean;
  oIsWinner: boolean;
  mainbutton: string[];
  clickCount: number;
  isbot: boolean;
  totalMoves: string[];
  randCount: number;
  gameOver: boolean;
  disableClick: any;
  disableTypeClick: boolean;
  constructor() {}

  ngOnInit() {
    this.disableClick = {
      b0: false,
      b1: false,
      b2: false,
      b3: false,
      b4: false,
      b5: false,
      b6: false,
      b7: false,
      b8: false,
      b9: false,
    };
    this.disableTypeClick = false;
    this.xIsNext = true;
    this.xMoves = [];
    this.oMoves = [];
    this.winLines = [
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      ['0', '4', '8'],
      ['2', '4', '6'],
    ];
    this.xIsWinner = false;
    this.oIsWinner = false;
    this.mainbutton = ['b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'];
    this.clickCount = 0;
    this.isbot = false;
    this.totalMoves = [];
    this.randCount = 8;
    this.gameOver = false;
  }

  resetGame() {
    //   var xIsNext = true;
    //   xMoves = [];
    //   oMoves = [];
    //   xIsWinner = false;
    //   oIsWinner = false;
    //   mainbutton = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"];
    //   clickCount = 0;
    //   isbot = false;
    //   totalMoves = [];
    //   randCount = 8;
    //   gameOver = false;
    //   for (let i = 0; i < mainbutton.length; i++) {
    //     element = document.getElementById(mainbutton[i]);

    //     element.innerHTML = "";

    //     element.removeAttribute("style");
    //     console.log(element);
    //     element.setAttribute("onclick", "handleClick(element)");
    //   }
    //   document.getElementById("won").innerHTML = "";
    location.reload();
  }

  manageBot(val: any) {
    this.disableTypeClick = true;
    if (val.id === 'bot') {
      this.isbot = true;
    }
    val.style.backgroundColor = 'green';
  }

  getBotMoves() {
    if (
      this.oMoves.includes('0') &&
      this.oMoves.includes('1') &&
      !this.oMoves.includes('2') &&
      !this.xMoves.includes('2')
    ) {
      this.handleClick(document.getElementById('b2'));
    } else if (
      this.oMoves.includes('0') &&
      !this.oMoves.includes('1') &&
      this.oMoves.includes('2') &&
      !this.xMoves.includes('1')
    ) {
      this.handleClick(document.getElementById('b1'));
    } else if (
      !this.oMoves.includes('0') &&
      this.oMoves.includes('1') &&
      this.oMoves.includes('2') &&
      !this.xMoves.includes('0')
    ) {
      this.handleClick(document.getElementById('b0'));
    } else if (
      this.oMoves.includes('3') &&
      this.oMoves.includes('4') &&
      !this.oMoves.includes('5') &&
      !this.xMoves.includes('5')
    ) {
      this.handleClick(document.getElementById('b5'));
    } else if (
      this.oMoves.includes('3') &&
      !this.oMoves.includes('4') &&
      this.oMoves.includes('5') &&
      !this.xMoves.includes('4')
    ) {
      this.handleClick(document.getElementById('b4'));
    } else if (
      !this.oMoves.includes('3') &&
      this.oMoves.includes('4') &&
      this.oMoves.includes('5') &&
      !this.xMoves.includes('3')
    ) {
      this.handleClick(document.getElementById('b3'));
    } else if (
      this.oMoves.includes('6') &&
      this.oMoves.includes('7') &&
      !this.oMoves.includes('8') &&
      !this.xMoves.includes('8')
    ) {
      this.handleClick(document.getElementById('b8'));
    } else if (
      this.oMoves.includes('6') &&
      !this.oMoves.includes('7') &&
      this.oMoves.includes('8') &&
      !this.xMoves.includes('7')
    ) {
      this.handleClick(document.getElementById('b7'));
    } else if (
      !this.oMoves.includes('6') &&
      this.oMoves.includes('7') &&
      this.oMoves.includes('8') &&
      !this.xMoves.includes('6')
    ) {
      this.handleClick(document.getElementById('b6'));
    } else if (
      this.oMoves.includes('0') &&
      this.oMoves.includes('3') &&
      !this.oMoves.includes('6') &&
      !this.xMoves.includes('6')
    ) {
      this.handleClick(document.getElementById('b6'));
    } else if (
      this.oMoves.includes('0') &&
      !this.oMoves.includes('3') &&
      this.oMoves.includes('6') &&
      !this.xMoves.includes('3')
    ) {
      this.handleClick(document.getElementById('b3'));
    } else if (
      !this.oMoves.includes('0') &&
      this.oMoves.includes('3') &&
      this.oMoves.includes('6') &&
      !this.xMoves.includes('0')
    ) {
      this.handleClick(document.getElementById('b0'));
    } else if (
      this.oMoves.includes('1') &&
      this.oMoves.includes('4') &&
      !this.oMoves.includes('7') &&
      !this.xMoves.includes('7')
    ) {
      this.handleClick(document.getElementById('b7'));
    } else if (
      this.oMoves.includes('1') &&
      !this.oMoves.includes('4') &&
      this.oMoves.includes('7') &&
      !this.xMoves.includes('4')
    ) {
      this.handleClick(document.getElementById('b4'));
    } else if (
      !this.oMoves.includes('1') &&
      this.oMoves.includes('4') &&
      this.oMoves.includes('7') &&
      !this.xMoves.includes('1')
    ) {
      this.handleClick(document.getElementById('b1'));
    } else if (
      this.oMoves.includes('2') &&
      this.oMoves.includes('5') &&
      !this.oMoves.includes('8') &&
      !this.xMoves.includes('8')
    ) {
      this.handleClick(document.getElementById('b8'));
    } else if (
      this.oMoves.includes('2') &&
      !this.oMoves.includes('5') &&
      this.oMoves.includes('8') &&
      !this.xMoves.includes('5')
    ) {
      this.handleClick(document.getElementById('b5'));
    } else if (
      !this.oMoves.includes('2') &&
      this.oMoves.includes('5') &&
      this.oMoves.includes('8') &&
      !this.xMoves.includes('2')
    ) {
      this.handleClick(document.getElementById('b2'));
    } else if (
      this.oMoves.includes('0') &&
      this.oMoves.includes('4') &&
      !this.oMoves.includes('8') &&
      !this.xMoves.includes('8')
    ) {
      this.handleClick(document.getElementById('b8'));
    } else if (
      this.oMoves.includes('0') &&
      !this.oMoves.includes('4') &&
      this.oMoves.includes('8') &&
      !this.xMoves.includes('4')
    ) {
      this.handleClick(document.getElementById('b4'));
    } else if (
      !this.oMoves.includes('0') &&
      this.oMoves.includes('4') &&
      this.oMoves.includes('8') &&
      !this.xMoves.includes('0')
    ) {
      this.handleClick(document.getElementById('b0'));
    } else if (
      this.oMoves.includes('2') &&
      this.oMoves.includes('4') &&
      !this.oMoves.includes('6') &&
      !this.xMoves.includes('6')
    ) {
      this.handleClick(document.getElementById('b6'));
    } else if (
      this.oMoves.includes('2') &&
      !this.oMoves.includes('4') &&
      this.oMoves.includes('6') &&
      !this.xMoves.includes('4')
    ) {
      this.handleClick(document.getElementById('b4'));
    } else if (
      !this.oMoves.includes('2') &&
      this.oMoves.includes('4') &&
      this.oMoves.includes('6') &&
      !this.xMoves.includes('2')
    ) {
      this.handleClick(document.getElementById('b2'));
    } else if (
      this.xMoves.includes('0') &&
      this.xMoves.includes('1') &&
      !this.xMoves.includes('2') &&
      !this.oMoves.includes('2')
    ) {
      this.handleClick(document.getElementById('b2'));
    } else if (
      this.xMoves.includes('0') &&
      !this.xMoves.includes('1') &&
      this.xMoves.includes('2') &&
      !this.oMoves.includes('1')
    ) {
      this.handleClick(document.getElementById('b1'));
    } else if (
      !this.xMoves.includes('0') &&
      this.xMoves.includes('1') &&
      this.xMoves.includes('2') &&
      !this.oMoves.includes('0')
    ) {
      this.handleClick(document.getElementById('b0'));
    } else if (
      this.xMoves.includes('3') &&
      this.xMoves.includes('4') &&
      !this.xMoves.includes('5') &&
      !this.oMoves.includes('5')
    ) {
      this.handleClick(document.getElementById('b5'));
    } else if (
      this.xMoves.includes('3') &&
      !this.xMoves.includes('4') &&
      this.xMoves.includes('5') &&
      !this.oMoves.includes('4')
    ) {
      this.handleClick(document.getElementById('b4'));
    } else if (
      !this.xMoves.includes('3') &&
      this.xMoves.includes('4') &&
      this.xMoves.includes('5') &&
      !this.oMoves.includes('3')
    ) {
      this.handleClick(document.getElementById('b3'));
    } else if (
      this.xMoves.includes('6') &&
      this.xMoves.includes('7') &&
      !this.xMoves.includes('8') &&
      !this.oMoves.includes('8')
    ) {
      this.handleClick(document.getElementById('b8'));
    } else if (
      this.xMoves.includes('6') &&
      !this.xMoves.includes('7') &&
      this.xMoves.includes('8') &&
      !this.oMoves.includes('7')
    ) {
      this.handleClick(document.getElementById('b7'));
    } else if (
      !this.xMoves.includes('6') &&
      this.xMoves.includes('7') &&
      this.xMoves.includes('8') &&
      !this.oMoves.includes('6')
    ) {
      this.handleClick(document.getElementById('b6'));
    } else if (
      this.xMoves.includes('0') &&
      this.xMoves.includes('3') &&
      !this.xMoves.includes('6') &&
      !this.oMoves.includes('6')
    ) {
      this.handleClick(document.getElementById('b6'));
    } else if (
      this.xMoves.includes('0') &&
      !this.xMoves.includes('3') &&
      this.xMoves.includes('6') &&
      !this.oMoves.includes('3')
    ) {
      this.handleClick(document.getElementById('b3'));
    } else if (
      !this.xMoves.includes('0') &&
      this.xMoves.includes('3') &&
      this.xMoves.includes('6') &&
      !this.oMoves.includes('0')
    ) {
      this.handleClick(document.getElementById('b0'));
    } else if (
      this.xMoves.includes('1') &&
      this.xMoves.includes('4') &&
      !this.xMoves.includes('7') &&
      !this.oMoves.includes('7')
    ) {
      this.handleClick(document.getElementById('b7'));
    } else if (
      this.xMoves.includes('1') &&
      !this.xMoves.includes('4') &&
      this.xMoves.includes('7') &&
      !this.oMoves.includes('4')
    ) {
      this.handleClick(document.getElementById('b4'));
    } else if (
      !this.xMoves.includes('1') &&
      this.xMoves.includes('4') &&
      this.xMoves.includes('7') &&
      !this.oMoves.includes('1')
    ) {
      this.handleClick(document.getElementById('b1'));
    } else if (
      this.xMoves.includes('2') &&
      this.xMoves.includes('5') &&
      !this.xMoves.includes('8') &&
      !this.oMoves.includes('8')
    ) {
      this.handleClick(document.getElementById('b8'));
    } else if (
      this.xMoves.includes('2') &&
      !this.xMoves.includes('5') &&
      this.xMoves.includes('8') &&
      !this.oMoves.includes('5')
    ) {
      this.handleClick(document.getElementById('b5'));
    } else if (
      !this.xMoves.includes('2') &&
      this.xMoves.includes('5') &&
      this.xMoves.includes('8') &&
      !this.oMoves.includes('2')
    ) {
      this.handleClick(document.getElementById('b2'));
    } else if (
      this.xMoves.includes('0') &&
      this.xMoves.includes('4') &&
      !this.xMoves.includes('8') &&
      !this.oMoves.includes('8')
    ) {
      this.handleClick(document.getElementById('b8'));
    } else if (
      this.xMoves.includes('0') &&
      !this.xMoves.includes('4') &&
      this.xMoves.includes('8') &&
      !this.oMoves.includes('4')
    ) {
      this.handleClick(document.getElementById('b4'));
    } else if (
      !this.xMoves.includes('0') &&
      this.xMoves.includes('4') &&
      this.xMoves.includes('8') &&
      !this.oMoves.includes('0')
    ) {
      this.handleClick(document.getElementById('b0'));
    } else if (
      this.xMoves.includes('2') &&
      this.xMoves.includes('4') &&
      !this.xMoves.includes('6') &&
      !this.oMoves.includes('6')
    ) {
      this.handleClick(document.getElementById('b6'));
    } else if (
      this.xMoves.includes('2') &&
      !this.xMoves.includes('4') &&
      this.xMoves.includes('6') &&
      !this.oMoves.includes('4')
    ) {
      this.handleClick(document.getElementById('b4'));
    } else if (
      !this.xMoves.includes('2') &&
      this.xMoves.includes('4') &&
      this.xMoves.includes('6') &&
      !this.oMoves.includes('2')
    ) {
      this.handleClick(document.getElementById('b2'));
    } else {
      // console.log('in else........................');
      var randValue = Math.floor(Math.random() * this.randCount);
      let i = 1;
      let j = 0;
      while (i <= 9 && j <= randValue) {
        // while(i<9 ){
        if (this.totalMoves.includes(this.mainbutton[i])) {
          i++;
        } else {
          this.mainbutton[i];
          i++;
          j++;
        }
      }
      if (j > randValue) {
        this.handleClick(document.getElementById(this.mainbutton[i - 1]));
      }
    }
  }

  handleClick(i) {
    //console.log('in handel click::::::');
    //console.log(i);
    this.clickCount++;
    this.randCount--;
    // console.log('************');
    // // console.log(this.xIsNext);
    // console.log(i.id + 'xisnext:' + this.xIsNext);
    // console.log('******************');
    document.getElementById(i.id).innerHTML = this.xIsNext ? 'X' : 'O';
    //this.disableClick[i.id] = true;

    this.totalMoves.push(i.id);

    if (this.xIsNext) {
      this.xMoves.push(i.value);
    } else {
      this.oMoves.push(i.value);
    }
    this.calculateWinner();
    this.xIsNext = !this.xIsNext;

    if (this.xIsWinner) {
      for (let i = 0; i < this.mainbutton.length; i++) {
        this.disableClick[this.mainbutton[i]] = true;
      }
      document.getElementById('won').innerHTML = 'WINNER: X';
      document.getElementById('won').style.color = 'yellow';
      this.gameOver = true;
    } else if (this.oIsWinner) {
      for (let i = 0; i < this.mainbutton.length; i++) {
        this.disableClick[this.mainbutton[i]] = true;
      }
      document.getElementById('won').innerHTML = 'WINNER: O';
      document.getElementById('won').style.color = 'cyan';
      this.gameOver = true;
    }

    document.getElementById(i.id).style.backgroundColor = this.xIsNext
      ? 'cyan'
      : 'yellow';

    if (this.clickCount === 9 && !this.xIsWinner && !this.oIsWinner) {
      document.getElementById('won').innerHTML = 'DRAW MATCH';
      document.getElementById('won').style.color = '#ffffff';
    }
    if (
      this.isbot &&
      !this.xIsNext &&
      this.clickCount !== 9 &&
      !this.gameOver
    ) {
      setTimeout(() => {
        this.getBotMoves();
      }, 100);
    }
  }

  calculateWinner() {
    for (let i = 0; i < this.winLines.length; i++) {
      var [a, b, c] = this.winLines[i];
      if (this.xIsNext) {
        if (
          this.xMoves.includes(a) &&
          this.xMoves.includes(b) &&
          this.xMoves.includes(c)
        ) {
          this.xIsWinner = true;
          break;
        }
      } else {
        if (
          this.oMoves.includes(a) &&
          this.oMoves.includes(b) &&
          this.oMoves.includes(c)
        ) {
          this.oIsWinner = true;
          break;
        }
      }
    }
  }
}
