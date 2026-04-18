/**
 * ARCHIVO BARRIL (Barrel File)
 * 
 * Este archivo index.ts sirve como un "puerto de exportación" público para esta carpeta.
 * Permite que otros archivos importen el componente simplemente apuntando a la carpeta,
 * sin necesidad de especificar el nombre del archivo exacto.
 * 
 * Ejemplo de uso en otro archivo:
 * EN LUGAR DE: import { Header } from './Header/Header';
 * AHORA USAS:  import { Header } from './Header';
 */

export * from './Header';
