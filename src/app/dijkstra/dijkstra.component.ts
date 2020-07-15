import { Component, OnInit } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-dijkstra',
  templateUrl: './dijkstra.component.html',
  styleUrls: ['./dijkstra.component.css'],
})
export class DijkstraComponent implements OnInit {
  temp: string[];
  unvisitedNodes: string[];
  shortestPathToNodes: string[][];
  sourceNode: string;
  destNode: string;
  classOnClick: string;
  classOnRelease: string;
  visitedNodes: string[];
  destinationReached: boolean;
  reachablePath: string[];
  timercount: number;

  constructor() {}

  ngOnInit(): void {
    this.unvisitedNodes = new Array();
    this.shortestPathToNodes = new Array();
    this.sourceNode = '21-21';
    this.destNode = '0-11';
    //var classOnClick;
    //var classOnRelease;
    this.timercount = 0;
    this.visitedNodes = new Array();
    this.destinationReached = false;
    this.reachablePath = new Array();
    for (let i = 0; i < 25; i++) {
      var rowDiv = document.createElement('div');
      rowDiv.setAttribute('id', 'row-for-buttons');
      //rowDiv.setAttribute('style', 'width:100%');
      // rowDiv.setAttribute('class', 'row');
      rowDiv.setAttribute('fxLayout', 'row inline');
      // rowDiv.setAttribute('_ngcontent-kej-c36', '');
      rowDiv.style.display = 'inline-flex';
      rowDiv.style.flexDirection = 'row';
      // rowDiv.style.flex
      //rowDiv.setAttribute('fxFlex', '1 1 auto');
      //rowDiv.setAttribute('fxLayoutAlign', 'space-around center');
      for (let j = 0; j < 30; j++) {
        var rowDiv1 = document.createElement('div');
        //rowDiv1.setAttribute('class', 'col');
        // rowDiv1.setAttribute('fxFlex', '');
        var colDiv = document.createElement('button');
        colDiv.setAttribute('id', i.toString() + '-' + j.toString());
        this.unvisitedNodes.push(i.toString() + '-' + j.toString());
        colDiv.setAttribute('class', 'btn btn-light ');
        colDiv.setAttribute('fxFlex', '');

        // <div _ngcontent-kej-c36="" fxlayout="row inline" style="color: white; flex-direction: row; box-sizing: border-box; display: inline-flex;"
        // g-reflect-fx-layout="row inline"><button _ngcontent-kej-c36="">1. One</button>

        colDiv.style.backgroundColor = '#8585ad';

        if (this.sourceNode === i.toString() + '-' + j.toString()) {
          colDiv.classList.add('source');
          colDiv.style.backgroundColor = 'red';
        } else if (this.destNode === i.toString() + '-' + j.toString()) {
          colDiv.style.backgroundColor = 'green';
          colDiv.classList.add('dest');
        } else {
          colDiv.classList.add('unvisited');
        }
        colDiv.addEventListener(
          'mousedown',
          () => {
            // console.log('on mousedown');
            // console.log(event);
            // console.log(event.target);
            this.removeClassForClick(event.target);
          },
          false
        );

        // colDiv.addEventListener(
        //   'mouseover',
        //   () => {
        //     console.log('on mouse over...');
        //     this.setClassForMouseOver(colDiv.id);
        //   },
        //   false
        // );

        colDiv.addEventListener(
          'mouseup',
          () => {
            //console.log('on mouse up----------');
            //console.log(event);
            this.setTheClassForRelease(event.target);
          },
          false
        );

        colDiv.innerHTML = '&nbsp;';
        rowDiv1.appendChild(colDiv);
        rowDiv.appendChild(rowDiv1);
        document.getElementById('dijkstraBoard').append(rowDiv);
      }
    }
  }

  //document.getElementById("dijkstraBoard");

