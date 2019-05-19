var addButton = document.getElementById("add");
var editButtons = document.getElementsByClassName("edit-btns");
var delButtons = document.getElementsByClassName("delete-btns");
var textInfo = document.getElementsByClassName("name-inst");

addButton.addEventListener('click', function() {
    Swal.fire({
        title: 'Додати запис',
    html:
    '<input id="input" class="swal2-input">' +
    '<select id="select" class="swal2-input">' +
    '<option disabled>Оберіть варіант</option> <option>1</option> <option>2</option> </select>',
    focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Дадати',
        cancelButtonText: 'Відмінити',
        showLoaderOnConfirm: true
      });
});

function setOnClick(list, method) {
    for (var i = 0; i < list.length; i++) {
        list[i].onclick = method;
    }
}

function onloadAlertAdd() {
    let text = '';
    for (var i = 0; i < editButtons.length; i++) {
        if(editButtons[i] == this) {
            text = textInfo[i].textContent;
        }
    }
    Swal.fire({
        title: 'Редагування запису',
        html:
    '<input id="input" class="swal2-input" value="'+text+'" >' +
    '<select id="select" class="swal2-input">' +
    '<option disabled>Оберіть варіант</option> <option>1</option> <option>2</option> </select>',
    focusConfirm: false,
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Редагувати',
        cancelButtonText: 'Відмінити',
        showLoaderOnConfirm: true
      });
}

function onloadAlertDel() {
    Swal.fire({
        title: 'Ви впевнені?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Видалити',
        cancelButtonText: 'Відмінити'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

setOnClick(editButtons, onloadAlertAdd);
setOnClick(delButtons, onloadAlertDel);