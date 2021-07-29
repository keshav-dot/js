function Item()
{
  this._version;
  this._channel;
  this._keyField;
  this.getVersion=function()
  {
    return this._version;
  };
  this.setVersion=function(version)
  {
    this._version=version;
  }
  this.getChannel=function()
  {
    return this._channel;
  };
  this.setChannel=function(channel)
  {
    this._channel=channel;
  }
  this.getKeyField=function()
  {
    return this._keyField;
  };
  this.setKeyField=function(keyField)
  {
    this._keyField=keyField;
  }
}
let MetadataParser=new Item();
/*Object.defineProperty(MetadataParser,"getVersion",
{
  get : function()
  {
    return this._version;
  }
});
Object.defineProperty(MetadataParser,"setVersion",
{
  set : function(version)
  {
    this._version=version;
  }
});
Object.defineProperty(MetadataParser,"getChannel",
{
  get : function()
  {
    return this._channel;
  }
});
Object.defineProperty(MetadataParser,"setChannel",
{
  set : function(channel)
  {
    this._channel=channel;
  }
});
Object.defineProperty(MetadataParser,"getKeyField",
{
  get : function()
  {
    return this._keyField;
  }
});
Object.defineProperty(MetadataParser,"setKeyField",
{
  set : function(keyField)
  {
    this._keyField=keyField;
  }
});
*/
let data=[];
MetadataParser.setVersion('1.0');
MetadataParser.setChannel('A');
MetadataParser.setKeyField('abc');
data.push(MetadataParser);
MetadataParser=new Item();
MetadataParser.setVersion('1.0');
MetadataParser.setChannel('B');
MetadataParser.setKeyField('abc1');
data.push(MetadataParser);
MetadataParser=new Item();
MetadataParser.setVersion('1.0');
MetadataParser.setChannel('C');
MetadataParser.setKeyField('abc2');
data.push(MetadataParser);
MetadataParser=new Item();
MetadataParser.setVersion('2.0');
MetadataParser.setChannel('A');
MetadataParser.setKeyField('abc3');
data.push(MetadataParser);
console.log(data);
let channels=[{channel:'A'},{channel:'B'},{channel:'C'}];
let keyFields=[];
channels.forEach(function (channel)
{
  data.forEach(function(d)
  {
    if(d.getChannel()===channel['channel'])
    {
      keyFields.push(d.getKeyField());
    }
  })
}
);
console.log(keyFields);