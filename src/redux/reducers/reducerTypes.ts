export interface errorState {
    showError: boolean;
}

export interface configState {
    envUrl: any;
    externalContent: any;
}

export interface loaderState {
    loading: boolean;
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface postState {
    postList: Post[];
    postDetail: Post;
}
