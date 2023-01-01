-- DropForeignKey
ALTER TABLE "publications" DROP CONSTRAINT "publications_originalId_fkey";

-- DropIndex
DROP INDEX "publications_originalId_key";

-- AlterTable
CREATE SEQUENCE publications_originalid_seq;
ALTER TABLE "publications" ALTER COLUMN "originalId" SET DEFAULT nextval('publications_originalid_seq');
ALTER SEQUENCE publications_originalid_seq OWNED BY "publications"."originalId";
