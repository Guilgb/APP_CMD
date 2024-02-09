import mongoose from 'mongoose';

class DataBase {
	async connect() {
		try {
			return await mongoose.connect('mongodb://localhost:27017');
		} catch (error) {
			console.error('Error to connect in database:', error);
		}
	}
}

export default new DataBase().connect();
