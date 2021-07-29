function SortArray(input)
{
  this.originalArray=input;
  this.getSortedArray=function()
  {
    this.sorting();
    return this.originalArray;
  };
  this.sorting=()=>
  {
    this.originalArray.sort();
  };
}
function SortObjectsArray(input)
{
  SortArray.call(this,input);
  this.originalArray=input;
  this.getSortedArray=function(key)
  {
    this.sorting(key);
    return this.originalArray;
  };
  this.sorting=(key)=>
  {
    this.originalArray.sort(function(o1,o2)
    {
      return o1[key]-o2[key];
    });
  };
}
let a=new SortArray([5,6,7,2,3,1,0]);
console.log(a.getSortedArray());
let a1=new SortObjectsArray([{n:1},{n:3},{n:2}]);
let key='n';
console.log(a1.getSortedArray(key));