
/**使用array关键字 */
// var beatles=Array(2);
// beatles[0]="john";
// beatles[1]="paul";

/**使用[]字面量 */
//var beatles=["john","paul"];

/**可以赋值变量 */
// var name="paul";
// var beatles=Array(2);
// beatles[0]="john";
// beatles[1]=name;

/**可以赋值数组 */
// var names=["john","paul"];
// var beatles=Array(2);
// beatles[0]=names;

//传统数组是指默认从0开始，下标依次累加的数组
//关联数组是指通过给每个元素提供下标来改变传统数组默认行为

//==只比较转换后的数值，===比较类型和数值
// if(false==""){
//     alert("beatles1");
// }

// if(false===""){
//     alert("beatles2");
// }

/**函数作用域 */
// function square(num){
//     var total=num*num;  //total 如果没有加var,则为全局作用域。
//     return total;
// }
// var total=55;
// var number=square(20);
// alert(total);
// alert(number);

var Person=new Object();
Person.name="苏景阳";
Person.age=27;
Person.walk=function(){
    alert("苏景阳在走路");
}

let yaoming=new Person();


person.walk();

yaoming.walk();










