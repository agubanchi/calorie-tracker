
import type { Activity, Activity } from "../types"

// Primero tenemos las acciones que describen lo que esta pasando en nuestra APP
export type ActivityActions = 
{type:'save-activity' , payload: {newActivity:Activity}} |
{type:'save-activeId' , payload: {id:Activity['id']}}

// Definimos nuestro type
 export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

// Luego tendremos nuestro State inicial
export const initialState: ActivityState = {
activities:[],
activeId: ''
}

// Luego tenemos nuestro Reducer que conecta nuestro State inicial con nuestras acciones
export const activityReducer = (
    state: ActivityState = initialState,
    actions: ActivityActions
)=>{

  if(actions.type === 'save-activity'){
    //este codigo maneja la logica para actualizar el State
   let updatedActivities: Activity[]=[]
    if(state.activeId){
updatedActivities = state.activities.map(activity => activity.id === state.activeId ? actions.payload.newActivity:activity
)
   }
   else{
updatedActivities= [...state.activities, actions.payload.newActivity]
   }
    return{
...state,
activities: updatedActivities,
activeId:''
    }
    
  }
  if(actions.type === 'save-activeId'){
    return{
      ...state,
      activeId: actions.payload.id
    }
  }
  return state
    
}