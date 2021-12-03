import { Component, OnInit } from "@angular/core";
import { Payment } from "./../payment.model";
import { PaymentService } from "./../payment.service";

@Component({
  selector: "app-payment-read",
  templateUrl: "./payment-read.component.html",
  styleUrls: ["./payment-read.component.css"],
})
export class PaymentReadComponent implements OnInit {
  payments: Payment[];
  displayedColumns = ["id", "nome", "numero", "validade", "action"];

  constructor(private paymentService: PaymentService) {
    this.payments = [];
  }

  ngOnInit(): void {
    this.paymentService.read().subscribe((payments) => {
      this.payments = payments;
      console.log(payments);
    });
  }
}
