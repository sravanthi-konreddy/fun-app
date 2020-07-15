import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nqueens',
  templateUrl: './nqueens.component.html',
  styleUrls: ['./nqueens.component.css'],
})
export class NqueensComponent implements OnInit {
  queensCount: number;
  queensArr: any;
  visitedRows: any;
  invalidCell: boolean;
  reachedMax: boolean;
  flag: boolean;
  disableClick: boolean;

  constructor() {}

  ngOnInit() {
    this.queensCount = 0;
    this.queensArr = new Array(this.queensCount);
    this.visitedRows = new Array(this.queensCount);
    for (let i = 0; i < this.queensCount; i++) {
      this.queensArr[i] = new Array(this.queensCount);
      this.visitedRows[i] = 0;
    }

    this.invalidCell = false;
    this.reachedMax = false;

    this.flag = false;
    this.disableClick = false;
  }

  resetDiv() {
    var sel = ((<HTMLInputElement>(
      document.getElementById('queensCount')
    )).value = '');
    var div = document.getElementById('queensBoard');
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  }

  initializeValues(queens) {
    var div = document.getElementById('queensBoard');
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }

    this.queensCount = queens;
    this.queensArr = new Array(this.queensCount);
    this.visitedRows = new Array(this.queensCount);
    for (let i = 0; i < this.queensCount; i++) {
      this.queensArr[i] = new Array(this.queensCount);
      this.visitedRows[i] = 0;
    }

    this.invalidCell = false;
    this.reachedMax = false;

    this.flag = false;
  }

  assignQueenCount() {
    this.initializeValues(
      (<HTMLInputElement>document.getElementById('queensCount')).value
    );

    this.solvenQueens();
    this.checkValues();
    this.displayOnBoard();
  }

  solvenQueens() {
    for (let i = 0; i < this.queensCount; i++) {
      this.flag = false;

      for (let j = 0; j < this.queensCount; j++) {
        this.invalidCell = false;
        if (this.visitedRows[i] === 0) {
          for (let k = 0; k < i; k++) {
            if (this.queensArr[k][j] == 1) {
              this.invalidCell = true;
              break;
            }
          }
          if (this.invalidCell === false) {
            for (
              let l = j + 1, m = i - 1;
              l < this.queensCount && m >= 0;
              l++, m--
            ) {
              if (this.queensArr[m][l] == 1) {
                this.invalidCell = true;
                break;
              }
            }
          }

          if (this.invalidCell === false) {
            for (let l = j - 1, m = i - 1; m >= 0 && l >= 0; l--, m--) {
              if (this.queensArr[m][l] == 1) {
                this.invalidCell = true;
                break;
              }
            }
          }

          if (this.invalidCell === false) {
            this.queensArr[i][j] = 1;

            this.visitedRows[i] = 1;
            break;
          }

          if (this.invalidCell === true && j === this.queensCount - 1) {
            i--;
            i--;
            break;
          }
        } else if (this.visitedRows[i] === 1) {
          this.visitedRows[i] = 0;
          for (let te = 0; te < this.queensCount; te++) {
            if (this.queensArr[i][te] === 1) {
              this.queensArr[i][te] = 0;

              j = te;
              if (j === this.queensCount - 1) {
                this.flag = true;
              }
              break;
            }
          }
        }
        if (this.flag === true) {
          i = i - 2;
          break;
        }
      }
    }

    return;
  }

  checkValues() {
    for (let i = 0; i < this.queensCount; i++) {
      for (let j = 0; j < this.queensCount; j++) {
        if (this.queensArr[i][j] !== 1) {
          this.queensArr[i][j] = 0;
        }
      }
    }
  }

  displayOnBoard() {
    for (let i = 0; i < this.queensCount; i++) {
      var rowDiv = document.createElement('div');
      // var rowDiv = document.createElement('button');
      rowDiv.setAttribute('id', 'row-for-buttons');
      rowDiv.setAttribute('class', 'container');
      //rowDiv.setAttribute('style', 'width:100%');
      rowDiv.setAttribute('fxLayout', 'row inline');
      rowDiv.style.display = 'inline-flex';
      rowDiv.style.flexDirection = 'row';
      //fxLayout="row wrap"
      //rowDiv.setAttribute('fxLayout', 'row');
      for (let j = 0; j < this.queensCount; j++) {
        var rowDiv1 = document.createElement('div');
        var colDiv = document.createElement('button');
        colDiv.setAttribute('id', 'queen-board-button');
        colDiv.setAttribute('class', 'btn btn-light');
        //colDiv.setAttribute('fxFlex', '');
        //colDiv.setAttribute('fxLayout', 'row');

        colDiv.style.backgroundColor = 'cyan';
        if (this.queensArr[i][j] === 1) {
          colDiv.innerHTML = '&#9819;';
        } else {
          colDiv.innerHTML = '&#xf059;&nbsp;';
          colDiv.style.color = 'black';
        }
        //colDiv.innerHTML="&#9813";
        //colDiv.innerHTML=+queensArr[i][j]
        rowDiv1.appendChild(colDiv);
        //if (j === this.queensCount - 1)
        rowDiv.appendChild(rowDiv1);
        document.getElementById('queensBoard').append(rowDiv);
      }
    }
  }
}
