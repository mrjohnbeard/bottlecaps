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
		},
		{
			name: 'Coors',
			year: 2000,
			price: 6,
			category:categorys[0],
		},
		{
            name: 'Fanta',
			year: 2006,
			price: 2,
			category:categorys[2],
		},
        {
            name: 'Sprite',
			year: 2006,
			price: 2,
			category: categorys[1],
		},
        {
            name: 'Bud',
			year: 2006,
			price: 2,
			category: categorys[0],
		},



	]);

	console.log(items);

	process.exit();
})();