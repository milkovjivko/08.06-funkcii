function signCheck(numOne, numTwo, numThree) {

    let result = 0;

    if (result < numOne * numTwo * numThree) {
        console.log("Positive");
    } else if (result > numOne * numTwo * numThree) {
        console.log("Negative");
    }

}
signCheck(-5, 1, 1)