import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnEmailToUser1699797361516 implements MigrationInterface {
    name = 'AddColumnEmailToUser1699797361516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`email\``);
    }

}
