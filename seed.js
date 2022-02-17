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
			image: 'https://i.imgur.com/Sfk5vWw.jpg',
		},
		{
			name: 'Coors',
			year: 2000,
			price: 6,
			category:categorys[0],
			image: 'https://i.imgur.com/H2QGqIl.jpg',
		},
		{
            name: 'Crush',
			year: 2007,
			price: 7,
			category:categorys[1],
			image: 'https://i.imgur.com/sUxXGyE.jpg',
		},
        {
            name: 'Hank',
			year: 2016,
			price: 12,
			category: categorys[1],
			image: 'https://i.imgur.com/OwimOIQ.jpg',
		},
        {
            name: 'Carta',
			year: 2000,
			price: 9,
			category: categorys[0],
			image: 'https://i.imgur.com/sKZCXP0.jpg',
		},

		{
            name: 'Martinelli',
			year: 2020,
			price: 8,
			category: categorys[2],
			image: 'https://i.imgur.com/OiLtPCP.jpg',
		},

		{
            name: 'Mundet',
			year: 2003,
			price: 6,
			category: categorys[1],
			image: 'https://i.imgur.com/8TIbZmx.jpg',
		},

		{
            name: 'Star',
			year: 1998,
			price: 12,
			category: categorys[2],
			image: 'https://i.imgur.com/zLFdP2R.jpg',
		},


		



	]);

	console.log(items);

	process.exit();
})();