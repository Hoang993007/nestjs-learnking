
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);




// roles.guard.ts 
// @Injectable()
// export class RolesGuard {
//   constructor(private reflector: Reflector) {}
// }


// @Injectable()
// export class RolesGuard {
//   constructor(private reflector: Reflector) {}
// }

// const roles = this.reflector.get<string[]>('roles', context.getHandler());




// @Roles('admin')
// @Controller('cats')
// export class CatsController {}

// const roles = this.reflector.get<string[]>('roles', context.getClass());




// const roles = this.reflector.getAllAndOverride<string[]>('roles', [
//   context.getHandler(),
//   context.getClass(),
// ]);


// const roles = this.reflector.getAllAndMerge<string[]>('roles', [
//   context.getHandler(),
//   context.getClass(),
// ]);
