import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedTransactionTable1745375017095 implements MigrationInterface {
    name = 'AddedTransactionTable1745375017095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "transaction" ("id" SERIAL NOT NULL, "amount" numeric(10,2) NOT NULL, "date" TIMESTAMP NOT NULL, "note" character varying, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transaction"`);
    }

}
