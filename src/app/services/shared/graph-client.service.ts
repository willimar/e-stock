import { BodyService } from './body.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphClientService {

  public body: BodyService[] = [];
    public timeOut: number = 1000 * 30;
    public result: any;

    public constructor(private http: HttpClient) {
    }

    public resolve(uri: string): void {
        const bodyValue: string = this.body.join(',');

        const body = `{"operationName":null,"variables":{},"query":"{${bodyValue}}"}`;
        this.submitPerson(body, uri);
    }

    private submitPerson(form: string, url: string): void {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        }),
      };

      this.result = this.http.post(url,
          form,
          httpOptions);
    }

    public appendBody(name: string): BodyService {
        const body: BodyService = new BodyService(name);
        this.body.push(body);
        return body;
    }
}
