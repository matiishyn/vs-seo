import {Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {TranslateLoader} from "ng2-translate";

export class TranslateUniversalLoader implements TranslateLoader {
  constructor(private http: Http) { }

  getTranslation(lang: string): Observable<any> {
    return this.http.get(`/api/translation?lang=${lang}`).map((res:Response) => res.json());
  }
}
