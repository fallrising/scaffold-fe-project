import { useState } from "react"
import { Input } from "@/shared/components/ui/input/Input.tsx"
import { Button } from "@/shared/components/ui/button/Button.tsx"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shared/components/ui/table/Table.tsx"

export default function UserList() {
    const [users] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
    ])

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">User List</h1>
            <div className="flex gap-4">
                <Input placeholder="Search users..." className="max-w-md" />
                <Button>Search</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

