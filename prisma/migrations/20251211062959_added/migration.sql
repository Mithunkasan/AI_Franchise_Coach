-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "whatsapp" TEXT,
    "city" TEXT,
    "businessName" TEXT,
    "category" TEXT,
    "revenue" TEXT,
    "yearsInBusiness" TEXT,
    "outlets" TEXT,
    "systemised" TEXT,
    "replicable" TEXT,
    "startTime" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);
