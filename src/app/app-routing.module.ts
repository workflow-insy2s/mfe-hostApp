import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AuthComponent},
  {
      path:'mfe1',
      loadChildren:()=>{
          return loadRemoteModule({
              type:'module',
              remoteEntry:"http://localhost:4001/remoteEntry.js",
              exposedModule:"./OrderModule"
          }).then(m=>m.OrderModule).catch(e=>console.log(e));
      }
  },
  {
      path:'mfe-rule',
      loadChildren:()=>{
          return loadRemoteModule({
              type:'module',
              remoteEntry:"http://localhost:4002/remoteEntry.js",
              exposedModule:"./RuleModule"
          }).then(m=>m.RuleModule).catch(e=>console.log(e));
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
