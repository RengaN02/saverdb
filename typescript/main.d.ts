declare module "saver.db" {
    export default class Database {
        constructor(file: string);

        // Public methods
        public set(key: string, value: any): void;
        public clear(): void;
        public delete(key: string): void;
        public add(key: string, value: number): void;
        public fetchAll(): Record<string, any>;
        public get(key: string): any;
        public fetch(key: string): any;
        public has(key: string): boolean;
        public push(key: string, value: any): void;
        public extract(key: string, value: number): void;
        public length(key: string): number;
        public find(arrayKey: string, field: string, value: any): any;
        public findIndex(arrayKey: string, field: string, value: any): number;
        public editArrayData(arrayKey: string, index: number, value: any): void;
    }
}