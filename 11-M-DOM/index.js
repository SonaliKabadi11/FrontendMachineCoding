const findMatchingElement = (container1, container2, targetElement) => {
    

    //code here
    }
    // When Target element exists in container1
    const positiveResult = findMatchingElement(
     document.getElementById("container1"),
     document.getElementById("container2"),
     document.getElementById("span-id")
    );
    console.log("Positive Result:", positiveResult.textContent);
    //Test2
    // When Target element does not exist in container2
    const negativeResult = findMatchingElement(
     document.getElementById("container1"),
     document.getElementById("container2"),
     document.getElementById("span-id-2")
    );
    console.log("Negative Result:", negativeResult);