$(document).ready(function () {
    $("table").hide()
    //Events
    $("form").submit(Objection)
    //Functions
    function Objection(event){
        event.preventDefault()
        var studentGrade={
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            pointsEarned: $("#pointsEarned").val(),
            pointsPossible: $("#pointsPossible").val()
        }
        $("#firstOutput").text(studentGrade.firstName)
        $("#lastOutput").text(studentGrade.lastName)
        var letterGrade
        var percentGrade = studentGrade.pointsEarned/studentGrade.pointsPossible * 100
        $("#percentScore").text(percentGrade.toFixed(2) + "%")
        if(percentGrade < 60){
            letterGrade = "F"
        }
        else if(percentGrade >= 60 && percentGrade < 63){
            letterGrade = "D-"
        }
        else if(percentGrade >= 63 && percentGrade < 67){
            letterGrade= "D"
        }
        else if(percentGrade >= 67 && percentGrade < 70){
            letterGrade = "D+"
        }
        else if(percentGrade >= 70 && percentGrade < 73){
            letterGrade = "C-"
        }
        else if(percentGrade >= 73 && percentGrade < 77){
            letterGrade = "C"
        }
        else if(percentGrade >= 77 && percentGrade < 80){
            letterGrade = "C+"
        }
        else if(percentGrade >= 80 && percentGrade < 83){
            letterGrade = "B-"
        }
        else if(percentGrade >= 83 && percentGrade < 87){
            letterGrade = "B"
        }
        else if(percentGrade >= 87 && percentGrade < 90){
            letterGrade = "B+"
        }
        else if(percentGrade >= 90 && percentGrade < 93){
            letterGrade = "A-"
        }
        else{
            letterGrade = "A"
        }
        $("#letterScore").text(letterGrade)
        $("table").show()
    }
}
)