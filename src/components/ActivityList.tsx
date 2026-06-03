// importo el type de Activity
import type { Activity } from "../types"
// Genero el type para activities de tipo Activity
type ActivityListProp = {
    activities: Activity[]
}


// asigno el nuevo Type generado
export default function ActivityList({activities}:ActivityListProp) {

    return (
    <>
    <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>

    {activities.map(activity=>(
        <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
            <div className="space-y2- relative">
        <p>{activity.category}</p>
        <p className="text-2xl font-bold pt-5">{activity.name}</p>
        <p className="text-4xl font-black text-lime-600">{activity.calories}{''}</p>
           <span>Calorías</span>
           </div>
            <div>

            </div>
        </div>
    ))}
    </>
  )
}
