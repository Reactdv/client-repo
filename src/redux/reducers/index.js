import { combineReducers } from "redux"
import posts from "./posts"
import { currentId } from "./posts"



export default combineReducers({
  
  posts,
  currentId 
})

