import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624416875815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'Users',
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",

                    },
                    {
                        name:"lastname",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name:"nickname",
                        type: "varchar",
                        isUnique: true,
                        length: "30"
                    },
                    {
                        name:"address",
                        type:"varchar",
                        isNullable: true
                    },
                    {
                        name:"bio",
                        type:"varchar",
                        length:"100"
                    },
                    {
                        name:"createdAt",
                        type:"timestamp",
                        default: "now()"
                    },
                    {
                        name:"updatedAt",
                        type:"timestamp",
                        default: "now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Users")
    }

}
