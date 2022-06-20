import React, { useEffect, useState } from "react";
import VentanaModal from './VentanaModal';
import { Field, Formik } from "formik";
import { Container, Table } from "reactstrap";
import { GetInventario } from '../helpers/GetInventario'
import '../styles/ModalComponent.css'

const ModalComponent = ({ cambiarEstadoModal1, estadoModal1, dataModal }) =>{
    const { Numero, Planta} = dataModal;
    const [FormEnviado, setFormEnviado] = useState(false);
    const [inventario, setInventario] = useState({
        data: [],
        loading: true,
    });

    useEffect(() =>{
        const func = async () => {
            const data = await GetInventario(dataModal);
            setInventario({
                data: data,
                loading: false,
            });
        };
        func();
    }, [dataModal]);

    return (
        <>
          <VentanaModal
            estado={estadoModal1}
            cambiarEstado={cambiarEstadoModal1}
            titulo={"Aula " + Planta + "." + Numero}
          >
            <>
              <Formik
                initialValues={{
                  comentario: '',
                }}
                onSubmit={(valores, { resetForm }) => {
                  resetForm();
                  console.log(valores);
    
                  setFormEnviado(true);
                  setTimeout(() => setFormEnviado(false), 4000);
                }}
              >
                {({ handleSubmit, values, handleChange }) => (
                  <form onSubmit={handleSubmit} className="Formulario">
                    <Container>
                      <Table>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Item</th>
                            <th>Bien</th>
                            <th>Mal</th>
                            <th>No hay</th>
                          </tr>
                        </thead>
    
                        <tbody>
                          {inventario.data.map((element) => {
                            return (
                              <tr>
                                <th>{element.id_objeto}</th>
                                <th>{element.tipo_objeto}</th>
                                <td>
                                  <Field
                                    className="field"
                                    type="radio"
                                    name={element.tipo_objeto}
                                    value="Bien"
                                  />
                                </td>
                                <td>
                                  <Field
                                    className="field"
                                    type="radio"
                                    name={element.tipo_objeto}
                                    value="Mal"
                                  />
                                </td>
                                <td>
                                  <Field
                                    className="field"
                                    type="radio"
                                    name={element.tipo_objeto}
                                    value="NoHay"
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                        <div>
                          <input 
                          type='text' 
                          id="comentario" 
                          name="comentario" 
                          placeholder="Comentario" 
                          value={values.comentario}
                          onChange={handleChange}
                          />
                        </div>
                    </Container>
                    {FormEnviado && (
                      <p className="exito">Inventario enviado con éxito!</p>
                    )}
                    <button className="Send" type="submit">
                      Enviar
                    </button>
                    <br></br>
                  </form>
                )}
              </Formik>
            </>
          </VentanaModal>
        </>
      );
}

export default ModalComponent