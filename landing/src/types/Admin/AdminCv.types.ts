export interface ICvPageData {
    title: string;
    categories: string[];
    roles: string[];
}

export interface ICvResponse {
    data: ICvPageData | undefined;
    isLoading: boolean;
    refetch: () => Promise<ICvResponse>;
}

export interface CvData {
    image: { url: string };
    personal: {
        name: string;
        summary: string;
        role: string;
    };
    info: {
        title: string;
        content: [
            {
                subtitle1: string;
                text1: string;
            },
            {
                subtitle2: string;
                text2: string;
            },
            {
                subtitle3: string;
                text3: string;
            },
            {
                subtitle4: string;
                text4: string;
            },
        ];
    },
    skills: {
        title: string;
        card: [
            {
                subtitle1: string;
                stack1: string[];
            },
            {
                subtitle2: string;
                stack2: string[];
            },
            {
                subtitle3: string;
                stack3: string[];
            },
        ];
    };
    projects: {
        title: string,
        project: [{
            projectName: string;
            role: string;
            date: string;
            summary: string;
            achievements: string[];
            technology: string[];
        }];
    };
}