import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import bootstrap from 'bootstrap';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { NqueensComponent } from './nqueens/nqueens.component';
import { DijkstraComponent } from './dijkstra/dijkstra.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { KmpComponent } from './kmp/kmp.component';
import { SudokuComponent } from './sudoku/sudoku.component';
import { PacManComponent } from './pac-man/pac-man.component';

@NgModule({
  declarations: [
    AppComponent,
    TictactoeComponent,
    NqueensComponent,
    DijkstraComponent,
    HomeComponent,
    KmpComponent,
    SudokuComponent,
    PacManComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'tictactoe', component: TictactoeComponent },
      { path: 'nqueens', component: NqueensComponent },
      { path: 'dijkstra', component: DijkstraComponent },
      { path: 'kmp', component: KmpComponent },
      { path: 'pacman', component: PacManComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
