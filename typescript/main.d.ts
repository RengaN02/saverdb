declare module "saver.db" {
    export function set(data: any, db: any): any;
    export function clear(confirm: any): any;
    export function Delete(data: any): any;
    export function add(data: any, value: any): any;
    export function fetchAll(): any;
    export function get(data: any): any;
    export function fetch(data: any): any;
    export function has(data: any): boolean;
    export function push(data: any, db: any): any;
    export function divide(data: any, value: any): any;
    export function extract(data: any, value: any): any; 
    export function multiply(data: any, value: any): any; 
}