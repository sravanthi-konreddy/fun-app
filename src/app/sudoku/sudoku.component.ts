import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css'],
})
export class SudokuComponent implements OnInit {
  inputArray: number[][];
  constructor() {}

  ngOnInit(): void {
    this.inputArray[0][0] = 0;
    this.inputArray[0][1] = 7;
    this.inputArray[0][2] = 5;
    this.inputArray[0][3] = 0;
    this.inputArray[0][4] = 2;
    this.inputArray[0][5] = 9;
    this.inputArray[0][6] = 0;
    this.inputArray[0][7] = 0;
    this.inputArray[0][8] = 6;
    this.inputArray[1][0] = 2;
    this.inputArray[1][1] = 0;
    this.inputArray[1][2] = 0;
    this.inputArray[1][3] = 8;
    this.inputArray[1][4] = 0;
    this.inputArray[1][5] = 0;
    this.inputArray[1][6] = 0;
    this.inputArray[1][7] = 0;
    this.inputArray[1][8] = 3;
    this.inputArray[2][0] = 0;
    this.inputArray[2][1] = 0;
    this.inputArray[2][2] = 0;
    this.inputArray[2][3] = 0;
    this.inputArray[2][4] = 0;
    this.inputArray[2][5] = 7;
    this.inputArray[2][6] = 0;
    this.inputArray[2][7] = 0;
    this.inputArray[2][8] = 2;
    this.inputArray[3][0] = 4;
    this.inputArray[3][1] = 0;
    this.inputArray[3][2] = 6;
    this.inputArray[3][3] = 0;
    this.inputArray[3][4] = 0;
    this.inputArray[3][5] = 1;
    this.inputArray[3][6] = 0;
    this.inputArray[3][7] = 3;
    this.inputArray[3][8] = 0;
    this.inputArray[4][0] = 1;
    this.inputArray[4][1] = 0;
    this.inputArray[4][2] = 0;
    this.inputArray[4][3] = 0;
    this.inputArray[4][4] = 9;
    this.inputArray[4][5] = 0;
    this.inputArray[4][6] = 0;
    this.inputArray[4][7] = 0;
    this.inputArray[4][8] = 5;
    this.inputArray[5][0] = 0;
    this.inputArray[5][1] = 5;
    this.inputArray[5][2] = 0;
    this.inputArray[5][3] = 4;
    this.inputArray[5][4] = 0;
    this.inputArray[5][5] = 0;
    this.inputArray[5][6] = 2;
    this.inputArray[5][7] = 0;
    this.inputArray[5][8] = 9;
    this.inputArray[6][0] = 7;
    this.inputArray[6][1] = 0;
    this.inputArray[6][2] = 0;
    this.inputArray[6][3] = 9;
    this.inputArray[6][4] = 0;
    this.inputArray[6][5] = 0;
    this.inputArray[6][6] = 0;
    this.inputArray[6][7] = 0;
    this.inputArray[6][8] = 0;
    this.inputArray[7][0] = 5;
    this.inputArray[7][1] = 0;
    this.inputArray[7][2] = 0;
    this.inputArray[7][3] = 0;
    this.inputArray[7][4] = 0;
    this.inputArray[7][5] = 2;
    this.inputArray[7][6] = 0;
    this.inputArray[7][7] = 0;
    this.inputArray[7][8] = 1;
    this.inputArray[8][0] = 9;
    this.inputArray[8][1] = 0;
    this.inputArray[8][2] = 0;
    this.inputArray[8][3] = 6;
    this.inputArray[8][4] = 4;
    this.inputArray[8][5] = 0;
    this.inputArray[8][6] = 3;
    this.inputArray[8][7] = 2;
    this.inputArray[8][8] = 0;
  }
}
