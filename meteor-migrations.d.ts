/**
 * @link https://github.com/percolatestudio/meteor-migrations
 * @example
 * import { Migrations } from 'meteor/percolate:migrations';
 * Migrations.migrateTo('3,rerun');
 */
declare module 'meteor/percolate:migrations' {
  interface MigrationConfig {
    // Log job run details to console
    log: boolean;
    // Use a custom logger function (defaults to Meteor's logging package)
    logger: any;
    // Enable/disable logging "Not migrating, already at version {number}"
    logIfLatest: boolean;
    // migrations collection name to use in the database
    collectionName: string;
  }
  interface MigrationAction {
    version: number;
    name: string;
    up: Function;
    down?: Function;
  }
  interface MigrationsStatic {
    migrateTo(target: string): void;
    add(option: MigrationAction): void;
    config(option: MigrationConfig): void;
    start(): void;
  }
  export let Migrations: MigrationsStatic;
}