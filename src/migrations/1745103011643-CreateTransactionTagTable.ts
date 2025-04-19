import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTransactionTagTable1745103011643 implements MigrationInterface {
    name = 'CreateTransactionTagTable1745103011643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction_tag" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "transactionType" integer NOT NULL, CONSTRAINT "PK_0d315a8e2f2cf63c30e24c4a38c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transaction_tag"`);
    }

}
