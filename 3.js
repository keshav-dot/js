function groupObjectsBy(array,k)
{
  let f={};
  array.forEach(function(a)
  {
    if(f[a[k]])
    {
      f[a[k]].push(a);
    }
    else
    {
      f[a[k]]=[];
      f[a[k]].push(a);
    }
  });
  console.log(f);
  return f;
}
groupObjectsBy([
  {
    "channel": "A",
    "name": "shoe"
  },
  {
    "channel": "A",
    "name": "electronics"
  },
  {
    "channel": "B",
    "name": "apparel"
  },
  {
    "channel": "C",
    "name": "electronics"
  }
], "channel")