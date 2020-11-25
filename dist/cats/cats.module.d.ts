import { MiddlewareConsumer, NestModule } from '@nestjs/common';
export declare class CatsModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
