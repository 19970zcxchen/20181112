window.onload=function () {


    var useName = document.getElementById("useName");
    var psw = document.getElementById("psw");
    var psw2 = document.getElementById("psw2");
    var emails = document.getElementById("emails");
    var phone = document.getElementById("phone");
    var postcode = document.getElementById("postcode");
    var id = document.getElementById("id");

    useName.onblur = function () {
        var result = this.value.match(/[\w]{6,14}/);
        if (result == null) {
            document.getElementById("one").innerText = "用户名不符合规定";
        } else {
            document.getElementById("one").innerText = "√";
        }
    }
    psw.onblur=function () {
        var result = this.value.match(/[\w]{6,14}/);
        if(result==null){
            document.getElementById("two").innerText="密码格式不符合规范";
        }else {
            document.getElementById("two").innerText="√";
        }
    }
    psw2.onblur=function () {
        var psw2value=psw.value;
        if(psw2value!=this.value){
            document.getElementById("three").innerText="两次密码不一致";
        }else {
            document.getElementById("three").innerText = "密码一致";
        }
    }
    emails.onblur=function () {
        var result = this.value.match(/[a-z0-9A-Z]{5,11}(@163|@qq|@126)(\.com|\.cn|\.org)/);
        if(result==null){
            document.getElementById("four").innerText="输入格式不符合规范";
        }else{
            document.getElementById("four").innerText="√";
        }
    }
    phone.onblur=function () {
        var result = this.value.match(/\+86[0-9]{11}/);
        if(result==null){
            document.getElementById("five").innerText="输入格式不符合规范";
        }else{
            document.getElementById("five").innerText="√";
        }
    }
    postcode.onblur = function(){
        var result = this.value.match(/[0-9]{6}/);
        if (result == null){
            document.getElementById("six").innerText="邮政编码不符合规则";
        }else{
            document.getElementById("six").innerText="√";
        }
    }
    id.onblur = function() {
        var result = this.value.match(/[0-9]{17}(x|([0-9]{1}))/);
        if (result == null) {
            document.getElementById("seven").innerText = "身份证号不符合规则";
        } else {
            document.getElementById("seven").innerText = "√";
        }
    }
}