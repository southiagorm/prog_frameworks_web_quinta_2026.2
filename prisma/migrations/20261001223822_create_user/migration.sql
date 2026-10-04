/*
  Warnings:

  - You are about to drop the column `email` on the `Pessoa` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Pessoa_email_key` ON `Pessoa`;

-- AlterTable
ALTER TABLE `Pessoa` DROP COLUMN `email`;
