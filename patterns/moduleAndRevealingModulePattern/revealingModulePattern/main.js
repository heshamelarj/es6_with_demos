const ItemCtrl = (function(){
  let _data = [];
  function _add(item){
    _data.push(item);
    console.log(`${item} added ...`);
    
  }
  function _delete(item){
    _data.splice(_data.indexOf(item),1);
    console.log(`${item} deleted`);
    console.log(`${_data.length} Items left`);
    
  }
  function _list(){
    _data.forEach(item => {
      console.log(item);
      
    })
  }
  //public part or revealing part
  return {
    add : _add,
    deleted : _delete,
    list : _list
  }
})()

ItemCtrl.add(1);
ItemCtrl.add(2);
ItemCtrl.add(3);
ItemCtrl.add(4);
console.log('\n');

ItemCtrl.deleted(3);
console.log('\n');

ItemCtrl.list();
