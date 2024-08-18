import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  public value?: string;
  public profile?: string;
  private subscriptions: Subscription[] = [];

  public e = environment.production == true ? 'production' : 'local';

  constructor(
    public auth: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.auth.user$
        .subscribe(p => this.profile = JSON.stringify(p, null, 2))
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  login() {
    this.auth.loginWithRedirect()
  }

  logout() {
    this.auth.logout();
  }

  callApi() {
    this.subscriptions.push(
      this.http.get<string>('/api/value')
        .subscribe({
          next: v => this.value = v,
          error: () => console.log('Error calling API')
        })
    );
  }
}
