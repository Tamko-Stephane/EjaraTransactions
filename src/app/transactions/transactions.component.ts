import { MatSort, SortDirection } from '@angular/material/sort';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface ITransaction{
  date_creation:string;
  transaction_type:string;
  transaction_status:string;
  emitter:string;
  receiver:string;
  amount_raw:string;
  amount_net:string;
  fiat_currency:string;
  crypto_currency:string;
  crypto_amount:string;
}

const transactions: ITransaction[]=[
  {
  date_creation:"2021/05/08",
  transaction_type:"buy",//buy or sell
  transaction_status:"pending", //pending, confirmed, rejected
  emitter:"stephane",
  receiver:"julienne",
  amount_raw:"566000",
  amount_net:"500000",
  fiat_currency:"xaf",
  crypto_currency:"etheureum",
  crypto_amount:"108"
  },
  {
    date_creation:"2021/05/10",
    transaction_type:"buy",//buy or sell
    transaction_status:"pending", //pending, confirmed, rejected
    emitter:"Habdou",
    receiver:"julienne",
    amount_raw:"566000",
    amount_net:"500000",
    fiat_currency:"xaf",
    crypto_currency:"etheureum",
    crypto_amount:"108"
    },
    {
      date_creation:"2021/05/15",
      transaction_type:"buy",//buy or sell
      transaction_status:"pending", //pending, confirmed, rejected
      emitter:"Habdou",
      receiver:"julienne",
      amount_raw:"566000",
      amount_net:"500000",
      fiat_currency:"xaf",
      crypto_currency:"etheureum",
      crypto_amount:"108"
      },
      {
        date_creation:"2021/05/06",
        transaction_type:"buy",//buy or sell
        transaction_status:"pending", //pending, confirmed, rejected
        emitter:"Habdou",
        receiver:"julienne",
        amount_raw:"566000",
        amount_net:"500000",
        fiat_currency:"xaf",
        crypto_currency:"etheureum",
        crypto_amount:"108"
        },
        {
          date_creation:"2021/06/10",
          transaction_type:"buy",//buy or sell
          transaction_status:"pending", //pending, confirmed, rejected
          emitter:"Habdou",
          receiver:"julienne",
          amount_raw:"566000",
          amount_net:"500000",
          fiat_currency:"xaf",
          crypto_currency:"etheureum",
          crypto_amount:"108"
          },
          {
            date_creation:"2021/07/22",
            transaction_type:"buy",//buy or sell
            transaction_status:"pending", //pending, confirmed, rejected
            emitter:"Habdou",
            receiver:"julienne",
            amount_raw:"566000",
            amount_net:"500000",
            fiat_currency:"xaf",
            crypto_currency:"etheureum",
            crypto_amount:"108"
            },
            {
              date_creation:"2021/08/07",
              transaction_type:"buy",//buy or sell
              transaction_status:"pending", //pending, confirmed, rejected
              emitter:"Habdou",
              receiver:"julienne",
              amount_raw:"566000",
              amount_net:"500000",
              fiat_currency:"xaf",
              crypto_currency:"etheureum",
              crypto_amount:"108"
              }
  ];


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
displayedColumns: string[] = ['emitter', 'receiver', 'date_creation','transaction_type', 'transaction_status', 'amount_raw', 'amount_net', 'fiat_currency', 'crypto_currency', 'crypto_amount']
TRANSACTIONS:MatTableDataSource<ITransaction>;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  // @ViewChild(MatPaginator)
  // paginator:MatPaginator;

  // resultsLength=0;
  // isLoadingResults = true;
  // isRateLimitReached = false;

constructor() {
  this.TRANSACTIONS = new MatTableDataSource<ITransaction>(transactions.sort((a,b)=> Date.parse(b.date_creation) - Date.parse(a.date_creation)));

}

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    //retrieve data
    this.TRANSACTIONS.sort = this.sort;
    this.sort.sortChange.subscribe(()=> console.log("sorting..."));
  }

}


export class HttpClientDataRetriever{
  constructor(private _httpClient: HttpClient){}

  getTransactions(sort:string, order: SortDirection, page: number): Observable<ITransaction[]>{
    const base_url = 'https://testbox.nellys-coin.ejaraapis.xyz';
    const request_url = `${base_url}?q=transactions`;
    return this._httpClient.get<ITransaction[]>(request_url);
  }
}
