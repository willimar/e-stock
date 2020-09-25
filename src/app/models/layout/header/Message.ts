import { UserInfo } from './../login/UserInfo';

export interface Message {
    subject: string;
    message: string;
    from: UserInfo;
    to: UserInfo;
    sent: Date;
    ico: string;
}
