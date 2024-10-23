-- CreateTable
CREATE TABLE "Scheduling" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "serviceName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "durationEstimated" TEXT NOT NULL,
    "observation" TEXT NOT NULL,

    CONSTRAINT "Scheduling_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Scheduling_email_key" ON "Scheduling"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Scheduling_telephone_key" ON "Scheduling"("telephone");
