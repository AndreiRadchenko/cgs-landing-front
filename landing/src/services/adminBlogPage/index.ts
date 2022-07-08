import { IArticle, IBlogResponse } from "../../types/Admin/Response.types";
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
  public getArticleById(id: string) {
    return this.httpService.get<IBlogResponse>(`api/blog/${id}`);
  }

  public postArticle(article: IArticle) {
    return this.httpService.post(`api/blog/add`, article);
  }
}

const factory = new HttpServiceFactory();
export const adminBlogService = new AdminBlogPage(
  factory.createAuthHttpService()
);
