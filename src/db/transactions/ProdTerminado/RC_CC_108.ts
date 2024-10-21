import { db, rc108Collection } from "@/db";
import { ProdTerminadoModel } from "@/model/registros/ProdTerminado/RC_CC_108";

export const SaveProdTerminado = async (
    it: ProdTerminadoModel,
    plantaId: number
  ) => {
    await db.write(async () => {
      await rc108Collection.create((record: ProdTerminadoModel) => {
        record.fecha_etiqueta = it.fecha_etiqueta;
        record.tipo_control = it.tipo_control;
        record.area = it.area;
        record.tipo_producto = it.tipo_producto;
        record.presentacion = it.presentacion;
        record.unidad_medida = it.unidad_medida;
        record.tipo_muestreo = it.tipo_muestreo;
        record.lote = it.lote;
        record.cliente = it.cliente;
        record.temperatura = it.temperatura;
        record.talla_real = it.talla_real;
        record.talla_marcada = it.talla_marcada;
        record.peso_bruto = it.peso_bruto;
        record.peso_sin_funda = it.peso_sin_funda;
        record.peso_neto = it.peso_neto;
        record.glaseo = it.glaseo;
        record.cta_congelada = it.cta_congelada;
        record.cta_final = it.cta_final;
        record.cuenta_total = it.cuenta_total;
        record.peso_muestra = it.peso_muestra;
        record.olor = it.olor;
        record.sabor = it.sabor;
        record.uniformidad_g = it.uniformidad_g;
        record.uniformidad_p = it.uniformidad_p;
        record.uniformidad_t = it.uniformidad_t;
        record.mudados = it.mudados;
        record.flacidez = it.flacidez;
        record.deformes = it.deformes;
        record.picados = it.picados;
        record.cola_floja = it.cola_floja;
        record.deshidratados = it.deshidratados;
        record.principio_melanosis = it.principio_melanosis;
        record.melanosis = it.melanosis;
        record.pelado_vena = it.pelado_vena;
        record.falta_corte = it.falta_corte;
        record.corte_largo = it.corte_largo;
        record.corte_profundo = it.corte_profundo;
        record.corte_irregular = it.corte_irregular;
        record.cascara = it.cascara;
        record.patas = it.patas;
        record.quebrados = it.quebrados;
        record.luxados = it.luxados;
        record.quebrado_3 = it.quebrado_3;
        record.cola_danada = it.cola_danada;
        record.pedazos = it.pedazos;
        record.corbatas = it.corbatas;
        record.rosados = it.rosados;
        record.semi_rosados = it.semi_rosados;
        record.mal_descabezado = it.mal_descabezado;
        record.juveniles = it.juveniles;
        record.intestinos = it.intestinos;
        record.residuos_venas = it.residuos_venas;
        record.cascara_floja = it.cascara_floja;
        record.total_defecto = it.total_defecto;
        record.calidad = it.calidad;
        record.fundas = it.fundas;
        record.etiquetado = it.etiquetado;
        record.sulfitos = it.sulfitos;
        record.crustaceos = it.crustaceos;
        record.tratamiento = it.tratamiento;
        record.observacion = it.observacion;
        record.UsuCrea = it.UsuCrea;
        record.UsuModi = it.UsuModi;
        record.state = it.state;
        record.planta_id = plantaId;
        record.remote_id = it.remote_id;
      });
    });
  };
