/*
  Warnings:

  - You are about to drop the column `from` on the `deliverylogs` table. All the data in the column will be lost.
  - Added the required column `subject` to the `deliverylogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "deliverylogs" DROP COLUMN "from",
ADD COLUMN     "subject" VARCHAR(255) NOT NULL;
