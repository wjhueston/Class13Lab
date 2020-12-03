$(document).ready(function () {
    $("table").hide()
    //Events
    $("form").submit(Objection)
    //Function
    var studentArray = []
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

        //New student objects here
        var studentArrayObj ={
            first: studentGrade.firstName,
            last: studentGrade.lastName,
            percentScore: percentGrade,
            letterScore: letterGrade
        }

        studentArray.push(studentArrayObj);


        var arrayTable = document.getElementById("arrayTable")

        $("#arrayTable tbody").children().remove()
        var header = arrayTable.insertRow(0)
        var headerCell1 = header.insertCell(0)
        var headerCell2 = header.insertCell(1)
        var headerCell3 = header.insertCell(2)
        var headerCell4 = header.insertCell(3)
        headerCell1.innerHTML = "First Name"
        headerCell2.innerHTML = "Last Name"
        headerCell3.innerHTML = "Percent Score"
        headerCell4.innerHTML = "Letter Grade"
        studentArray.forEach(arrayReadout)
        function arrayReadout(item, index){
            var row = arrayTable.insertRow(index+1)
            var cell1 = row.insertCell(0)
            var cell2 = row.insertCell(1)
            var cell3 = row.insertCell(2)
            var cell4 = row.insertCell(3)
            cell1.innerHTML = item.first
            cell2.innerHTML = item.last
            cell3.innerHTML = item.percentScore.toFixed(2) + "%"
            cell4.innerHTML = item.letterScore
        }
        $("table").show()
        $("#sortbyName").show();
        $("#sortbyPercent").show();


    }
        $("#sortbyName").click(SortByName)

        function SortByName(){
            function NameSort(student1, student2){
                if(student1.last < student2.last) return -1;
                if(student1.last > student2.last) return 1;
                return 0;
            }
            studentArray.sort(NameSort);
            var arrayTable = document.getElementById("arrayTable")

            $("#arrayTable tbody").children().remove()
            var header = arrayTable.insertRow(0)
            var headerCell1 = header.insertCell(0)
            var headerCell2 = header.insertCell(1)
            var headerCell3 = header.insertCell(2)
            var headerCell4 = header.insertCell(3)
            headerCell1.innerHTML = "First Name"
            headerCell2.innerHTML = "Last Name"
            headerCell3.innerHTML = "Percent Score"
            headerCell4.innerHTML = "Letter Grade"
            studentArray.forEach(arrayReadout)
            function arrayReadout(item, index){
                var row = arrayTable.insertRow(index+1)
                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3)
                cell1.innerHTML = item.first
                cell2.innerHTML = item.last
                cell3.innerHTML = item.percentScore.toFixed(2) + "%"
                cell4.innerHTML = item.letterScore
            }
        }
        $("#sortbyPercent").click(SortByPercent)
        function SortByPercent(){
            function PercentSort(student1, student2){
                if(student1.percentScore < student2.percentScore) return -1;
                if(student1.percentScore > student2.percentScore) return 1;
                return 0
            }
            studentArray.sort(PercentSort)
            var arrayTable = document.getElementById("arrayTable")

            $("#arrayTable tbody").children().remove()
            var header = arrayTable.insertRow(0)
            var headerCell1 = header.insertCell(0)
            var headerCell2 = header.insertCell(1)
            var headerCell3 = header.insertCell(2)
            var headerCell4 = header.insertCell(3)
            headerCell1.innerHTML = "First Name"
            headerCell2.innerHTML = "Last Name"
            headerCell3.innerHTML = "Percent Score"
            headerCell4.innerHTML = "Letter Grade"
            studentArray.forEach(arrayReadout)
            function arrayReadout(item, index){
                var row = arrayTable.insertRow(index+1)
                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)
                var cell3 = row.insertCell(2)
                var cell4 = row.insertCell(3)
                cell1.innerHTML = item.first
                cell2.innerHTML = item.last
                cell3.innerHTML = item.percentScore.toFixed(2) + "%"
                cell4.innerHTML = item.letterScore
            }
        }
}
)