require('dotenv').config();
require('./config/database');

const Item = require('./models/item');
const Category = require('./models/category');

(async function () {
	await Category.deleteMany({});
	const categorys = await Category.create([
		{name: 'Alcohol', sortOrder: 0},
		{name: 'Soda', sortOrder: 1},
		{name: 'Other', sortOrder: 2},
	]);

    await Item.deleteMany({});
	const items = await Item.create([
		{
			name: 'CocaCola',
			year: 1995,
			price: 5,
			category:categorys[1],
			image: 'https://ibb.co/X7jhp9R',
		},
		{
			name: 'Coors',
			year: 2000,
			price: 6,
			category:categorys[0],
			image: 'https://ibb.co/ryMk0PC',
		},
		{
            name: 'Crush',
			year: 2007,
			price: 7,
			category:categorys[1],
			image: 'https://ibb.co/YNk6sT9',
		},
        {
            name: 'Hank',
			year: 2016,
			price: 12,
			category: categorys[1],
			image: 'https://ibb.co/pJbF8jh',
		},
        {
            name: 'Carta',
			year: 2000,
			price: 9,
			category: categorys[0],
			image: 'https://ibb.co/Wspgn5t',
		},

		{
            name: 'Martinelli',
			year: 2020,
			price: 8,
			category: categorys[2],
			image: 'https://ibb.co/LdKbczj',
		},

		{
            name: 'Mundet',
			year: 2003,
			price: 6,
			category: categorys[1],
			image: 'https://ibb.co/1ZbvSxn',
		},

		{
            name: 'Star',
			year: 1998,
			price: 12,
			category: categorys[2],
			image: 'https://ibb.co/ZLqBKpk',
		},


		



	]);

	console.log(items);

	process.exit();
})();