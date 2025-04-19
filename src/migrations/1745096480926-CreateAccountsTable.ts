import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAccountsTable1745096480926 implements MigrationInterface {
    name = 'CreateAccountsTable1745096480926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" SERIAL NOT NULL, "accountName" character varying NOT NULL, "balance" integer NOT NULL, "accountType" character varying NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
