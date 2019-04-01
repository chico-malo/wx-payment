/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-04-01
 */
(function () {
    console.log('start');
    var exampleFormControlClass = document.getElementById('exampleFormControlClass');
    var exampleInputStudentMoney = document.getElementById('exampleInputStudentMoney');
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function () {
        console.log('submit');
        $('#exampleModal').modal('show');
        console.log(exampleInputStudentMoney.value, exampleFormControlClass.value);
    });
})();

