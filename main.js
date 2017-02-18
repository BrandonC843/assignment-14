var forEach = function(arr, func){
   for(var i = 0 ; i < arr.length; i++){
      func(arr[i], i, arr)
   }
}

document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var number = answerPTagWithValue.textContent
  answerPTagWithValue.textContent = number * 2
})

document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circleEl = document.querySelector('#circle-bw');
  var circleStyles = window.getComputedStyle(circleEl)

  if(circleStyles.backgroundColor === 'rgb(255, 255, 255)'){
      circleEl.style.background = 'rgb(0, 0, 0)'
    } else {
     circleEl.style.background = "rgb(255, 255, 255)"
    }
})


document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4
  // part 1!!!! get current integer value of .circle-red
  // sect cirlce element
  // get pixel value of width and height of (circle-red)
  // convert pixel value into an integer

  var circleElement = document.querySelector(".circle-red")

  var circleStyles = window.getComputedStyle(circleElement)
   var circleWidth = circleStyles.width
   var circleHeight = circleStyles.height

   var heightNumberValue = parseInt(circleHeight)
   var widthNumberValue = parseInt(circleWidth)

   var nextWidth = 0

   // PART 2 CHECK TO SEE IF INTEGER-HEIGHT/WIDTH >=320
   //    1.IF INTEGER WIDTH IS >= 320
   //    2. THEN MULTIPLY INTGER BY 2
   //    3. CONVERT INTEGER WIDTH TO PX string
   //    4. SET .CIR-RED.STYLE.WIDTH = "XXpx" strings
      // else
            // ASSIGN CIRCLE-RED.STYLE.WIDTH & .STYLE.HEIGHT= '40PX' STRING

   //
      if( widthNumberValue < 320){
         nextWidth = widthNumberValue * 2;
         circleElement.style.width = nextWidth + "px";
         circleElement.style.height = nextWidth + "px";
      } else {
         circleElement.style.width = "40px"
         circleElement.style.height ="40px"

      }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
 // 1. select all the <li> elements under #user-list
 // 2. iterate over <li> elements
 // 3. on each iteration, check the .className on the DOM element
 //   to see if has a value of 'active'
 // 4. if the DOM element has a class of "active", we need to append to a string
 // 5. When finished with iteration, inject large string as .innerHTML
      // to user-list container


      var userListEls = document.querySelectorAll('#user-list li')
      var userListContainerEl = document.querySelector('#user-list')

       var largeHtmlString = ''

       forEach(userListEls, function(domElement, index, theArray){
		if( domElement.className.indexOf('inactive') >= 0 ){
			userListContainerEl.removeChild(domElement)
		 }
    })
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var squareElement = document.querySelectorAll('.square')
  var newSquareElement = document.querySelector('#reverse-squares .answer-box')
  for ( var i = squareElement.length - 1 ; i >= 0; i-- ) {
    newSquareElement.appendChild(squareElement[i])
 }
})

// 1. select all elements that are .square w/ quearySelectorAll()
// 2. iterate over elements backwards for (var i = 1; allSquares.length -1 ; i >= 0; i--)
// 3. select #reverse-squares .answer-box and .appendChild(squareDomElement)


document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  // task 1.
  var wordSwap = document.querySelector('#tasks');
  var wordSwapElement = document.querySelectorAll('#tasks li');

   var aNewArray = [];
   var aNewString = '';
   var yetAnotherString = '';

// tasks 2 & 3
   forEach(wordSwapElement, function(list, index1, array1){
     aNewString = list.innerHTML;

     var secondArray = aNewString.split('');
     var reversedArray = secondArray.reverse();
      var lastArray = reversedArray.join('');
     aNewArray.push(lastArray);
   });

// task 4:
   forEach(array2, function(domElement, Index2, array2){
     yetAnotherString += '<li>' + domElement + '</li>';
    });
    wordSwap.innerHTML = yetAnotherString;
 })

// 1. select all #tasks li elements w/ querySelectorAll()
// 2. loop over each li element (for each)
// 3. inside of for-loop store the value of the reversed string into a variable
      // to reverse string split the string into an array of characters,
      //  then reverse the array
      // join the now reversed array back to the string
// 4. inside of for-loop set DOMElement.innerHTML to the variable containing reversed string

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
