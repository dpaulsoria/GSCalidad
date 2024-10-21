import { db, rc15Collection } from "@/db";
import { DescongeladoSalmueraModel } from "@/model/registros/Salmuera/RC_CC_15";

export const SaveSalmuera = async (
  it: DescongeladoSalmueraModel,
  plantaId: number,
  username: string | void = "none"
) => {
  await db.write(async () => {
    await rc15Collection.create((record: DescongeladoSalmueraModel) => {
      record.tipo_analisis = it.tipo_analisis;
      record.co_importador = it.co_importador;
      record.cabinplant = it.cabinplant;
      record.lote = it.lote;
      record.proveedor = it.proveedor;
      record.co_talla = it.co_talla;
      record.pesoNetoFresco = it.pesoNetoFresco;
      record.peso_bruto = it.peso_bruto;
      record.unidad_medida = it.unidad_medida;
      record.pesoCongelado = it.pesoCongelado;
      record.pesoDescongelado = it.pesoDescongelado;
      record.Cta_PesoNetoFresco = it.Cta_PesoNetoFresco;
      record.Cta_PesoCongelado = it.Cta_PesoCongelado;
      record.Cta_PesoDescongelado = it.Cta_PesoDescongelado;
      record.observaciones = it.observaciones;
      record.UsuModi = it.UsuModi;
      record.correccion = it.correccion;
      record.foto = it.foto;
      record.estado = it.estado;
      record.state = it.state;
      record.planta_id = plantaId;
      record.remote_id = it.remote_id;
      // No need to set createdAt and updatedAt manually as @readonly handles it.
      // record.UsuCrea = it.UsuCrea;
      record.UsuCrea = typeof username === "string" ? username : "none"
    });
  });
};
