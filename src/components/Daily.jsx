import './Daily.css'
import Card from './Card';
import { dias } from '../constants/constants.js'

let diasLenght = Object.keys(dias).length


const Daily = ({ }) => {

  return <div className='d-flex justify-content-center flex-column col-sm-7'>
    <Card props={dias.primero} />
    <Card props={dias.segundo} />
    <Card props={dias.tercero} />
    <Card props={dias.cuarto} />
    <Card props={dias.quinto} />
    <Card props={dias.sexto} />
    <Card props={dias.septimo} />
    <Card props={dias.octavo} />
    <Card props={dias.noveno} />
    <Card props={dias.decimo} />
    <Card props={dias.once} />
    <Card props={dias.doce} />
    <Card props={dias.trece} />
    <Card props={dias.catorce} />
    <Card props={dias.quince} />
    <Card props={dias.dieciseis} />
    <Card props={dias.diecisiete} />
    <Card props={dias.dieciocho} />
    <Card props={dias.diecinueve} />
  </div>
}

export default Daily