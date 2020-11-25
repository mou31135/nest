import { Cat } from './interface/cat.interface';
export declare class CatsService {
    private readonly cats;
    create(cat: Cat): void;
    update(cat: Cat): void;
    findAll(): Cat[];
}
