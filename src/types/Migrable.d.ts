export interface Migrable {
  createdAt: number;
  UsuCrea: string;
  updatedAt: number;
  UsuModi: string | null;
  state: number;
}
