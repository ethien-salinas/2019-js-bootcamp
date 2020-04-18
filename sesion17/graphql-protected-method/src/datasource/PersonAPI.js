import { DataSource } from 'apollo-datasource'
import personJsonData from '../json/person.json'

export default class PersonAPI extends DataSource {

  constructor() {
    super()
  }
  initialize(config) {
    this.config = config.context
  }

  getPerson(id){
    return personJsonData.filter(person => person.id === id)[0]
  }
  getAllPerson(){
    console.log(personJsonData)
    return personJsonData
  }

}