import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1726979906427 implements MigrationInterface {
  name = 'Migration1726979906427';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`role_permission\` (
                \`role_id\` int NOT NULL,
                \`permission_id\` int NOT NULL,
                INDEX \`IDX_3d0a7155eafd75ddba5a701336\` (\`role_id\`),
                INDEX \`IDX_e3a3ba47b7ca00fd23be4ebd6c\` (\`permission_id\`),
                PRIMARY KEY (\`role_id\`, \`permission_id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`role_permission\`
            ADD CONSTRAINT \`FK_3d0a7155eafd75ddba5a7013368\` FOREIGN KEY (\`role_id\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE
        `);
    await queryRunner.query(`
            ALTER TABLE \`role_permission\`
            ADD CONSTRAINT \`FK_e3a3ba47b7ca00fd23be4ebd6cf\` FOREIGN KEY (\`permission_id\`) REFERENCES \`permission\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`role_permission\` DROP FOREIGN KEY \`FK_e3a3ba47b7ca00fd23be4ebd6cf\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`role_permission\` DROP FOREIGN KEY \`FK_3d0a7155eafd75ddba5a7013368\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_e3a3ba47b7ca00fd23be4ebd6c\` ON \`role_permission\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_3d0a7155eafd75ddba5a701336\` ON \`role_permission\`
        `);
    await queryRunner.query(`
            DROP TABLE \`role_permission\`
        `);
  }
}
