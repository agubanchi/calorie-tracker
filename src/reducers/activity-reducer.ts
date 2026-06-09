
import type { Activity } from "../types"

// Primero tenemos las acciones que describen lo que esta pasando en nuestra APP
export type ActivityActions = 
{type:'save-activity' , payload: {newActivity:Activity}} |
{type:'save-activeId' , payload: {id:Activity['id']}} |
{type:'delete-activity' , payload: {id:Activity['id']}} |
{type:'restart-app' }

// Definimos nuestro type
 export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

const localStorageActivities = (): Activity[]=>{
  const activities = localStorage.getItem('activities')
 return activities ? JSON.parse(activities) : []
}
// Luego tendremos nuestro State inicial
export const initialState: ActivityState = {
activities:localStorageActivities(),
activeId: ''
}

// Luego tenemos nuestro Reducer que conecta nuestro State inicial con nuestras acciones
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
)=>{

  if(action.type === 'save-activity'){
    //este codigo maneja la logica para actualizar el State
   let updatedActivities: Activity[]=[]
    if(state.activeId){
updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity:activity
)
   }
   else{
updatedActivities= [...state.activities, action.payload.newActivity]
   }
    return{
...state,
activities: updatedActivities,
activeId:''
    }
    
  }
  if(action.type === 'save-activeId'){
    return{
      ...state,
      activeId: action.payload.id
    }
  }

  if(action.type === 'delete-activity'){
    return{
      ...state,
      activities: state.activities.filter(activity=> activity.id !== action.payload.id)
    }
  }

  if(action.type === 'restart-app'){
    return{
     activities:[],
     activeId: ''
    }
  }

  return state
    
}