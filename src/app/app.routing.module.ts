import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PhotoFormComponent } from "./photos/photo-form/photo-form.component";
import { PhotoListComponent } from "./photos/photo-list/photo-list.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { PhotoListResolver } from "./photos/photo-list/photo-list.resolver";
import { AuthGuard } from "./core/guards/auth.guard";
import { PhotoDetailsComponent } from "./photos/photo-detail/photo-details.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home", loadChildren: './home/home.module#HomeModule'
  },
  {
    path: "user/:userName",
    component: PhotoListComponent,
    resolve: { photos: PhotoListResolver },
    data: {}
  },
  {
    path: "p/add", component: PhotoFormComponent, canActivate: [AuthGuard],
    data:{}
  },

  {
    path: "p/:photoId", component: PhotoDetailsComponent,
    data:{}
  },

  {
    path: "not-found", component: NotFoundComponent
  },
  {
    path: "**", redirectTo:'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
