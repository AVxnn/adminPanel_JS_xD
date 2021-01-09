const password = 'admin'

let storage = {};
storage.name = [];
storage.price = [];

$(document).ready(function(){
    if (localStorage.getItem('storageName')){
        let storageName = localStorage.getItem('storageName');
        let storagePrice = localStorage.getItem('storagePrice');
        let name = storageName.split(',');
        let price = storagePrice.split(',');
        storage.name = name;
        storage.price = price;
        console.log(storageName)
        for (let i = 0; i < storage.name.length; i++){
            $('#item' + i).text(name[i]);
            $('#price' + i).text(price[i] + ' рублей');
        }
        console.log(storage.name);
    }
})


$("#btn").click(function(){
    let password_val = $("#login").val();
    if (password_val === password){

        $('.nav').css('display', 'none')
        $('.form').css('display', 'block')
    } else {
        $("#login").val('');
        $("#login").attr('placeholder', 'Пароль неверный');
    }
})




let lname = storage.name.length;
let lprice = storage.price.length;

$('#btn_form').click(function(){
    let name_ = $('#form').val();
    let price_ = $('#form_price').val();

    if (name_ === '' || price_ === ''){
        if (name_ === ''){
            $("#form").attr('placeholder', 'Заполните поле');
        }
        if (price_ === ''){
            $("#form_price").attr('placeholder', 'Заполните поле');
        }
        return;
    }

    lname = storage.name.push(name_);
    lprice = storage.price.push(price_);
    lname--;
    lprice--;
    $('#item' + lname).text(name_);
    $('#price' + lprice).text(price_ + ' рублей');
    localStorage.setItem('storageName', storage.name)
    localStorage.setItem('storagePrice', storage.price)
})


$('#btn_delete').click(function(){
    let id = $('#form_delete').val();
    let ida = 1;
    id--;
    if (!id === '1'){
        ida = id;
    }

    storage.name.splice(id, ida);
    storage.price.splice(id, ida);

    $('#item' + storage.name.length).text('Название');
    $('#price' + storage.name.length).text('Цена');

    localStorage.setItem('storageName', storage.name)
    localStorage.setItem('storagePrice', storage.price)

    for (let i = 0; i < storage.name.length; i++){
        $('#item' + i).text(storage.name[i]);
        $('#price' + i).text(storage.price[i] + ' рублей');
    }


})