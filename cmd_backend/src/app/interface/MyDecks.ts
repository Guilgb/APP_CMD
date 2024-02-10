import type {Types} from 'mongoose';

export interface MyDecks {
    format: string;
    list_name: string;
    commander: string;
    partner?: string;
    colors: string;
    date_create: Date;
    link_list: string;
}


export interface MyDecks {
    _id?: Types.ObjectId
    format: string;
    list_name: string;
    commander: string;
    partner?: string;
    colors: string;
    date_create: Date;
    link_list: string;
}
