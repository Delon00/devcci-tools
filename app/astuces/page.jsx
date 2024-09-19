'use client'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Navbar from '@/components/navbar/navbar';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Github, Globe, Cpu } from 'lucide-react'

export default function Astuces(){

    const [searchTerm, setSearchTerm] = useState('')

    const tips = [
        {
            icon: <Github className="h-8 w-8" />,
            title: "GitHub",
            description: "Astuces pour une meilleure utilisation de GitHub",
            link: "/astuces/github"
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Next.js",
            description: "Optimisez vos applications Next.js avec ces conseils",
            link: "/astuces/nextjs"
        },
        {
            icon: <Cpu className="h-8 w-8" />,
            title: "Spring Boot",
            description: "Améliorez vos applications Spring Boot",
            link: "/astuces/spring-boot"
        },
        {
            icon: <Cpu className="h-8 w-8" />,
            title: "Laravel",
            description: "Améliorez vos applications Laravel",
            link: "/astuces/laravel"
        },
    ]

    const filteredTips = tips.filter(tip => 
        tip.title.toLowerCase().includes(searchTerm.toLowerCase())||tip.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className='flex min-h-screen flex-col items-center justify-between'>
            <Navbar/>
            <div className="flex  flex-col items-center justify-center mt-24 px-4 py-4">
                <div className='w-full'>
                    <h1 className="text-3xl font-bold mb-8 text-center">Astuces de développement</h1>
                </div>
            
                <div className="flex flex-wrap justify-center gap-6">
                    {filteredTips.map((tip, index) => (
                    <Card key={index} className="w-full max-w-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                            {tip.icon}
                            <span>{tip.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{tip.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <a href={tip.link}>Voir les astuces</a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
                </div>
            </div>
        </div>
    )
}