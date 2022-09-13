import {
  IArticle,
  IArticleWithInd,
  IBlogResponse,
  IMetaBlock,
  IViews,
} from "../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AdminBlogPage {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getBlogPage() {
    return this.httpService.get<IBlogResponse>("api/blog");
  }
  public updateBlogPage(data: IBlogResponse) {
    return this.httpService.put("api/blog", data);
  }
  public postArticle(article: IArticle) {
    return this.httpService.post(`api/blog/add`, article);
  }
  public getByUrl(url: string) {
    return this.httpService.get(`api/blog/article/${url}`);
  }
  public updateBlogMetaTags(meta: IMetaBlock) {
    return this.httpService.put(`api/blog/meta`, meta);
  }
  public updateByUrl(updatedArticle: IArticleWithInd) {
    return this.httpService.put(
      `api/blog/article/${updatedArticle.ind}`,
      updatedArticle
    );
  }
  public updateViews(views: IViews) {
    return this.httpService.put(`api/blog/view`, views);
  }
  public getViews() {
    return this.httpService.get<IViews[]>(`api/blog/view`);
  }
}

const factory = new HttpServiceFactory();
export const adminBlogService = new AdminBlogPage(
  factory.createAuthHttpService()
);
