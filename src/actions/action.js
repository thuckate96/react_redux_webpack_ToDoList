function addItem(item){
  return {type: 'ADD_ITEM', item}
}

function remove(index){
  return {type: "REMOVE_ITEM", index}
}

function toggle(){
  return {type: "TOGGLE_IS_ADDING"}
}

module.exports = {addItem, remove, toggle}
