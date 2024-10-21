import { db, rc103Collection } from "@/db";
import { PeladoFrescoModel } from "@/model/registros/ValorAgregado/RC_CC_103";

export const SavePeladoFresco = async (
  it: PeladoFrescoModel,
  plantaId: number
) => {
  await db.write(async () => {
    await rc103Collection.create(async (record: PeladoFrescoModel) => {
      record.unidad_peso = it.unidad_peso;
      record.tipo_corte = it.tipo_corte;
      record.lote = it.lote;
      record.co_importador = it.co_importador;
      record.name_importador = it.name_importador;
      record.co_talla = it.co_talla;
      record.name_talla = it.name_talla;
      record.area = it.area;
      record.peso_muestra = it.peso_muestra;
      record.cuenta_libra = it.cuenta_libra;
      record.uniformidad_p = it.uniformidad_p;
      record.uniformidad_g = it.uniformidad_g;
      record.uniformidad_total = it.uniformidad_total;
      record.corte_irregular = it.corte_irregular;
      record.corte_largo = it.corte_largo;
      record.corte_profundo = it.corte_profundo;
      record.falta_corte = it.falta_corte;
      record.pud = it.pud;
      record.cascaras = it.cascaras;
      record.patas = it.patas;
      record.p_melanosis = it.p_melanosis;
      record.melanosis = it.melanosis;
      record.semirosado = it.semirosado;
      record.rosado = it.rosado;
      record.mudado = it.mudado;
      record.flacido = it.flacido;
      record.picado = it.picado;
      record.deshidratados = it.deshidratados;
      record.pedazos = it.pedazos;
      record.quebrado = it.quebrado;
      record.quebrado_3er = it.quebrado_3er;
      record.sin_telson = it.sin_telson;
      record.corbata = it.corbata;
      record.deforme = it.deforme;
      record.mal_descabezado = it.mal_descabezado;
      record.juvenil = it.juvenil;
      record.intestinos = it.intestinos;
      record.residuo_venas = it.residuo_venas;
      record.cascara_floja = it.cascara_floja;
      record.cascara_floja_6to = it.cascara_floja_6to;
      record.total_defectos = it.total_defectos;
      record.calidad = it.calidad;
      record.olor = it.olor;
      record.sabor = it.sabor;
      record.temperatura = it.temperatura;
      record.sulfito = it.sulfito;
      record.observacion = it.observacion;
      record.UsuCrea = it.UsuCrea;
      record.UsuModi = it.UsuModi;
      record.state = it.state;
      record.planta_id = plantaId;
      record.remote_id = it.remote_id;
      const userName = await db.localStorage.get("user_name");
      record.UsuCrea = typeof userName === "string" ? userName : "none";
    });
  });
};
