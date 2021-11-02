import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Importação dos componentes para conteúdo
import { HomeComponent } from "./views/home/home.component";
import { PaymentComponent } from "./views/payment/payment.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "payments",
    component: PaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
