import {
  IArticle,
  IArticleWithInd,
  IBlogResponse,
  IMetaBlock,
  ISwapData,
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
  public updateByInd(updatedArticle: IArticleWithInd) {
    return this.httpService.put(
      `api/blog/article/${updatedArticle.ind}`,
      updatedArticle.article
    );
  }

  public swapTwoElements(swapData: ISwapData) {
    return this.httpService.put(`api/blog/swap`, swapData);
  }
  public deleteById(id: string) {
    return this.httpService.delete(`api/blog/article/${id}`);
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
