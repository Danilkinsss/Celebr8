import { PrismaClient, User } from '@prisma/client'
// import { nullable, z } from 'zod'

const prisma = new PrismaClient()

// const userSchema = z.object({
//   id: z.string(),
//   username: z.string().max(20),
//   fullname: z.string().max(20).nullable(),
//   partyId: z.string().nullable(),
// })
// type User = z.infer<typeof userSchema>
// type UserZ = z.infer<typeof userSchema>

export const getAllUsers = async () => {
  // no validation ✅
  return await prisma.user.findMany()
}

export const getUserById = async (userId: string) => {
  if (
    (await prisma.user.findUnique({
      where: { id: userId },
    })) == null
  ) {
    return false
  } else {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })
  }
}

export const createUser = async (data: User) => {
  // input data validation ❌
  try {
    console.log(data.username)
    if (
      (data.username == undefined ||
        (await prisma.user.findUnique({
          where: { username: data.username },
        }))) !== null
    ) {
      return false
    } else {
      return await prisma.user.create({
        data,
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export const changeUser2 = async (
  userId: string,
  userUsername: string,
  userFullname: string,
  userPartyId: string
) => {
  if (
    (await prisma.user.findUnique({
      where: { id: userId },
    })) == null
  ) {
    return false
  }
  if (!userUsername) {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        fullname: userFullname,
      },
    })
  } else if (
    (await prisma.user.findUnique({
      where: { username: userUsername },
    })) == null
  ) {
    return await prisma.user.update({
      where: { id: userId },
      data: {
        username: userUsername,
        fullname: userFullname,
        partyId: userPartyId,
      },
    })
  } else {
    return false
  }
}
export const changeUser = async (
  userId: string,
  userUsername: string,
  userFullname: string,
  userPartyId: string
) => {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      username: userUsername,
      fullname: userFullname,
      partyId: userPartyId,
    },
  })
}

export const removeUser = async (userId: string) => {
  if (
    (await prisma.user.findUnique({
      where: { id: userId },
    })) == null
  ) {
    return false
  } else {
    return await prisma.user.delete({
      where: {
        id: userId,
      },
    })
  }
}
