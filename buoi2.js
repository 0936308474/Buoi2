
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

*/