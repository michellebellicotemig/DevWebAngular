import { Router, ActivatedRoute } from "@angular/router";
import { PaymentService } from "./../payment.service";
import { Payment } from "./../payment.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-payment-delete",
  templateUrl: "./payment-delete.component.html",
  styleUrls: ["./payment-delete.component.css"],
})
export class PaymentDeleteComponent implements OnInit {
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

  deletePayment(): void {
    this.paymentService.delete(this.payment.id || 0).subscribe(() => {
      this.paymentService.showMessage("Pagamento excluido com sucesso!");
      this.router.navigate(["/payments"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/payments"]);
  }
}
