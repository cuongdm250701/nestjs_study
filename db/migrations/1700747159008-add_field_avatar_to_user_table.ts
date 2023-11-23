import { MigrationInterface, QueryRunner } from "typeorm";

export class AddFieldAvatarToUserTable1700747159008 implements MigrationInterface {
    name = 'AddFieldAvatarToUserTable1700747159008'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`avatar\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`avatar\``);
    }

}
