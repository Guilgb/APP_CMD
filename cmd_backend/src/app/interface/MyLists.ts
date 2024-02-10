import type {Types} from 'mongoose';

export interface MyLists {
    format: string;
    list_name: string;
    commander: string;
    partner?: string;
    colors: string;
    date_create: Date;
    link_list: string;
}


export interface iMyLists {
    _id?: Types.ObjectId
    format: string;
    list_name: string;
    commander: string;
    partner?: string;
    colors: string;
    date_create: Date;
    link_list: string;
}
