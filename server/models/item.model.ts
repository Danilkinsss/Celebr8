import { Item, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getAllItems = async () => {
  return await prisma.item.findMany()
}

export const getItemById = async (itemId: string) => {
  if (
    (await prisma.item.findUnique({
      where: { id: itemId },
    })) == null
  ) {
    return false
  } else {
    return await prisma.item.findUnique({
      where: {
        id: itemId,
      },
    })
  }
}

export const createItem = async (data: Item) => {
  return await prisma.item.create({
    data,
  })
}

export const changeItem = async (
  itemId: string,
  itemName: string,
  itemQuantity: number,
  itemCost: number
) => {
  return await prisma.item.update({
    where: { id: itemId },
    data: {
      name: itemName,
      quantity: itemQuantity,
      cost: itemCost,
    },
  })
}

export const removeItem = async (itemId: string) => {
  if (
    (await prisma.item.findUnique({
      where: { id: itemId },
    })) == null
  ) {
    return false
  } else {
    return await prisma.item.delete({
      where: {
        id: itemId,
      },
    })
  }
}
