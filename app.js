/* global angular */
(function() {
	var app = angular.module('CarinaRentals', []);
	app.controller('RentalController', function() {
		this.products = cars;
	});
	app.controller("RentController", function() {
		this.rentedCar = function(cars) {
			if (cars.available > cars.rented) {
				cars.rented = cars.rented + 1;
				console.log(cars.rented);
			} else if (cars.available == cars.rented) {
				cars.canRent = false;
			}
		};
	});
	
	//cars:make, model,type, description, price, avaliablity, rented, +picture// 
	var cars = [{
		make: "PACKARD",
		type: 'CUSTOM SPEEDSTER',
		description: "The narrow Speedster body is blue with light blue accent complemented by dark blue leather upholstery and a beige cloth top. Chrome wire wheels carry whitewall tires with dual side mount spares with mirror and beige cloth covers, Pilot-Ray driving lights and a radiator stone guard.",
		price: 394,
		available: 20,
		rented: 5,
		canRent: true,
		image: "https://snappygears.com/wp-content/uploads/2017/11/classic-cars-1930-packard-custom-speedster.jpg"
	}, {
		make: "DUESENBERG",
		type: "",
		description: "The first owner was Mrs. Nanaline Duke of New York City, who took delivery on Halloween in 1930. Mrs. Duke was the widow of American Tobacco Company founder J.B. Duke and was noted for a spectacular gem collection which accentuated the image provided by the stately couachbuilt town car. Several owners later, Judge Pat Ferchill acquired the car for his collection in 1958 and it then passed from his estate in 1985 to Bill and Aniece Lassiter who commissioned its restoration. The Lassiter restoration was and remains exceptional to this day due to the extreme level of care provided by them and subsequent owners. Complete known ownership since 1940. From the Blackhawk Collection.",
		price: 450,
		available: 10,
		rented: 2,
		canRent: true,
		image: "https://classiccarweekly.files.wordpress.com/2012/01/1930-duesenberg-model-j-j381-by-murphy.jpg"
	}, {
		make: "PIERCE-ARROW",
		type: "LEBARON SPORT SEDAN",
		description: "Top model available in 1931. 147 inch wheel base, 385cid 9-main bearing engine. Magnificent interior wood trim. Original cost $5,375.00. LeBaron was originally formed by Ray Dietrich of Dietrich Inc. Coachbuilders. With major Dietrich design influence, the V-windshields, recessed dashboard and long hood, it is the forerunner of the 1932 to 1934 V-windshield custom Dietrichs on the 147 inch wheel base. Rare and previously from the Browning estate collection. From the Tom Crook Collection.",
		price: 550,
		available: 8,
		rented: 4,
		canRent: true,
		image: "http://cdn.barrett-jackson.com/staging/carlist/items/Fullsize/Cars/116044/116044_Front_3-4_Web.jpg"
	}, {
		make: "DELAHAYE",
		type: "PROTOTYPE",
		description: "The engine, transmission, body and chassis are all original. The car has been successfully vintage raced in Monterey, where it took a second and fourth place. From the Blackhawk Collection.",
		price: 600,
		available: 3,
		rented: 1,
		canRent: true,
		image: "http://cdn.barrett-jackson.com/staging/carlist/items/Fullsize/Cars/117235/117235_Front_3-4_Web.jpg"
	}];
})();