export interface ICvPageData {
    title: string;
    categories: string[];
}

export interface ICvResponse {
    data: ICvPageData | undefined;
    isLoading: boolean;
    refetch: () => Promise<ICvResponse>;
  }