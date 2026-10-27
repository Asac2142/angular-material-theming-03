import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatAnchor, MatIcon],
  selector: 'app-card',
  styleUrl: './card.scss',
  templateUrl: './card.html'
})
export class Card {}
