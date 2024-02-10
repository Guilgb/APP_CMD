import type {Types} from 'mongoose';

export interface User {
    nick_name: string;
    email: string;
    password: string | undefined;
    myLists: Types.ObjectId[];
}

export interface iUser {
    _id: Types.ObjectId
    nick_name: string;
    email: string;
    password: string | undefined;
    myLists: Types.ObjectId[];
}