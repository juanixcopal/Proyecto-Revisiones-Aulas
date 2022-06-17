import React, { useEffect , useState } from "react"
import { GetAulas } from '../helpers/getAulas.js'

const FilteredClassroom = ({Planta}) =>{

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [dataModal, setDataModal] = useState({})
    
    
    const [state, setState] = useState({
        data: [],
        loading:true
    });


    
    const toggle = ({ element }) => {
        cambiarEstadoModal1(!estadoModal1)
        setDataModal(element)
    }
    
    
    useEffect(()=>{
        const funt = async ( ) => {
            const data = await GetAulas()
            setState({
                data: data.filter((element)=> element.Planta === Planta -''),
                loading: false
            })
        }
        funt()
    },[])
    return (
        <>
            {state.data.map((element)=>{
                return(
                    <div className='ContButton'>
                            <button  className="ClasBtn" id={element.id} onClick={() => toggle({element})} >{element.Planta}.{element.Numero}</button>
                    </div>
                )
            })}
        </>
    )
}

export default FilteredClassroom;