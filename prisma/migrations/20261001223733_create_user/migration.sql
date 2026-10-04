/*
  Warnings:

  - A unique constraint covering the columns `[usuarioId]` on the table `Pessoa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usuarioId` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pessoa` ADD COLUMN `usuarioId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'PESSOA', 'PROFESSOR') NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Pessoa_usuarioId_key` ON `Pessoa`(`usuarioId`);

-- AddForeignKey
ALTER TABLE `Pessoa` ADD CONSTRAINT `Pessoa_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
