var delButtons = document.getElementsByClassName("delete-btns");

function setOnClick(list, method) {
    for (var i = 0; i < list.length; i++) {
        list[i].onclick = method;
    }
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

setOnClick(delButtons, onloadAlertDel);