var today = new Date();

$(".age").each(function() {
	var birthDate = this.attr(datetime);
	var age = today.getFullYear() - birthDate.getFullYear();
	console.log(typeOf(age));
	var m = today.getMonth() - birthDate.getMonth();

	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	this.text(age.toString());
})


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    $(".age").text(age);
    return age;
}