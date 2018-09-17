/**
 * Created by Administrator on 2018/9/17 0017.
 */
/*
$(function() {
    var currentColor = '#3c3';
    var unfinishedColor = '#b9b9b9';
    var finishedColor = '#85e085';

    $('#start').click(function() {
        $(this)
            .css('background-color', currentColor)
            .next('span').css('color', currentColor)
            .parent('div').prev('div.progress-line').css('background-color', unfinishedColor)

        $('#second')
            .css('background-color', unfinishedColor)
            .next('span').css('color', unfinishedColor)
            .parent('div').prev('div.progress-line').css('background-color', unfinishedColor)

        $('#third')
            .css('background-color', unfinishedColor)
            .next('span').css('color', unfinishedColor)
            .parent('div').prev('div.progress-line').css('background-color', unfinishedColor)

        $('#end')
            .css('background-color', unfinishedColor)
            .next('span').css('color', unfinishedColor)
    })

    $('#second').click(function() {
        $(this)
            .css('background-color', currentColor)
            .next('span').css('color', currentColor)
            .parent('div').prev('div.progress-line').css('background-color', unfinishedColor)

        $('#start')
            .css('background-color', finishedColor)
            .next('span').css('color', finishedColor)
            .parent('div').prev('div.progress-line').css('background-color', currentColor)

        $('#third')
            .css('background-color', unfinishedColor)
            .next('span').css('color', unfinishedColor)
            .parent('div').prev('div.progress-line').css('background-color', unfinishedColor)

        $('#end')
            .css('background-color', unfinishedColor)
            .next('span').css('color', unfinishedColor)
    })

    $('#third').click(function() {
        $(this)
            .css('background-color', currentColor)
            .next('span').css('color', currentColor)
            .parent('div').prev('div.progress-line').css('background-color', unfinishedColor)

        $('#start')
            .css('background-color', finishedColor)
            .next('span').css('color', finishedColor)
            .parent('div').prev('div.progress-line').css('background-color', finishedColor)

        $('#second')
            .css('background-color', finishedColor)
            .next('span').css('color', finishedColor)
            .parent('div').prev('div.progress-line').css('background-color', currentColor)

        $('#end')
            .css('background-color', unfinishedColor)
            .next('span').css('color', unfinishedColor)
    })

    $('#end').click(function() {
        $(this)
            .css('background-color', currentColor)
            .next('span').css('color', currentColor)

        $('#start')
            .css('background-color', finishedColor)
            .next('span').css('color', finishedColor)
            .parent('div').prev('div.progress-line').css('background-color', finishedColor)

        $('#second')
            .css('background-color', finishedColor)
            .next('span').css('color', finishedColor)
            .parent('div').prev('div.progress-line').css('background-color', finishedColor)

        $('#third')
            .css('background-color', finishedColor)
            .next('span').css('color', finishedColor)
            .parent('div').prev('div.progress-line').css('background-color', currentColor)
    })
})
*/

$(function () {
    //progress: 进度, progressing: 进行中，progressed: 已结束

    $('.progress-number').click(function () {
        var index = $(this).parents('.progress').index();
        $(this).parents('.progress').addClass('progressing').prevAll().removeClass('progressing').addClass('progressed')
        $('.step_content').children('.step').eq(index).addClass('step_active').siblings().removeClass('step_active')
        $(this).parents('.progress').addClass('progressing').removeClass('progressed').nextAll().removeClass('progressing').removeClass('progressed')


    })

    // var Progress = new Promise(function (resolve, reject) {
    //     resolve('成功');
    // })
    // Progress.then(function () {
    //     $('.progress-one').addClass('progressing')
    // }).then($('.progress-two').addClass('progressing'))

})