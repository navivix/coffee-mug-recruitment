import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotFoundException,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

/**
 * Intercepts when TypeORM returns null values and throws 404.
 */
@Injectable()
export class TypeOrmNotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        if (!data || data.affected === 0) throw new NotFoundException();
      }),
    );
  }
}
