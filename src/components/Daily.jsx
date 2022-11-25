import './Daily.css'
import Card from './Card';
import { dias } from '../constants/constants.js'

let diasLenght = Object.keys(dias).length


const Daily = ({ }) => {

  /* if (content = undefined) {
    console.log('hello')
  } else {
    console.log('bye')
  } */

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
  </div>
}

export default Daily