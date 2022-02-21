import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsService } from '../../../services/news.service';

@Component({
  selector: 'app-adding-news',
  templateUrl: './adding-news.component.html',
  styleUrls: ['./adding-news.component.scss'],
})
export class AddingNewsComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<boolean> = new Subject();

  public submitted = false;

  public loading = false;

  public newsForm: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly newsService: NewsService,
    private readonly loaderService: LoaderService,
    private readonly router: Router,
    private readonly toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      author: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      additionalInfo: ['', Validators.required],
    });
  }

  public get formControls(): { [key: string]: AbstractControl; } {
    return this.newsForm.controls;
  }

  public onSubmit() {
    if (this.newsForm.invalid) {
      return;
    }
    this.submitted = true;
    this.loading = true;

    this.loaderService.show();

    this.newsService.addNews(this.newsForm.value)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        () => {
          this.loaderService.hide();
          alert('Новость успешно добавлена!');
          this.router.navigate(['/']);
        },
        () => {
          this.loaderService.hide();
          this.toastr.error('Ошибка');
        },
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }

}
