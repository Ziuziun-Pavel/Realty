import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { FormConfig } from '../../core/models/formConfig';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { LoaderService } from '../../shared/services/loader.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { CardService } from '../../features/home/services/card.service';
import { TakeUntilDestroy } from '../../shared/decorators/take-until-destroy.decorator';

@Component({
  selector: 'app-edit-advert',
  templateUrl: './edit-advert.component.html',
  styleUrls: ['./edit-advert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

@TakeUntilDestroy
export class EditAdvertComponent implements OnInit, OnDestroy {
  private componentDestroy: () => Observable<unknown>;

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
    private readonly authService: AuthService,
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
      .pipe(takeUntil(this.componentDestroy()))
      .subscribe(
        ()=>{
          this.loading = false;
          this.loaderService.hide();
          alert('Объявление успешно изменено!!');
          if (this.authService.isAdmin()) {
            this.router.navigate(['/admin/adminProfile']);
          } else {
            this.router.navigate(['/details']);
          }
        },
        (error)=>{
          this.toastr.error(error.error.message, 'Error');
          this.loading = false;
          this.loaderService.hide();
        },
      );
  }

  ngOnDestroy() { }

}
