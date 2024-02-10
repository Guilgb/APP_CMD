import {Schema, model} from 'mongoose';
import { iUser } from '../interface/User';

const schema = new Schema<iUser>(
    {
        
        nick_name: {type: String, required: true, minlength: 3, maxlength: 50},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true, unique: true},
        myLists: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Mylists'
            }

        ]
    }
);
