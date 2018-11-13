window.onload=function () {
    var ps=document.getElementById("pros");
    var shi1=document.getElementById("shi");
    var qus=document.getElementById("qu");


    var pros = ["河北省","山西省"];
    var shi = [
        ["唐山市","保定市","邯郸市"],
        ["太原","运城","大同"]
    ]
    var qu=[
        [
            ["丰南区","路北区","路南区"],
            ["莲池区","北市区","徐水"],
            ["魏县","涉县"]
        ],
        [
            [
                ["太原1","太原2","太原3"],
                ["运城1","运城2","运城3"],
                ["大同1","大同2"]
            ]
        ]
    ]


    /*
    抽象添加select方法
     */
    function addArea(arr,sel) {
        if(arr.length>0){
            for (var i=0;i<arr.length;i++){
                var option = new Option(arr[i],i);
                sel.appendChild(option);
            }
        }

}
    addArea(pros,ps);
    var middleArr;
    /**
     * 改变省市的下拉框之后追加到city里
     */
    ps.onchange =function () {
        shi1.options.length=1;
        var index=this.value;
        if(index!=-1){
            var arr = shi[index];
            middleArr=qu[index];
            addArea(arr,shi1)
        }

    }
    /**
     * 改变shi时候追加区域
     */
    shi1.onchange=function () {
           qus.options.length=1;
           var index = this.value;
           if(index !=-1)
           {
               var as = middleArr[index];
               addArea(as,qus)
           }


    }
}