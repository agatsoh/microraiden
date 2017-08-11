import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import { RaidenMicropaymentsClient } from '../../lib/rmp.js';

@Injectable()
export class RMPConfig {
    public config: any;
    public rmp: any;

    constructor(private http: HttpClient) { }

    load(url: string) {
        return new Promise((resolve) => {
            this.http.get(url)
                .do((config) => this.config = config)
                .switchMap(() => Observable.timer(0, 200)
                    .map((cnt) => cnt < 50 ? !!window['web3'] : true))
                .filter((val) => val)
                .first()
                .subscribe(() => {
                    this.rmp = new RaidenMicropaymentsClient(
                        window['web3'] || this.config["web3url"],
                        this.config["contractAddr"],
                        this.config["contractABI"],
                        this.config["tokenAddr"],
                        this.config["tokenABI"],
                    );
                    resolve();
                });
        });
    }
}
