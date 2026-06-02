import type { Activity } from "../types"

// Primero tenemos las acciones que describen lo que esta pasando en nuestra APP
export type ActivityActions = 
{type:'save-activity' , payload: {newActivity:Activity}}

// Definimos nuestro type
type ActivityState = {
    activities: Activity[]
}

// Luego tendremos nuestro State inicial
export const initialState: ActivityState = {
activities:[]
}

// Luego tenemos nuestro Reducer que conecta nuestro State inicial con nuestras acciones
export const activityReducer = (
    state: ActivityState = initialState,
    actions: ActivityActions
)=>{

  if(actions.type === 'save-activity'){
    //este codigo maneja la logica para actualizar el State
    return{
...state,
activities: [...state.activities, actions.payload.newActivity]
    }
    
  }
  return state
    
}