import { rc15Collection } from "@/db";
import { getUnsync } from "@/db/transactions/read";

export const upload = async () => {
  console.log("Funcion ejecutada");
  console.log(await getUnsync(rc15Collection));
};
