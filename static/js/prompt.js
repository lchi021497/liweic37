function prompt_add_name() {
    var new_name = window.prompt("輸入新產品名字：");
   
    $("#addName").attr("value", new_name);
    $("#addForm").submit();
}

function prompt_del_name() {
    var del_name = window.prompt("輸入要移除產品的名字：");

    $("#delName").attr("value", del_name)
    $("#delForm").submit()
}