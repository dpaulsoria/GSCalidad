import { appSchema } from '@nozbe/watermelondb'
import { UserOfflineSchema } from './model/user';

export default appSchema({
  version: 1,
  tables: [
    UserOfflineSchema
  ]
})