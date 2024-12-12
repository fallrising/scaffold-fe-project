import {useCallback, useEffect, useRef, useState} from "react"
import { Input } from "@/shared/components/ui/input/Input.tsx"
import { Button } from "@/shared/components/ui/button/Button.tsx"
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card/Card.tsx"

interface Project {
    id: number
    title: string
    description: string
    image: string
}

export default function SearchList() {
    const [searchTerm, setSearchTerm] = useState("")
    const [projects, setProjects] = useState<Project[]>([])
    const [, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const loader = useRef(null)

    const loadMoreProjects = useCallback(() => {
        setLoading(true)
        // Simulate API call
        setTimeout(() => {
            const newProjects = Array.from({ length: 6 }, (_, i) => ({
                id: projects.length + i + 1,
                title: `Project ${projects.length + i + 1}`,
                description: "This is a sample project description that shows the details of the project.",
                image: `/placeholder.svg?height=200&width=300&text=Project+${projects.length + i + 1}`,
            }))
            setProjects(prev => [...prev, ...newProjects])
            setPage(prev => prev + 1)
            setLoading(false)
        }, 1000)
    }, [projects.length])

    useEffect(() => {
        loadMoreProjects()
    }, []) // Load initial projects

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        }

        const observer = new IntersectionObserver((entries) => {
            const target = entries[0]
            if (target.isIntersecting && !loading) {
                loadMoreProjects()
            }
        }, options)

        if (loader.current) {
            observer.observe(loader.current)
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current)
            }
        }
    }, [loading, loadMoreProjects])

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Search List</h1>
            <div className="flex gap-4">
                <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-md"
                />
                <Button>Search</Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project) => (
                    <Card key={project.id} className="overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="h-48 w-full object-cover"
                        />
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{project.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            {loading && (
                <div className="flex justify-center py-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
                </div>
            )}
            <div ref={loader} />
        </div>
    )
}


