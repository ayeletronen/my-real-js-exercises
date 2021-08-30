/*You are given an array of a student's grades during the school year. Your task is to compute the following statistics:
-The range of the grades (difference between highest and lowest)
-The median grade (the grade in the middle)
-The range of the grades from the second half of the school year*/

const grades = [73, 91, 100, 56, 62, 84, 95, 96, 88, 92]

function range(gradesArray) {
    let gradesInNumbers = gradesArray.slice();
    let maxGrade = Math.max(...gradesInNumbers);
    let minGrade = Math.min(...gradesInNumbers);
    let rangeOf = ((maxGrade) - (minGrade));
    return rangeOf;
}
function medianNumber(gradesArray) {
    let gradesInNumbers = gradesArray.slice();
    gradesInNumbers.sort(function(a,b){return a-b});
    let x = Math.floor(gradesInNumbers.length/2);
    return gradesInNumbers[x];
}
function halfYear(gradesArray){
    let x = Math.floor(gradesArray.length/2);
    let gradesInNumbers = gradesArray.slice(x);
    
    return range(gradesInNumbers);
}

console.log("Stats:\nRange: " + range(grades) + "\nMedian: " + medianNumber(grades) + "\nHalf Range: " + halfYear(grades));

/*The output of your code (what console.log prints) should be in the following format (notice the line-breaks and indentation):
Stats:
    Range: 40
    Median: 88
    Half Range: 12
Test your code on different arrays of different sizes.
Separate your code into functions! Avoid code duplication!

Submit this code through your JS GitHub repo. Split your work into several commits.*/