require('dotenv').config();
require('./config/databse');

const Item = require('./models/item');
const Style = require('./models/style');

(async function () {
	await Style.deleteMany({});
	const styles = await Style.create([
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
			style:styles[1],
		},
		{
			name: 'Coors',
			year: 2000,
			price: 6,
			style:styles[0],
		},
		{
            name: 'Fanta',
			year: 2006,
			price: 2,
			style:styles[2],
		},
        {
            name: 'Sprite',
			year: 2006,
			price: 2,
			style: styles[1],
		},
        {
            name: 'Bud',
			year: 2006,
			price: 2,
			style: styles[0],
		},



	]);

	console.log(items);

	process.exit();
})();