  resetBoard() {
    this.unvisitedNodes = new Array();
    this.shortestPathToNodes = new Array();
    this.sourceNode = '21-21';
    this.destNode = '0-11';
    this.classOnClick = null;
    this.classOnRelease = null;
    this.timercount = 0;
    this.visitedNodes = new Array();
    this.destinationReached = false;
    this.reachablePath = new Array();
    this.sourceNode = '21-21';
    this.destNode = '0-11';
    for (let i = 0; i < 25; i++) {
      for (let j = 0; j < 30; j++) {
        var element = document.getElementById(
          i.toString() + '-' + j.toString()
        );

        if (element.id === this.sourceNode) {
          element.classList.remove('dest');
          element.classList.remove('unvisited');
          element.classList.remove('visited');
          element.classList.remove('path');
          element.classList.add('source');
          element.style.backgroundColor = 'red';
        } else if (element.id === this.destNode) {
          element.classList.remove('source');
          element.classList.remove('unvisited');
          element.classList.remove('visited');
          element.classList.remove('path');
          element.classList.add('dest');
          element.style.backgroundColor = 'green';
        } else {
          element.classList.remove('source');
          element.classList.remove('dest');
          element.classList.remove('visited');
          element.classList.remove('path');
          element.classList.add('unvisited');
          element.style.backgroundColor = '#8585ad';
        }
      }
    }
  }
  //var i=0;

  startDiskstra() {
    //console.log('in start:::!!!');
    this.findThePath();

    this.markVisitedNodes();
    this.showPath();
  }

  findThePath() {
    //console.log('infindpath!!!');
    //var len = this.shortestPathToNodes.length;
    //this.shortestPathToNodes[len] = new Array();
    this.shortestPathToNodes.push(new Array());
    this.shortestPathToNodes[this.shortestPathToNodes.length - 1].push(
      this.sourceNode
    );
    this.dijkstraAlgo(this.shortestPathToNodes);
    while (!this.destinationReached) {
      this.dijkstraAlgo(this.shortestPathToNodes);
    }
  }

  dijkstraAlgo(nodes) {
    var arrLength = this.shortestPathToNodes.length;
    for (let i = 0; i < arrLength; i++) {
      if (
        !this.visitedNodes.includes(
          this.shortestPathToNodes[i][this.shortestPathToNodes[i].length - 1]
        )
      ) {
        var inode = parseInt(
          this.shortestPathToNodes[i][
            this.shortestPathToNodes[i].length - 1
          ].split('-')[0]
        );
        var jnode = parseInt(
          this.shortestPathToNodes[i][
            this.shortestPathToNodes[i].length - 1
          ].split('-')[1]
        );

        if (inode + 1 < 25 && !this.destinationReached) {
          this.shortestPathToNodes.push(
            this.shortestPathToNodes[i].concat(
              (inode + 1).toString() + '-' + jnode.toString()
            )
          );
          if (
            (inode + 1).toString() + '-' + jnode.toString() ===
            this.destNode
          ) {
            this.destinationReached = true;

            this.reachablePath = this.shortestPathToNodes[i];
            this.reachablePath.push(
              (inode + 1).toString() + '-' + jnode.toString()
            );
          }
        }
        if (inode - 1 >= 0 && !this.destinationReached) {
          this.shortestPathToNodes.push(
            this.shortestPathToNodes[i].concat(
              (inode - 1).toString() + '-' + jnode.toString()
            )
          );
          if (
            (inode - 1).toString() + '-' + jnode.toString() ===
            this.destNode
          ) {
            this.destinationReached = true;

            this.reachablePath = this.shortestPathToNodes[i];
            this.reachablePath.push(
              (inode - 1).toString() + '-' + jnode.toString()
            );
          }
        }
        if (jnode + 1 < 30 && !this.destinationReached) {
          this.shortestPathToNodes.push(
            this.shortestPathToNodes[i].concat(
              inode.toString() + '-' + (jnode + 1).toString()
            )
          );
          if (
            inode.toString() + '-' + (jnode + 1).toString() ===
            this.destNode
          ) {
            this.destinationReached = true;

            this.reachablePath = this.shortestPathToNodes[i];
            this.reachablePath.push(
              inode.toString() + '-' + (jnode + 1).toString()
            );
          }
        }
        if (jnode - 1 >= 0 && !this.destinationReached) {
          this.shortestPathToNodes.push(
            this.shortestPathToNodes[i].concat(
              inode.toString() + '-' + (jnode - 1).toString()
            )
          );
          if (
            inode.toString() + '-' + (jnode - 1).toString() ===
            this.destNode
          ) {
            this.destinationReached = true;

            this.reachablePath = this.shortestPathToNodes[i];
            this.reachablePath.push(
              inode.toString() + '-' + (jnode - 1).toString()
            );
          }
        }

        this.visitedNodes.push(
          this.shortestPathToNodes[i][this.shortestPathToNodes[i].length - 1]
        );
        this.timercount += 10;
      }
    }
  }
  showPath() {
    //console.log('in show path!!!!');
    //console.log(this.reachablePath);
    setTimeout(() => {
      for (let i = 0; i < this.reachablePath.length; i++) {
        setTimeout(() => {
          document
            .getElementById(this.reachablePath[i])
            .classList.remove('visited');
          if (
            this.reachablePath[i] !== this.sourceNode &&
            this.reachablePath[i] !== this.destNode
          ) {
            document
              .getElementById(this.reachablePath[i])
              .classList.add('path');
            document.getElementById(
              this.reachablePath[i]
            ).style.backgroundColor = 'yellow';
          }
        }, 50 * i);
      }
    }, this.timercount);
  }
  markVisitedNodes() {
    //console.log('in mark vesited');
    //console.log(this.visitedNodes);
    for (let i = 0; i < this.visitedNodes.length; i++) {
      setTimeout(() => {
        document
          .getElementById(this.visitedNodes[i])
          .classList.remove('unvisited');
        if (
          this.visitedNodes[i] !== this.sourceNode &&
          this.visitedNodes[i] !== this.destNode
        ) {
          document
            .getElementById(this.visitedNodes[i])
            .classList.add('visited');
          document.getElementById(this.visitedNodes[i]).style.backgroundColor =
            'cyan';
        }
      }, 10 * i);
    }
  }

