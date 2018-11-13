window.onload=function () {
    // document.onclick=function () {
    //     alert("点击")
    // }
    // document.getElementById("son").onclick=function () {
    //     alert("我是son");
    //     event.cancelBubble = true;
    // }
    // document.getElementById("father").onclick=function () {
    //     alert("我是father");
    // }
    // document.getElementById("ground-father").onclick=function () {
    //     alert("我是ground-father");
    // }
    document.getElementById("message").style.display="none";
    document.getElementById("bt1").onclick=function () {
        document.getElementById("message").style.display="block";
        event.cancelBubble=true;
    }
    document.onclick=function (){
        document.getElementById("message").style.display="none";
        console.log("横坐标:"+event.clientX);
        console.log("纵坐标:"+event.clientY);
    }





}