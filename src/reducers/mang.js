var mangReducer = (state=["Android", "IOS", "NodeJs"], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item]
    case "REMOVE_ITEM":
    //giai thich: i khac index thi filter tra ve true thi duoc giu lai trong mang
    //i == index thi filter tra ve false thi khong duoc giu lai trong mang
    //mac du xoa di nhung van dam bao pure function
      return state.filter((e, i)=> i != action.index)
    default:
      return state;
  }
}

module.exports = mangReducer
