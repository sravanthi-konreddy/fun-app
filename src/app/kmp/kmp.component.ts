import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-kmp',
  templateUrl: './kmp.component.html',
  styleUrls: ['./kmp.component.css'],
})
export class KmpComponent implements OnInit {
  constructor() {}
  searchFlag: boolean;
  randChar: string[];
  forward: string[];
  backward: string[];
  upward: string[];
  downward: string[];
  searchText = new FormGroup({
    inputText: new FormControl(''),
  });
  //inputFromTB: string;
  ngOnInit(): void {
    this.searchFlag = true;
    this.forward = [];
    this.backward = [];
    this.upward = [];
    this.downward = [];
    this.randChar = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
  }
  generateRandomBoard() {
    this.searchFlag = false;
    var randVal;
    var childList = document
      .getElementById('randBoard')
      .querySelectorAll('#row-for-buttons');
    for (let i = 0; i < childList.length; i++) childList[i].remove();
    for (let i = 0; i < 15; i++) {
      var rowDiv = document.createElement('div');
      rowDiv.setAttribute('id', 'row-for-buttons');
      rowDiv.setAttribute('class', 'container');
      rowDiv.setAttribute('fxLayout', 'row inline');
      rowDiv.style.display = 'inline-flex';
      rowDiv.style.flexDirection = 'row';
      var rowDiv1 = document.createElement('div');
      for (let j = 0; j < 45; j++) {
        var rowDiv1 = document.createElement('div');
        randVal = Math.floor(Math.random() * 25);
        var colDiv = document.createElement('button');
        colDiv.setAttribute('id', i.toString() + '-' + j.toString());
        // this.unvisitedNodes.push(i.toString() + '-' + j.toString());
        colDiv.setAttribute('class', 'btn btn-light ');
        colDiv.setAttribute('fxFlex', '');
        colDiv.style.width = '30px';
        colDiv.style.backgroundColor = '#8585ad';
        colDiv.innerHTML = this.randChar[randVal];
        rowDiv1.appendChild(colDiv);
        rowDiv.appendChild(rowDiv1);
        //rowDiv.appendChild(colDiv);
        document.getElementById('randBoard').append(rowDiv);
      }
      //document.getElementById('randBoard').append(rowDiv);
    }
  }
  // searchThisText() {
  //   var inputText = this.searchText.value['inputText'];
  //   //console.log(this.searchText.value['inputText']);
  //   console.log(typeof inputText);
  //   //  console.log(document.getElementById('randBoard'));
  //   var matchText = new Array();
  //   var matchTextLen = 0;
  //   for (let i = 0; i < 15; i++) {
  //     for (let j = 0; j < 45; j++) {
  //       if (
  //         document.getElementById(i.toString() + '-' + j.toString())
  //           .innerHTML === inputText[matchTextLen]
  //       ) {
  //         matchTextLen++;
  //         //console.log(i.toString() + '-' + j.toString());
  //         console.log(matchTextLen);
  //         matchText.push(i.toString() + '-' + j.toString());
  //       } else {
  //         matchTextLen = 0;
  //         matchText = [];
  //       }
  //       if (matchTextLen === inputText.length) {
  //         break;
  //       }
  //     }
  //     if (matchTextLen === inputText.length) {
  //       break;
  //     }
  //   }
  //   console.log('found pattern!!!');
  //   console.log(matchText);
  // }
  searchThisText() {
    var inputText = this.searchText.value['inputText'].toLowerCase();
    var matchText = new Array();

    var matchTextLen = 0;
    var templen = 0;
    var direction;
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 45; j++) {
        this.forward = [];
        this.backward = [];
        this.upward = [];
        this.downward = [];
        var matchedArray = new Array();
        direction = 'forward';
        // this.backward.push(i.toString() + '-' + j.toString());
        if (i === 0) {
          this.upward.push(i.toString() + '-' + j.toString());
        }
        if (j === 0) {
          this.backward.push(i.toString() + '-' + j.toString());
        }
        if (j === 44) {
          this.forward.push(i.toString() + '-' + j.toString());
        }
        if (i === 15) {
          this.downward.push(i.toString() + '-' + j.toString());
        }
        var m = i;
        var n = j;
        var tempm;
        var tempn;
        while (true) {
          //console.log('m:' + m);
          //console.log('n::' + n);
          if (
            document.getElementById(m.toString() + '-' + n.toString())
              .innerHTML === inputText[templen]
          ) {
            //console.log('matched' + matchTextLen);
            if (!matchedArray.includes(m.toString() + '-' + n.toString())) {
              templen++;
              matchTextLen++;
              matchedArray.push(m.toString() + '-' + n.toString());
            } else {
              templen++;
            }
            if (templen === inputText.length) {
              matchText.push(new Array());
              matchText[matchText.length - 1] = matchedArray;
              matchTextLen = 0;
              //matchedArray = new Array();
              break;
            }

            if (!this.forward.includes(m.toString() + '-' + n.toString())) {
              this.forward.push(m.toString() + '-' + n.toString());
              n = n + 1;
              direction = 'forward';
              //console.log('added in forward');
              this.backward.push(m.toString() + '-' + n.toString());
            } else if (
              !this.upward.includes(m.toString() + '-' + n.toString())
            ) {
              direction = 'upward';
              this.upward.push(m.toString() + '-' + n.toString());
              m--;
              this.downward.push(m.toString() + '-' + n.toString());
            } else if (
              !this.downward.includes(m.toString() + '-' + n.toString())
            ) {
              direction = 'downward';
              this.downward.push(m.toString() + '-' + n.toString());
              m++;
              this.upward.push(m.toString() + '-' + n.toString());
            } else if (
              !this.backward.includes(m.toString() + '-' + n.toString())
            ) {
              direction = 'backward';
              this.backward.push(m.toString() + '-' + n.toString());
              n--;
              this.forward.push(m.toString() + '-' + n.toString());
            } else {
              matchedArray.pop();
              if (matchedArray.length > 0) {
                templen--;
                templen--;

                var tempvar = matchedArray[matchedArray.length - 1].split('-');

                m = Number(tempvar[0]);
                n = Number(tempvar[1]);

                continue;
              } else {
                templen = 0;
                matchTextLen = 0;
                break;
              }
            }
          } else if (matchTextLen === 0) {
            matchTextLen = 0;
            templen = 0;
            // matchedArray = new Array();
            break;
          } else if (direction === 'forward') {
            templen--;
            n--;
            this.forward.push(m.toString() + '-' + n.toString());
          } else if (direction === 'downward') {
            templen--;
            m--;
            this.downward.push(m.toString() + '-' + n.toString());
          } else if (direction === 'upward') {
            templen--;
            m++;
            this.upward.push(m.toString() + '-' + n.toString());
          } else if (direction === 'backward') {
            templen--;
            n++;
            this.backward.push(m.toString() + '-' + n.toString());
          }
          if (m === -1 || n === -1 || m === 15 || n === 45) {
            matchTextLen = 0;
            // matchedArray = new Array();

            break;
          }
          if (
            m === 0 &&
            !this.upward.includes(m.toString() + '-' + n.toString())
          ) {
            this.upward.push(m.toString() + '-' + n.toString());
          }
          if (
            n === 0 &&
            !this.backward.includes(m.toString() + '-' + n.toString())
          ) {
            this.backward.push(m.toString() + '-' + n.toString());
          }
          if (
            n === 44 &&
            !this.forward.includes(m.toString() + '-' + n.toString())
          ) {
            this.forward.push(m.toString() + '-' + n.toString());
          }
          if (
            m === 15 &&
            !this.downward.push(m.toString() + '-' + n.toString())
          ) {
            this.downward.push(m.toString() + '-' + n.toString());
          }
        }
      }
    }

    for (let i = 0; i < inputText.length; i++) {
      //setTimeout(() => {
      for (let j = 0; j < matchText.length; j++) {
        setTimeout(() => {
          document.getElementById(matchText[j][i]).style.backgroundColor =
            'green';
        }, 20 * i);
      }
      //}, 10 * i);
    }
  }

  resetBoard() {
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 45; j++) {
        document.getElementById(
          i.toString() + '-' + j.toString()
        ).style.backgroundColor = '#8585ad';
      }
    }
  }

  // showMatchedText(){
  //   for(let i=0;i<this.searchText.value['inputText'].length();i++){
  //     for(letj=0;j<matc)
  //   }
  // }
}
