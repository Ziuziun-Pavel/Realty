import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../shared/services/loader.service';
import { Subject, takeUntil } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormConfig } from '../../core/models/formConfig';
import { CardService } from '../../features/home/services/card.service';

@Component({
  selector: 'app-add-adverts',
  templateUrl: './add-adverts.component.html',
  styleUrls: ['./add-adverts.component.scss'],
})
export class AddAdvertsComponent implements OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public loading: boolean = false;

  public submitted: boolean = false;

  public formConfig: FormConfig = {
    title: 'Добавить объявление',
    submitted: this.submitted,
    loading: this.loading,
  };

  constructor(
    private readonly router:Router,
    private readonly cardService: CardService,
    private readonly loaderService: LoaderService,
    private readonly toastr: ToastrService,
  ) { }

  onSubmit(addingForm: FormGroup): void {
    this.loading = true;
    this.loaderService.show();
    this.cardService.addNewCard(addingForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        ()=>{
          this.loading = false;
          this.loaderService.hide();
          alert('Объявление добавлено!!');
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
