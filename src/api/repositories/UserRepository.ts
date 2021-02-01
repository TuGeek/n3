import {} from 'mongoose';

import { User } from '../models/User';

@EntityRepository(User)
export class UserRepository extends Repository<User>  {

}
