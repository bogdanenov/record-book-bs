var btnSortList = document.getElementsByClassName("btn-sort");
var arrowList = document.getElementsByClassName("sort-arrow");
var counterDate = 0;
var counterEval = 0;

function setSortArrowDate() {
    counterEval = 0;
    if(btnSortList[0] == this) {
        if(!arrowList[2].classList.contains("disable-arrow"))
        {
            arrowList[2].classList.toggle("disable-arrow");
        }
        if(!arrowList[3].classList.contains("disable-arrow"))
        {
            arrowList[3].classList.toggle("disable-arrow");
        }
        counterDate++;
        if(counterDate == 1){
            if(!arrowList[1].classList.contains("disable-arrow"))
            {
                arrowList[1].classList.toggle("disable-arrow");
            }
            arrowList[0].classList.remove("disable-arrow");
        } else if (counterDate == 2) {
            if(!arrowList[0].classList.contains("disable-arrow"))
            {
                arrowList[0].classList.toggle("disable-arrow");
            }
            arrowList[1].classList.remove("disable-arrow");
        } else {
            counterDate = 0;
            if(!arrowList[0].classList.contains("disable-arrow"))
            {
                arrowList[0].classList.toggle("disable-arrow");
            }
            if(!arrowList[1].classList.contains("disable-arrow"))
            {
                arrowList[1].classList.toggle("disable-arrow");
            }
        }
    } 
}

function setSortArrowEval() {
    counterDate = 0;
    if(btnSortList[1] == this) {
        if(!arrowList[0].classList.contains("disable-arrow"))
        {
            arrowList[0].classList.toggle("disable-arrow");
        }
        if(!arrowList[1].classList.contains("disable-arrow"))
        {
            arrowList[1].classList.toggle("disable-arrow");
        }
        counterEval++;
        if(counterEval == 1){
            if(!arrowList[3].classList.contains("disable-arrow"))
            {
                arrowList[3].classList.toggle("disable-arrow");
            }
            arrowList[2].classList.remove("disable-arrow");
        } else if (counterEval == 2) {
            if(!arrowList[2].classList.contains("disable-arrow"))
            {
                arrowList[2].classList.toggle("disable-arrow");
            }
            arrowList[3].classList.remove("disable-arrow");
        } else {
            counterEval = 0;
            if(!arrowList[2].classList.contains("disable-arrow"))
            {
                arrowList[2].classList.toggle("disable-arrow");
            }
            if(!arrowList[3].classList.contains("disable-arrow"))
            {
                arrowList[3].classList.toggle("disable-arrow");
            }
        }
    } 
}

btnSortList[0].addEventListener('click', setSortArrowDate);
btnSortList[1].addEventListener('click', setSortArrowEval);
