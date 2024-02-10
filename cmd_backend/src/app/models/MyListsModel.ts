import {Schema, model} from 'mongoose';
import { iMyLists } from '../interface/MyLists';

const schema = new Schema<iMyLists>(
    {
        format: {type: String, required: true},
        list_name: {type: String, required: true},
        commander: {type: String, required: true},
	    partner: {type: String, required: false},
	    colors: {type: String, required: true},
	    date_create: {type: Date, required: true},
	    link_list: {type: String, required: true}
       
    }
);

export default schema;