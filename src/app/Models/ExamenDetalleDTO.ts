export interface RegistroPacpExamenDetalleDTO{
  id:number,
  idSimuladorPacpExamen:number,
  idSimuladorPacpDominio:number,
  idSimuladorPacpTarea?:number,
  idSimuladorPacpPregunta:number,
  ejecutado:boolean,
  idSimuladorPacpPreguntaRespuesta?:number,
  puntaje?:number,
  idAspNetUsers:string,
  usuario:string
}
