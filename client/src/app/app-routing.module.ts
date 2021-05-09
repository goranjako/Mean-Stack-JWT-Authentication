import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './index/not-found/not-found.component';
import { UserProfileComponent } from './index/user-profile/user-profile.component';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';


const routes: Routes = [
  {path:'profile', component:UserProfileComponent},
  { path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), data: {
    preload: true
  }},
  {path:'', pathMatch:'full',redirectTo: 'profile'},
  {path:'**',component: NotFoundComponent},
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes,{ preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
