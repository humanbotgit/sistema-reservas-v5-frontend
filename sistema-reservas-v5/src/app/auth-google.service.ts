import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthConfig } from 'angular-oauth2-oidc'
@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor(private oauthService:OAuthService) { 
    this.initLogin();
  }
  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '1025464929242-m39mtpl38a4p8rapam685e9dl7pb1lr8.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/main',
      scope: 'openid profile email',
    }
    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }
  getProfile() {
    return this.oauthService.getIdentityClaims()
  }
}
