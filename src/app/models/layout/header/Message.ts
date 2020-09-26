import { PersonInfo } from './../../registers/person-info';

export interface Message {
    subject: string;
    message: string;
    from: PersonInfo;
    to: PersonInfo;
    sent: Date;
    ico: string;
}
