import { Routes } from '@angular/router';
import {VoyageListComponent} from "./components/public/voyage-list/voyage-list.component";
import {VoyageDetailComponent} from "./components/public/voyage-detail/voyage-detail.component";
import {VoyageAddComponent} from "./components/admin/voyage-add/voyage-add.component";
import {VoyageListingComponent} from "./components/admin/voyage-listing/voyage-listing.component";
import {VoyageEditComponent} from "./components/admin/voyage-edit/voyage-edit.component";
import {LoginComponent} from "./components/admin/login/login.component";
import {loginGuard} from "./guards/login-guard.guard";

export const routes: Routes = [
  {path:'voyage', component:VoyageListComponent},
  {path:'admin', component:VoyageListingComponent ,canActivate: [loginGuard]},
  {path:'admin/add', component:VoyageAddComponent,canActivate: [loginGuard]},
  {path:'admin/edit/:id', component:VoyageEditComponent,canActivate: [loginGuard]},
  {path:'voyage/:id', component:VoyageDetailComponent},
  {path:'login', component:LoginComponent},








];
