import { Usertype } from '@/types'
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function TableOfUsers({
  membersArr,
  adminId,
}: {
  membersArr: Usertype[]
  adminId: string
}) {
  const members = membersArr
  let ourIndex = -1
  for (let i = 0; i < members.length; i++) {
    if (members[i].id === adminId) {
      ourIndex = i
    }
  }

  if (ourIndex !== 0) {
    const temp = members[0]
    members[0] = members[ourIndex]
    members[ourIndex] = temp
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40%]">Fullname</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium">
              {member.fullname ? member.fullname : 'none'}
            </TableCell>
            <TableCell>{member.username}</TableCell>
            <TableCell>{member.id === adminId ? '👑' : '🎉'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-right">€</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
