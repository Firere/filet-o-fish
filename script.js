$(function() {

	// the background image starts off as a transparent one so better randomise the colour
	$("body").css("background-color", `hsl(${Math.floor(Math.random() * 360)}, 35%, 50%)`);

	$(":root").css({
		"--title-outline-colour": `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`,
		"color": `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`,
		"background-color": `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
	});
	$("#title").css("color", `hsl(${Math.floor(Math.random() * 360)}, 35%, 50%)`);

	const imagesForTheBestFood = [
		"./filet-o-fish.png", // transparent
		"https://static.wikia.nocookie.net/ronaldmcdonald/images/7/72/Filet-O-Fish.png", // transparent
		"https://upload.wikimedia.org/wikipedia/commons/f/f7/McDonald%27s_Filet-O-Fish_sandwich_%281%29.jpg",
		"https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Filet-O-Fish.png",
		"https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1000%2C750%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F11%2F28%2Fcopycat-filet-o-fish-dcms-large-2000.jpg",
		"https://www.mcdonalds.com/is/image/content/dam/uk/nfl/nutrition/nfl-product/product/products/mcdonalds-Filet-o-Fish.jpg",
		"https://www.rd.com/wp-content/uploads/2018/11/fish.jpg?fit=700,1024",
		"https://www.mcdonalds.com/content/dam/ca/nfl/web/nutrition/products/tile/en/mcdonalds-double-filet-o-fish.jpg",
		"https://www.seriouseats.com/thmb/6nbqeyZO1_W1AlgsmOefj5vXJ5Y=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__20081210-filetofish-sandwich-12a9f09c34b147b48871eccd13329b83.jpg",
		"https://fastfoodnutrition.org/item-photos/full/1826.jpg",
		"https://assets3.thrillist.com/v1/image/2886219/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70",
		"https://s.yimg.com/hz/en_us/Finance/US_AFTP_SILICONALLEY_H_LIVE/Why_McDonalds_FiletoFish_sandwiches_are-d04e4b170b2bb38e743897fe3b7d70a4",
		"https://i.ytimg.com/vi/OJCpnLj1QYI/hqdefault.jpg",
		"https://www.gannett-cdn.com/presto/2019/03/06/USAT/56e351d7-f591-4c56-909b-42533871f7cc-5926_Filet-O-Fish.png?crop=1023,575,x0,y398&width=1023&height=575&format=pjpg&auto=webp",
		"https://foodlocate.com/storage/media/dishes_main/1299182/conversions/dish_thumbnail.jpg"
	];

	let previousImage = "./filet-o-fish.png"; // the starting image is always this one as declared in `styles.css`
	
	const adjectivesToDescribeTheBestFood = ["amazing", "appetising", "awesome", "ephereal", "excellent", "fabulous", "good", "gorgeous", "great", "loving", "marvellous", "pleasing", "precious", "splendid", "superb"];
	$("#text").text(adjectivesToDescribeTheBestFood[Math.floor(Math.random() * adjectivesToDescribeTheBestFood.length)]);

	const titleInterval = setInterval(function(){ // randomise the colour of the title every second
		$("#title").css("color", `hsl(${Math.floor(Math.random() * 360)}, 35%, 50%)`);
		$(":root").css("--title-outline-colour", `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`);
	}, 1000);

	const backgroundInterval = setInterval(function(){ // randomise the background image every 5 seconds
		let newImage;

		// choose a new image and check that it isn't the same as the previous one, else choose again until it's different
		do {
			newImage = imagesForTheBestFood[Math.floor(Math.random() * imagesForTheBestFood.length)];
		} while (newImage == previousImage)

		previousImage = newImage;

		// randomise the background colour as well using the same values as the title colour randomisation
		$("body").css("background-color", `hsl(${Math.floor(Math.random() * 360)}, 35%, 50%)`);
		$("body").css("background-image", `url(${newImage})`);
		$("#favicon").attr("href", newImage);
		console.log(newImage);
	}, 5000);

	// TODO: script to make the text bounce around in the viewport like the DVD logo we all know and love

	document.getElementById("terminator").addEventListener("click", function(){
		clearInterval(titleInterval);
		clearInterval(backgroundInterval);
		document.getElementById("script").remove;
	});

});