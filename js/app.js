var ViewModel = function() {
	/* Model */
	this.clickCount = ko.observable(0);
	this.level = ko.computed(function() {
		if (this.clickCount() <= 1) {
			level = "Newborn";
			return level;
		} else if (this.clickCount() <= 11) {
			level = "Kitten";
			return level;
		} else if (this.clickCount() <= 39) {
			level = "Cat";
			return level;
		} else if (this.clickCount() >= 40) {
			level = "Master Cat";
			return level;
		}
	},this);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big')

	this.incrementCounter = function () {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());