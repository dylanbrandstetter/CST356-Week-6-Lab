
function displayInfo() {

    alert("displaying");

    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var age = document.getElementById("Age").value;

    var valid = true;
    if (firstName == "") {
        alert("Must enter a value for first name");
        valid = false;
    }

    if (lastName == "") {
        alert("Must enter a value for last name");
        valid = false;
    }

    if (age == "") {
        alert("Must enter a value for age");
        valid = false;
    }

    var years = document.getElementsByName("YearInSchool");

    var oneChecked = false;
    for (var i = 0; i < years.length; ++i) {
        if (years[i].checked) {
            oneChecked = true;
        }
    }

    if (!oneChecked)
    {
        alert("Must select a year");
        valid = false;
    }

    if (!valid)
    {
        return false;
    }

    var summary = firstName + " " + lastName + " is " + age + " years old.";

    document.getElementById("SummaryHead").innerText = "Summary";
    document.getElementById("SummaryText").innerText = summary;

    return false;
}