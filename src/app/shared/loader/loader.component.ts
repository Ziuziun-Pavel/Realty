import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { LoaderService } from '../services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  public color = 'primary';

  public mode: ProgressSpinnerMode = 'indeterminate';

  public value = 50;

  public isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private readonly loaderService: LoaderService) {
  }
}
