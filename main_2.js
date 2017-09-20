function tryExp() {
    if ($(".cbox_1").is(":checked") && $(".cbox_2").is(":checked")) {
        $("#tree_2").css("display", "block")
    }
}

function tryExp2() {
    if ($(".cbox_3").is(":checked") && $(".cbox_4").is(":checked")&&$(".cbox_5").is(":checked")) {
        $("#tree_3").css("display", "block")
    }
}


function form1(){
    $("iframe").attr("src","page_2-2.html")
    .css("width","400px")
    .css("height","300px");
}

function form2(){
    $("iframe").attr("src","https://school.taipeifubon.com.tw/student/")
    .css("width","1200px")
    .css("height","900px");
}

function form3(){
    $("iframe").attr("src","https://mis.cc.ntu.edu.tw/reg/")
    .css("width","1200px")
    .css("height","900px");
}

function finish(){
    alert("您已完成學雜費繳費流程");
}