  setTheClassForRelease(input) {
    console.log('in set the class on release');
    //var element = document.getElementById(input);
    console.log(input);
    input.classList.add(this.classOnRelease);
    if (this.classOnRelease === 'source') {
      input.style.backgroundColor = 'red';
    } else if (this.classOnRelease === 'dest') {
      input.style.backgroundColor = 'green';
    }

    if (this.classOnRelease === 'source') {
      this.sourceNode = input.id;
    } else if (this.classOnRelease === 'dest') {
      this.destNode = input.id;
    }
    this.classOnRelease = null;
    //console.log('after execution');
    //console.log(input);
  }

  removeClassForClick(input) {
    console.log('remove class on click...');

    // var element = document.getElementById(input);
    console.log(input);
    if (input.classList.contains('source')) {
      this.classOnRelease = 'source';
      input.classList.remove('source');
      input.style.backgroundColor = '#8585ad';
    }
    if (input.classList.contains('dest')) {
      this.classOnRelease = 'dest';
      input.classList.remove('dest');
      input.style.backgroundColor = '#8585ad';
    }
    //console.log('after func::');
    //console.log(input);
  }
  // setClassOnMouseLeave(input: string) {
  //   var element = document.getElementById(input);
  //   // console.log(element);
  //   if (input !== this.sourceNode && input != this.destNode) {
  //     element.classList.add('unvisited');
  //     element.style.backgroundColor = '#8585ad';
  //   }
  // }
  // setClassForMouseOver(input: string) {
  //   //console.log('in set the class on release');
  //   var element = document.getElementById(input);
  //   // console.log(element);
  //   element.classList.add(this.classOnRelease);
  //   if (this.classOnRelease === 'source') {
  //     element.style.backgroundColor = 'red';
  //   } else if (this.classOnRelease === 'dest') {
  //     element.style.backgroundColor = 'green';
  //   }

  //   if (this.classOnRelease === 'source') {
  //     this.sourceNode = element.id;
  //   } else if (this.classOnRelease === 'dest') {
  //     this.destNode = element.id;
  //   }
  //   this.classOnRelease = null;
  //   console.log('after execution');
  //   console.log(element);
  // }
}
