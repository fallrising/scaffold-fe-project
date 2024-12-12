import { useState } from "react"
import { Input } from "@/shared/components/ui/input/Input.tsx"
import { Button } from "@/shared/components/ui/button/Button.tsx"
import { Switch } from "@/shared/components/ui/switch/Switch.tsx"
import { Label } from "@/shared/components/ui/label/Label.tsx"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card/Card.tsx"

export default function Settings() {
    const [notifications, setNotifications] = useState(true)
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Settings</h1>
            <Card>
                <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Your username" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="notifications"
                            checked={notifications}
                            onCheckedChange={setNotifications}
                        />
                        <Label htmlFor="notifications">Enable notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="darkMode"
                            checked={darkMode}
                            onCheckedChange={setDarkMode}
                        />
                        <Label htmlFor="darkMode">Dark mode</Label>
                    </div>
                    <Button>Save Changes</Button>
                </CardContent>
            </Card>
        </div>
    )
}

