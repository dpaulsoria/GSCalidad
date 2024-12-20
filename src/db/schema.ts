import { appSchema } from "@nozbe/watermelondb";
import { UserOfflineSchema } from "@/model/User";
import { DescongeladoSalmueraSchema } from "@/model/registros/Salmuera/RC_CC_15";
import { PeladoFrescoSchema } from "@/model/registros/ValorAgregado/RC_CC_103";
import { ProdTerminadoSchema } from "@/model/registros/ProdTerminado/RC_CC_108";
import { ProcesoEnteroFrescoSchema } from "@/model/registros/ProcesoEntero/RC_CC_07";
import { PlantasSchema } from "@/model/data/navigation/Planta";
import { TipoRegistroSchema } from "@/model/data/navigation/TipoRegistro";
import { AreasProcesoSchema } from "@/model/data/navigation/AreasProceso";
import { AreasSchema } from "@/model/data/list/Area";
import { ColoresSchema } from "@/model/data/list/Color";
import { TipoCorteSchema } from "@/model/data/list/TipoCorte";
import { TipoProductoSchema } from "@/model/data/list/TipoProducto";
import { TipoProductoEmbarqueSchema } from "@/model/data/list/TipoProductoEmbarque";
import { TipoRegistroEstadoSchema } from "@/model/data/list/TipoRegistroEstado";
import { UnidadPesoSchema } from "@/model/data/list/UnidadPeso";
import { RegistrosAreaSchema } from "@/model/data/pivot/RegistrosArea";
import { RegistrosPlantaSchema } from "@/model/data/pivot/RegistrosPlanta";
import { FirmasSchema } from "@/model/data/signatures/Firma";
import { RegistroFallidoSchema } from "@/model/data/log/RegistroFallido";
import { ImportadoresSchema } from "@/model/data/list/Importador";
import { MarcasSchema } from "@/model/data/list/Marcas";
import { MaquinasSchema } from "@/model/data/list/Maquinas";
import { ProveedoresINPSchema } from "@/model/data/list/ProveedoresINP";
import { CorreccionesSchema } from "@/model/data/extra/Correccion";
import { FotosSchema } from "@/model/data/extra/Foto";
import { InspeccionPreeliminarColaSchema } from "@/model/registros/MateriaPrima/RC_MP_01/jr/Cola";
import { InspeccionPreeliminarSchema } from "@/model/registros/MateriaPrima/RC_MP_01/InspeccionPreeliminar";
import { InspeccionPreeliminarEnteroSchema } from "@/model/registros/MateriaPrima/RC_MP_01/jr/Entero";
import { ClasificacionCamaronEnteroSchema } from "@/model/registros/ProcesoEntero/RC_CC_08";
import { TallasSchema } from "@/model/data/list/Talla";

export default appSchema({
  version: 1,
  tables: [
    // Usuarios
    UserOfflineSchema,
    // Registros
    DescongeladoSalmueraSchema,
    PeladoFrescoSchema,
    ProdTerminadoSchema,
    ProcesoEnteroFrescoSchema,
    ClasificacionCamaronEnteroSchema,
    // Navegacion
    PlantasSchema,
    TipoRegistroSchema,
    AreasProcesoSchema,
    // Listas
    AreasSchema,
    ColoresSchema,
    TipoCorteSchema,
    TipoProductoSchema,
    TipoProductoEmbarqueSchema,
    TipoRegistroEstadoSchema,
    UnidadPesoSchema,
    ImportadoresSchema,
    MarcasSchema,
    MaquinasSchema,
    ProveedoresINPSchema,
    InspeccionPreeliminarSchema,
    InspeccionPreeliminarColaSchema,
    InspeccionPreeliminarEnteroSchema,
    TallasSchema,
    // Pivot
    RegistrosAreaSchema,
    RegistrosPlantaSchema,
    // Signatures
    FirmasSchema,
    // Fallido
    RegistroFallidoSchema,
    // Extras
    CorreccionesSchema,
    FotosSchema,
  ],
});
