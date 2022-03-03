import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FormConfig } from '../../core/models/formConfig';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../../shared/services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { CardService } from '../../features/home/services/card.service';

@Component({
  selector: 'app-edit-advert',
  templateUrl: './edit-advert.component.html',
  styleUrls: ['./edit-advert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class EditAdvertComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public submitted = false;

  public id: string;

  public loading = false;

  public formConfig: FormConfig = {
    title: 'Изменить объявление',
    submitted: this.submitted,
    loading: this.loading,
  };

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly cardService: CardService,
    private readonly loaderService: LoaderService,
    private readonly toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
  }

  onSubmit(advertForm: FormGroup): void {
    this.loading = true;
    this.loaderService.show();

    this.cardService.editAdvert(advertForm.value, this.id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        ()=>{
          this.loading = false;
          this.loaderService.hide();
          alert('Объявление успешно изменено!!');
          this.router.navigate(['/details']);
        },
        (error)=>{
          this.toastr.error(error.error.message, 'Error');
          this.loading = false;
          this.loaderService.hide();
        },
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

}
