"use client"

import React, { useEffect, useRef, useState } from "react"
import { Input } from "@/shared/components/ui/input/Input.tsx"
import { Button } from "@/shared/components/ui/button/Button.tsx"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/components/ui/select/Select.tsx"
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs/Tabs.tsx"

interface Project {
    id: number
    title: string
    description: string
    image: string
    timeAgo: string
    category: string
}

const SearchPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const loader = useRef(null)

    // Simulate fetching data
    const fetchProjects = async () => {
        setLoading(true)
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const newProjects = Array.from({ length: 8 }, (_, i) => ({
            id: projects.length + i,
            title: `Project ${projects.length + i + 1}`,
            description: "This is a sample project description that shows the details of the project.",
            image: `/placeholder.svg?height=200&width=400`,
            timeAgo: "2 hours ago",
            category: ["Design", "Development", "Marketing"][Math.floor(Math.random() * 3)],
        }))

        setProjects((prev) => [...prev, ...newProjects])
        setLoading(false)
    }

    useEffect(() => {
        fetchProjects()
    }, [page])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    setPage((prev) => prev + 1)
                }
            },
            { threshold: 1.0 }
        )

        if (loader.current) {
            observer.observe(loader.current)
        }

        return () => observer.disconnect()
    }, [loading])

    return (
            <div className="space-y-6">
                {/* Breadcrumb */}
                <div className="text-sm text-gray-500">
                    Search List / Project List
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold">Search List (Project)</h1>

                {/* Search Bar */}
                <div className="flex gap-4">
                    <Input
                        className="max-w-md"
                        placeholder="Please enter"
                        type="search"
                    />
                    <Button>Search</Button>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="articles">
                    <TabsList>
                        <TabsTrigger value="articles">Articles</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="applications">Applications</TabsTrigger>
                    </TabsList>
                </Tabs>

                {/* Filters */}
                <div className="flex flex-wrap gap-4">
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="development">Development</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Owner" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="me">Me</SelectItem>
                            <SelectItem value="shared">Shared</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-md"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold">{project.title}</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {project.timeAgo}
                  </span>
                                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-600">
                    {project.category}
                  </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Loading indicator */}
                <div ref={loader} className="flex justify-center py-4">
                    {loading && (
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
                    )}
                </div>
            </div>
    )
}

export default SearchPage