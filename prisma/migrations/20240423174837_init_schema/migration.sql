-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "locality" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "bloodgroup" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "loclity" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "hospitalId" TEXT NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blood" (
    "id" TEXT NOT NULL,
    "bloodtype" TEXT NOT NULL,
    "bottleid" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "exp" TEXT NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "Blood_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_phone_key" ON "Hospital"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Hospital_hospitalId_key" ON "Hospital"("hospitalId");

-- AddForeignKey
ALTER TABLE "Blood" ADD CONSTRAINT "Blood_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
