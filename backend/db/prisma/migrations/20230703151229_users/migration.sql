/*
  Warnings:

  - You are about to drop the `logs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "logs";

-- CreateTable
CREATE TABLE "deliverylogs" (
    "id" SERIAL NOT NULL,
    "to" VARCHAR(255) NOT NULL,
    "from" VARCHAR(255) NOT NULL,
    "body" VARCHAR(255) NOT NULL,

    CONSTRAINT "deliverylogs_pkey" PRIMARY KEY ("id")
);
