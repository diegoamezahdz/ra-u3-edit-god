import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";
import InputCrud from "../componentes/Inputcrud";



const data = [
  { 
    id: 1, 
    nombre: "Pochoclo",
    sexo: "Macho",
    grupo: "Carne",
    raza: "Machito F1",
    utp: "2908120312",
    fechana: "15/09/2018",
    etapa: "becerro",
    padre: "Pochoclo padre",
    peso: "100 kg",
    foto: ".)",
  
  },
];

class Crud extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      sexo: "",
      grupo: "",
      raza: "",
      utp: "",
      fechana: "",
      etapa: "",
      padre: "",
      peso: "",
      foto: "",

    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
          
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <Button color="danger" onClick={("")}>Cerrar Sesión</Button>

          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Sexo</th>
                <th>Grupo</th>
                <th>Raza</th>
                <th>UTP</th>
                <th>Fecha de Nac.</th>
                <th>Etapa</th>
                <th>Padre</th>
                <th>Peso</th>
                <th>Foto</th>
                <th>Acción</th>




                
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.sexo}</td>
                  <td>{dato.grupo}</td>
                  <td>{dato.raza}</td>
                  <td>{dato.utp}</td>
                  <td>{dato.fechana}</td>
                  <td>{dato.etapa}</td>
                  <td>{dato.padre}</td>
                  <td>{dato.peso}</td>
                  <td>{dato.foto}</td>


                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        {/* Modal Editar registro      */}
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <InputCrud
              nombrel='nombre'
              tipo='text'
            />
            <InputCrud
              nombrel='sexo'
              tipo='text'
            />
            <InputCrud
              nombrel='grupo'
              tipo='text'
            />
            <InputCrud
              nombrel='raza'
              tipo='text'
            />
            <InputCrud
              nombrel='utp'
              tipo='text'
            />
            <InputCrud
              nombrel='nacimiento'
              tipo='date'
            />
            <InputCrud
              nombrel='etapa'
              tipo='text'
            />
            <InputCrud
              nombrel='padre'
              tipo='text'
            />
            <InputCrud
              nombrel='peso'
              tipo='number'
            />
            <InputCrud
              nombrel='foto'
              tipo='file'
            />
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        {/* //modal insertar */}
        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div><h3>Insertar Animal</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
              />
            </FormGroup>
            <InputCrud
              nombrel='nombre'
              tipo='text'
            />
            <InputCrud
              nombrel='sexo'
              tipo='text'
            />
            <InputCrud
              nombrel='grupo'
              tipo='text'
            />
            <InputCrud
              nombrel='raza'
              tipo='text'
            />
            <InputCrud
              nombrel='utp'
              tipo='text'
            />
            <InputCrud
              nombrel='nacimiento'
              tipo='date'
            />
            <InputCrud
              nombrel='etapa'
              tipo='text'
            />
            <InputCrud
              nombrel='padre'
              tipo='text'
            />
            <InputCrud
              nombrel='peso'
              tipo='number'
            />
            <InputCrud
              nombrel='foto'
              tipo='file'
            />
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

      </>
    );
  }
}
export default Crud;
