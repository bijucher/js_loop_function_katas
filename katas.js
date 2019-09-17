(function () {


    function oneThroughTwenty() {
        const numbers = []

        // Your code goes below
        for (let i = 1; i <= 20; i++) {
            numbers.push(i)
        }
        return numbers;
    }

    console.log(oneThroughTwenty());

    function evensToTwenty() {
        const numbers = []

        // Your code goes below
        for (let i = 1; i <= 20; i++) {
            if (i % 2 == 0) {
                numbers.push(i)

            }
        }
        return numbers;
    }

    console.log(evensToTwenty())


    function oddsToTwenty() {
        const numbers = []

        // Your code goes below
        for (let i = 0; i <= 20; i++) {
            if (i % 2 == 1) {
                numbers.push(i)
            }
        }

        return numbers;
    }
    console.log("odds")
    console.log(oddsToTwenty())



    function multiplesOfFive() {
        const numbers = []

        // Your code goes below
        for (let i = 5; i <=100; i +=5) {
            numbers.push(i)

        
        }

        return numbers;
    }

    console.log(multiplesOfFive())

    function squareNumbers() {
        const numbers = []

        // Your code goes below
        for (let i = 1; i <=100; i += 1) {
            if(Math.sqrt(i) % 1 === 0){
                numbers.push(i)
            }
            

        
        }

        return numbers;
    }

    console.log(squareNumbers())

    function countingBackwards() {
        const numbers = []

        // Your code goes below
        for (let i = 20; i >= 1; i--) {
            numbers.push(i)
        }

        return numbers;
    }
    console.log(countingBackwards())

    function evenNumbersBackwards() {
        const numbers = []

        // Your code goes below

        

        return numbers;
    }
    console.log(evenNumbersBackwards())

    function oddNumbersBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }
    console.log(oddNumbersBackwards())

    function multiplesOfFiveBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }
    console.log(multiplesOfFiveBackwards())

    function squareNumbersBackwards() {
        const numbers = []

        // Your code goes below

        return numbers;
    }
    console.log(squareNumbersBackwards())

})();