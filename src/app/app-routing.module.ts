import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: "elements",
    loadChildren: () => import("./components/elements/elements.module").then(m => m.ElementsModule)
  },
  {
    path: "collections",
    loadChildren: () => import("./components/collections/collections.module").then(m => m.CollectionsModule)
  },
  {
    path: "views",
    loadChildren: () => import("./components/views/views.module").then(m => m.ViewsModule)
  },
  {
    path: "mods",
    loadChildren: () => import("./components/mods/mods.module").then(m => m.ModsModule)
  },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
