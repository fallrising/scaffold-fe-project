import { useState } from "react"
import { Input } from "@/shared/components/ui/input/Input.tsx"
import { Button } from "@/shared/components/ui/button/Button.tsx"
import { Checkbox } from "@/shared/components/ui/checkbox/Checkbox.tsx"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card/Card.tsx"

export default function FormList() {
    const [forms] = useState([
        { id: 1, name: "Customer Feedback", active: true },
        { id: 2, name: "Employee Survey", active: false },
        { id: 3, name: "Product Registration", active: true },
    ])

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Form List</h1>
            <div className="flex gap-4">
                <Input placeholder="New form name" className="max-w-md" />
                <Button>Add Form</Button>
            </div>
            <div className="space-y-4">
                {forms.map((form) => (
                    <Card key={form.id}>
                        <CardHeader>
                            <CardTitle className="text-lg">{form.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-2">
                                <Checkbox id={`active-${form.id}`} checked={form.active} />
                                <label htmlFor={`active-${form.id}`}>Active</label>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

