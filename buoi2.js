const { resourceUsage } = require("process");

const ds=[
    {
      witdh: 4,
      height :10
    },
     {
      witdh: 5,
      height : 70
    },
    {
      witdh: 1,
      height : 80
    },
    {
      witdh: 5,
      height : 100
    },
    {
      witdh: 10,
      height :12
    }
  ];
    /*
  -----------------sort --------------------------------------
ds.sort(function(a,b) {return a.witdh-b.witdh});
  for(item of ds)
  {
      console.log(item);
  }
---------------------Reduce-----------------------------------
  let kq = ds.reduce(function(total,item){return total + item.height},0);
  console.log(kq);
----------------------Filter---------------------------------
 var newds = ds.filter(item=>item.witdh>=5);

 ------------------Push new item -----------------------------
 var newitem = new object ;
 newitem.witdh=9;
 newitem.height=15;
 ds.push(newitem);
 for(item of ds)
  {
      console.log(item);
  }
-------------------map---------------------------
function editItem(a)
{
  return{
    witdh: a.witdh *2,
    height: a.height *2,
    sum: a.witdh *2 + a.height *2
  }
}
var newestds = ds.map(editItem);
for(item of newestds)
{
    console.log(item);
}

----------------------splice-----------------------

var aa = new Object;
aa.witdh=9;
aa.height=15;
ds.splice(2,0,aa);
for(item of ds)
{
    console.log(item);
}
----------------count width >=5---------------------------------

var number = ds.filter(item=>item.witdh>=5).reduce(function(count,i){ return count+ 1},0);
console.log(number);

------------------get top max 3---------------------------------
var top3ds = ds.sort(function(a,b){return b.height-a.height}).slice(0,3);
for(item of top3ds)
{
    console.log(item);
}

----------------------remove dupplicate item --------------------------------
var mang=[1,3,2,1,3,4];
var newarr= mang.map(function(value, index, arr){
  if(arr.indexOf(value,index+1)<0){ return value;}
})
for(item of newarr)
{
    console.log(item);
}

----------------------Math power---------------------------------------------
var mang=[1,3,2,1,3,4];
var newarr= mang.map(function(value){
   return Math.pow(value,2);
})
for(item of newarr)
{
    console.log(item);
}  

----------------------Math Average---------------------------------------------
var mang=[8,8,6.75];
function average(arr)
{
    var sum = arr.reduce(function(tong, giatri){
    return tong + giatri
    },0)
    const count= arr.length;
    return sum/count;
}
console.log(Math.round(average(mang)));

------------------------------- Always positive----------------------------------
var mang=[1,4,-3,2,0,-8,-2,9];
function positiveNumber(arr)
{
  var newmang = mang.map(function(value){return Math.abs(value)});
  for(item of newmang)
  {
    console.log(item);
  }
}

positiveNumber(mang);

-------------------------------- Object handler-------------------------------------

function student(name, level)
{
  this.name=name;
  this.level=level;
}
var sta= new student("sdfs","sdfsdf");
student.prototype.school = "KhoaPham";
var stb = new student("bbbb","aaaaa");
console.log(sta );
console.log(sta.school);
console.log(stb.school);

--------------------------------object average--------------------------------------
function student(toan, ly, hoa){
  this.diemtoan=toan;
  this.diemly=ly;
  this.diemhoa=hoa;
  this.trungbinh=function(){
    return Math.round((this.diemtoan +this.diemtoan + this.diemly)/3);
  }
}
let sva= new student(6, 7, 7);
let svb= new student(8, 9, 6);
console.log(sva.trungbinh());
console.log(svb.trungbinh());

-----------------------call back-----------------------------------------------
var numbers=[1,4,6,23,7];
function callback(a)
{
  console.log("values x 2 =" + a*2);
}

function sumanddo(arr,callback)
{
  let sum= arr.reduce(function(total,item){return total + item},0);
  callback(sum);
}
sumanddo(numbers,callback);

---------------------------------------Ternary operator--------------------------------
function doSomething(a) {
  var b;
  if (a > 0) {
    b = 1;
  } else if (a < 0) {
    b = 2;
  } else {
    b = 3;
  }
  return b;
}

function doSomethingTernary(a) {
  let b;
  (a>0)? b =1: (a<0)?b=2:b=3;
  return b;
}
console.log(doSomethingTernary(-2))
console.log(doSomething(-2))


var numbers=[3,5,2,5,7,8,3];
numbers = numbers.reverse();
for(item of numbers)
{
  console.log(item);
}

--------------------------------dao chuoi-----------------------
var str="pham van chien";
var newstr="";
for(var i=str.length-1;i>=0;i--)
newstr+=str[i];
console.log(newstr);

------------------------- viet hoa chu cai dau ----------------------
var name = "pham van chien";
function capitalize(name)
{
var newname="";
for(var i=0;i<name.length;i++)
{
  if(i==0)
  {
     newname+=name[i].toUpperCase();
  }
  else if(name[i-1]==" ")
  {
    newname+=name[i].toUpperCase();
  }
  else
  {
    newname+=name[i];
  }
}
return newname;
}
console.log(capitalize(name));

--------------------get extention file path--------------------------
let firststring = "lich .bay hang. ngay.xslx";


function getExtensionFilename(filename) {
	var index = firststring.lastIndexOf('.')+1;
  var newstring =""
  for(var i=index;i<firststring.length;i++)
  {
    newstring+=firststring[i];
  }	
  return newstring;
}

console.log(getExtensionFilename(firststring));

--------------max of three ---------------------------
function findMax(a,b,c){
		var max=a;
    if(max<b)
    {
       max=b;
    }
    if(max<c)
    {
       max=c;
    }
    return max;
}
console.log(findMax(3,1,9));


var student={
  name:"chien",
  getname:function(){
    console.log("ten toi la "+this.name);
  }
}
student.getname();

var teacher={
  name:"Khoa Pham"
}
var newfnc= student.getname.bind(teacher);
newfnc();
*/
function getkey(object){
  for(item in object)
  {
      if(typeof item === "Object")
      {
      document.writeln(item);
      getkey(object[item]);
      }
      else
      return
  }
}

var student={
  name:"chien",
  class:"1A",
  quequan:{
    diachi:"ha noi",
    hokhau:"ha noi",
    cmtnd:{
      soid:"22222",
      ngaycap:"11/1/2020"
    }
  }
}
console.log(getkey(student));