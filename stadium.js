var stadium = {
	name: 'Park',
	seats: 589,
	taken: 290,

	checkAvailability: function() {
		return this.seats-this.taken;
	}
};

//r elName = document.getElementById('stadiumName'); 
//Name.textContent=stadium.name;

 // elSeats = document.getElementById('seats');
//Seats.textContent=taken.checkAvailability();