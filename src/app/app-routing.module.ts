
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const firebaseConfig = {
  apiKey: "AIzaSyByf8h1l7DRgDFqrXo9yv9T2rTrzQdPWlw",
  authDomain: "authlogin-89075.firebaseapp.com",
  databaseURL: "https://authlogin-89075-default-rtdb.firebaseio.com",
  projectId: "authlogin-89075",
  storageBucket: "authlogin-89075.appspot.com",
  messagingSenderId: "168469203164",
  appId: "1:168469203164:web:43041361ac6ba623bfcc19",
  measurementId: "G-F831TYKYGN"
};

const routes: Routes = [

  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
