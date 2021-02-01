import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageMainComponent } from "../pages/main/main.component";
import { PageProductListComponent } from "../pages/product-list/product-list.component";


const mainRoutes: Routes = [
    {
        path: '',
        component: PageMainComponent,
        pathMatch: 'full'
    },
    {
        path: 'product-list',
        component: PageProductListComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(mainRoutes)],
    exports: [RouterModule],
  })
  
  export class MainRoutingModule {}