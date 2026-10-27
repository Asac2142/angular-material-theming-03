import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
