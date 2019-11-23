function passwordCheck(ID) {
    let id = `#${ID}`;
    if ($(id).val().length > 0) {
        let firstSinvol = $(id).val().charCodeAt(0);
        if (firstSinvol >= 65 && firstSinvol <= 90) {
        } else {
            ErrorMessage(id, "Parolun ilk hərfi boyuk olmalıdır!");
            return false;
        }
    } else {
        ErrorMessage(id, "Parolu daxil edin");
        return false;
    }
    if ($(id).val().length < 8) {
        ErrorMessage(id, "Parol ən az 8 simvoldan ibarət olmalıdır!");
        return false;
    }
    return true;
}


function ErrorMessage(ID, message) {
    $(ID).after(`
    <div class="errorM">
    <span class="errorMessage">* ${message}</span>
    </div>
    `);
}

$("input").focus(() => {
    let erroemessages = $(".errorM");
    for (let item of erroemessages) {
        item.remove();
    }
    $('input[type=submit]').removeAttr("disabled");
})
//
function checkRegExpres(ID, regularEx, message) {
    let reg = new RegExp(regularEx, 'gm');
    if (!reg.test($(`#${ID}`).val())) {
        ErrorMessage(`#${ID}`, message);
        return false;
    }
    return true;
}
function checkInputEmpty(){
    let inputs = $('input');
    for(let item of inputs ){
        if($(item).val()==" "){
            return false;
        }
    }
    return true;
}


