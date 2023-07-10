/*
  Warnings:

  - Added the required column `from` to the `deliverylogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliverylogs" ADD COLUMN     "from" VARCHAR(255) NOT NULL;
