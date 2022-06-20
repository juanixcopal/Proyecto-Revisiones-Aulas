import React, { useEffect , useState } from "react"
import { GetAulas } from '../helpers/GetAulas.js'
import ModalComponent from '../components/ModalComponent.js'
import '../styles/FilteredClassroom.css'

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
        <ModalComponent cambiarEstadoModal1={cambiarEstadoModal1} estadoModal1={estadoModal1} dataModal={dataModal} />

            {state.data.map((element)=>{
                return(
                    <div className='ContButton'>
                            <button  className="ClasBtn" id={element.id} onClick={() => toggle({element})} >Aula {element.Planta}.{element.Numero}</button>
                    </div>
                )
            })}
        </>
    )
}

export default FilteredClassroom;