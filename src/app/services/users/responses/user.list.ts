import { IUserResponse} from './index';

export interface IUserListResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<IUserResponse>;
}

