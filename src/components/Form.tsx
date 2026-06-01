import { categories } from "../data/categories"
export default function Form() {
  return (
   <form className="space-y-5 bg-white shadow p-10 rounded-lg">
    <div className=" grid grid-cols-1 gap-3">
<label htmlFor="category" className="font-bold">Categorías:</label>
<select className="border border-slate-300 p-2 rounded-lg w-full bg-white" name="" id="category">
    {categories.map(category => (
        <option value={category.id} key={category.id}>
            {category.name}
        </option>
    ))}
</select>
    </div>
    <div className=" grid grid-cols-1 gap-3">
    <label htmlFor="activity" className="font-bold">Actividad:</label>
    <input 
    type="text" 
    name="" 
    id="activity" 
    className="border border-slate-300 p-2 rounded-lg"
    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicileta."
    />
    </div>
    <div className=" grid grid-cols-1 gap-3">
    <label htmlFor="calories" className="font-bold">Calorias:</label>
    <input 
    type="number" 
    name="" 
    id="calories" 
    className="border border-slate-300 p-2 rounded-lg"
    placeholder="Calorias. Ej. 300 o 500."
    />
    </div>
    <input type="submit" 
    className="bg-gray-800 hover:bg-gray-900 p-2 w-full font-bold text-white uppercase"
    value="Guardar Comida o Guardar Ejercicio"
    />
   
   </form>
  )
}
