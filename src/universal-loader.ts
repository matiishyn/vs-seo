import {Observable} from "rxjs";
import {TranslateLoader} from "ng2-translate";
import {ApiService} from "./app/shared/api.service";

export class TranslateUniversalLoader implements TranslateLoader {
  constructor(public api: ApiService) {
  }

  getTranslation(lang: string): Observable<any> {
    // this will cache data
    // return this.model.get(`translation?lang=${lang}`);
    return this.api.get(`translation?lang=${lang}`).map((res: any) => res.json());
  }
}
