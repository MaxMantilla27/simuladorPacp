import { RegistroPacpExamenDetalleDTO } from "./ExamenDetalleDTO";

export interface RegistroPacpExamenDTO{
  id:number,
  idSimuladorPacpModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  idSimuladorPacpTarea?:number,
  idSimuladorPacpDominio:number
}
export interface RegistroPacpExamenRespuestaDTO{
  id:number,
  idSimuladorPacpModo:number,
  nombreExamen:string,
  tiempo:number,
  idAspNetUsers?:string,
  usuario?:string,
  estadoExamen?:number,
  puntaje?:number,
  desempenio?:number,
  percentil?:number,
  respuestaDetalle: Array<RegistroPacpExamenDetalleDTO>,
  idSimuladorTipoRespuesta:number
}
export interface ExamenIntentoDTO{
  Intento1:number;
  Intento2:number;
  Intento3:number;
  Intento4:number;
  Intento5:number;
  Intento6:number;
  Intento7:number;
  Intento8:number;
  Intento9:number;
  Intento10:number;
}
