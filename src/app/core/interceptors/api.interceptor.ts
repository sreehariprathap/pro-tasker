import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { HotToastService } from '@ngneat/hot-toast';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(
    private loadingService: LoaderService,
    private toastService: HotToastService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // preloader setup for api call
    this.totalRequests++;
    this.loadingService.setLoading(true);

    const accessToken = localStorage.getItem('access_token');
    let apiReq = request.clone({
      url: `${environment.baseUrl}/${request.url}`,
    });
    apiReq = apiReq.clone({
      headers: apiReq.headers.set('Accept', 'application/json'),
    });
    if (accessToken) {
      apiReq = apiReq.clone({
        headers: apiReq.headers.set('authorization', `Bearer ${accessToken}`),
      });
    }

    return next.handle(apiReq).pipe(
      finalize(() => {
        this.totalRequests--;
        if (this.totalRequests === 0) {
          this.loadingService.setLoading(false);
        }
      })
    );
  }
}
