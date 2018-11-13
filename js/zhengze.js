//全局搜索
var pattern =/box/ig;
var str ='This is a Box!,This is a Box too,This is a Box!';
//匹配到两个Box，Box
alert(str.match(pattern));
//获取数组的长度/box的个数
alert(str.match(pattern).length);

//用replacement替换pattern
var pattern =/box/ig;
var str ='This is a Box!,This is a Box too';
alert(str.replace(pattern,'TOM'));