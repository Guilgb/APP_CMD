import mongoose from 'mongoose';

class DataBase {
	async connect() {
		try {
			return await mongoose.connect('mongodb+srv://guilherme:1234@petdatabases.8kdrlu4.mongodb.net/?retryWrites=true&w=majority');
		} catch (error) {
			console.error('Error to connect in database:', error);
		}
	}
}

export default new DataBase().connect();
