import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICard } from '../../../../../core/models/cards';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card: ICard;

}
