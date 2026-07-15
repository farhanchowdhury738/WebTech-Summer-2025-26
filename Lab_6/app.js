function validateForm() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var studentId = document.getElementById("studentId").value;
    var email = document.getElementById("email").value;
    var credit = document.getElementById("credit").value;
    var department = document.getElementById("department").value;

    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("studentIdError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("creditError").innerHTML = "";
    document.getElementById("departmentError").innerHTML = "";

    var isValid = true;

    if (fname == "") {
        document.getElementById("fnameError").innerHTML = "First name is required.";
        isValid = false;
    }

    if (lname == "") {
        document.getElementById("lnameError").innerHTML = "Last name is required.";
        isValid = false;
    }

    if (studentId == "") {
        document.getElementById("studentIdError").innerHTML = "Student ID is required.";
        isValid = false;
    }
    else if (!studentId.includes("-")) {
        document.getElementById("studentIdError").innerHTML = "Student ID must contain '-'.";
        isValid = false;
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Email is required.";
        isValid = false;
    }
    else if (!email.includes("@student.aiub.edu")) {
        document.getElementById("emailError").innerHTML = "Email must contain @student.aiub.edu.";
        isValid = false;
    }

    if (credit == "") {
        document.getElementById("creditError").innerHTML = "Credit completed is required.";
        isValid = false;
    }
    else if (Number(credit) < 0 || Number(credit) >= 148) {
        document.getElementById("creditError").innerHTML = "Credit must be between 0 and 147.";
        isValid = false;
    }

    if (department == "") {
        document.getElementById("departmentError").innerHTML = "Department is required.";
        isValid = false;
    }

    
    if (isValid == false) {
        return false;  
    }

    var studentList = document.getElementById("studentList");

    studentList.innerHTML +=
    "<tr>" +
    "<td>" + fname + "</td>" +
    "<td>" + lname + "</td>" +
    "<td>" + studentId + "</td>" +
    "<td>" + email + "</td>" +
    "<td>" + credit + "</td>" +
    "<td>" + department + "</td>" +
    "</tr>";

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("email").value = "";
    document.getElementById("credit").value = "";
    document.getElementById("department").value = "";

    return false;




}