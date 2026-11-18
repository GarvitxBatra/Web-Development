function checkResult(marks,passingMarks){
    if (marks >= passingMarks){
        return "Pass";
    }
    else{
        return "Fail";
    }
}

console.log(checkResult(65, 40));

