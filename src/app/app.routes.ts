import { Routes } from '@angular/router';
import { CountdownComponent } from './countdown/countdown.component';
import { Group0Component } from './memories/group-0/group-0.component';
import { Group1Component } from './memories/group-1/group-1.component';
import { Group2Component } from './memories/group-2/group-2.component';
import { Group3Component } from './memories/group-3/group-3.component';
import { Group4Component } from './memories/group-4/group-4.component';
import { Group5Component } from './memories/group-5/group-5.component';
import { Group6Component } from './memories/group-6/group-6.component';
import { Group7Component } from './memories/group-7/group-7.component';
import { MessagesComponent } from './messages/messages.component';
// import { GamesComponent } from './games/games.component';
// import { TicTacToeComponent } from './games/tic-tac-toe/tic-tac-toe.component';
// import { RockPaperScissorsComponent } from './games/rock-paper-scissors/rock-paper-scissors.component';

export const routes: Routes = [
  { path: '', component: CountdownComponent },
  {
    path: 'memories',
    children: [
      { path: 'group-0', component: Group0Component },
      { path: 'group-1', component: Group1Component },
      { path: 'group-2', component: Group2Component },
      { path: 'group-3', component: Group3Component },
      { path: 'group-4', component: Group4Component },
      { path: 'group-5', component: Group5Component },
      { path: 'group-6', component: Group6Component },
      { path: 'group-7', component: Group7Component },
      { path: '**', redirectTo: 'group-0' }
    ],
  },
  { path: 'messages', component: MessagesComponent },
  // {
  //   path: 'games',
  //   children: [
  //     { path: '', component: GamesComponent },
  //     { path: 'tic-tac-toe', component: TicTacToeComponent },
  //     { path: 'rock-paper-scissors', component: RockPaperScissorsComponent },
  //     { path: '**', redirectTo: '' }
  //   ],
  // },
  { path: '**', redirectTo: '' },
];
