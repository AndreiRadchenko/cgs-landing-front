import {
  IArticle,
  IBlogPageResponse,
  ISwapData,
} from "../../types/Admin/Response.types";
import { EnhancedWithAuthHttpService } from "../httpAuth.service";
import { HttpServiceFactory } from "../index";

export class AdminBlogPage {
  constructor(private httpService: EnhancedWithAuthHttpService) {}
  public getBlogPageData() {
    return this.httpService.get<IBlogPageResponse>("api/blog");
  }
  public updateBlogPageData(data: IBlogPageResponse) {
    return this.httpService.put("api/blog", data);
  }
  public getArticles() {
    return this.httpService.get<IArticle[]>("api/blog/article");
  }

  public getPaginatedAndFilteredReviews(
    tags: string[],
    page: number,
    limit: number
  ) {
    return this.httpService.get<IArticle[]>(
      `api/blog/acticles?tags=${tags}&page=${page}&limit=${limit}`
    );
  }

  public getBlogSwiperData() {
    return this.httpService.get<IArticle[]>(`api/blog/swiper`);
  }

  public getArticleByUrl(url: string) {
    return this.httpService.get(`api/blog/article/${url}`);
  }
  public postArticle(article: IArticle) {
    return this.httpService.post(`api/blog/article`, article);
  }

  public updateById(updatedArticle: IArticle) {
    return this.httpService.put(
      `api/blog/article/${updatedArticle._id}`,
      updatedArticle
    );
  }

  public deleteByUrl(url: string) {
    return this.httpService.delete(`api/blog/article/${url}`);
  }

  public swapTwoElements(swapData: ISwapData) {
    return this.httpService.put(`api/blog/swap`, swapData);
  }
}

const factory = new HttpServiceFactory();
export const adminBlogService = new AdminBlogPage(
  factory.createAuthHttpService()
);
