import { Payment } from "./../payment.model";
import { Router, ActivatedRoute } from "@angular/router";
import { PaymentService } from "./../payment.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payment-update",
  templateUrl: "./payment-update.component.html",
  styleUrls: ["./payment-update.component.css"],
})
export class PaymentUpdateComponent implements OnInit {
  payment: Payment;

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.payment = { nome: "", numero: 0, validade: "", codigo: 0 };
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id") || 0;
    id = +id;
    this.paymentService.readById(id).subscribe((payment) => {
      this.payment = payment;
    });
  }

  updatePayment(): void {
    this.paymentService.update(this.payment).subscribe(() => {
      this.paymentService.showMessage("Pagamento atualizado com sucesso!");
      this.router.navigate(["/payments"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/payments"]);
  }
}
