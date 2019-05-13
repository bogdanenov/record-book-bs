var selectCntrl = document.getElementsByClassName("form-cntrl");
var selectScale = document.getElementsByClassName("form-scale");
var formList = document.getElementsByClassName("card");
var btnSubmitList = document.getElementsByClassName("btn-set");
var formEval = document.getElementsByClassName("card-eval");
var btnEditEvalList = document.getElementsByClassName("edit-eval");

function resultSelect() {
    for (let i = 0; i < selectCntrl.length; i++) {
        if (this === selectCntrl[i]) {
            if (selectCntrl[i].options[selectCntrl[i].selectedIndex].text === 'Залік')
            {
                selectScale[i].innerHTML = 
                '<option value="" selected disabled>Оберіть значення</option>' + 
                '<option value="1">Зараховано</option>' + 
                '<option value="2">Не зараховано</option>';
            } else {
                selectScale[i].innerHTML = 
                '<option value="" selected disabled>Оберіть значення</option>' + 
                '<option value="1">Відмінно</option>' + 
                '<option value="2">Добре</option>' + 
                '<option value="3">Задовільно</option>' + 
                '<option value="4">Незадовільно</option>';
            }
        }
    }
}

function submitForm() {
    for (let i = 0; i < btnSubmitList.length; i++) {
        if (this === btnSubmitList[i]) {
            formList[i].classList.toggle("enable");
            formEval[i].classList.remove("enable");
            break;
        }
    }
}

function editForm() {
    for (let i = 0; i < btnEditEvalList.length; i++) {
        if (this === btnEditEvalList[i]) {
            formList[i].classList.remove("enable");
            formEval[i].classList.toggle("enable");
            break;
        }
    }
}

for (let i = 0; i < selectCntrl.length; i++) {
    selectCntrl[i].onchange = resultSelect;
}

for (let i = 0; i < btnSubmitList.length; i++) {
    btnSubmitList[i].onclick = submitForm;
}

for (let i = 0; i < btnEditEvalList.length; i++) {
    btnEditEvalList[i].onclick = editForm;
}
