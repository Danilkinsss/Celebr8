import { Party, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllParties = async () => {
  return await prisma.party.findMany()
}

export const createParty = async (data: Party) => {
  return await prisma.party.create({
    data,
  })
}

export const getPartyById = async (partyId: string) => {
  return await prisma.party.findUnique({
    where: {
      id: partyId,
    },
    include: {
      members: true,
      food: true,
    },
  })
}

export const removeParty = async (partyId: string) => {
  // partyId validation ❌
  return await prisma.party.delete({
    where: {
      id: partyId,
    },
  })
}

export const changeParty = async (
  partyId: string,
  partyName: string,
  partyAdminId: string,
  partyDescription: string,
  partyDate: string,
  partyTime: string,
  partyLocation: string
) => {
  return await prisma.party.update({
    where: { id: partyId },
    data: {
      name: partyName,
      adminId: partyAdminId,
      description: partyDescription,
      date: partyDate,
      time: partyTime,
      location: partyLocation,
    },
  })
}
