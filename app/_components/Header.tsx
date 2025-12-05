import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'

const courses = [
    {
        id: 1,
        name: 'HTML',
        desc: 'Learn the fundamentals of HTML and build the structure of modern web pages.',
        path: '/course/1/detail'
    },
    {
        id: 2,
        name: 'CSS',
        desc: 'Master CSS to style and design responsive, visually appealing web layouts.',
        path: '/course/2/detail'
    },
    {
        id: 3,
        name: 'React',
        desc: 'Build dynamic and interactive web applications using the React JavaScript library.',
        path: '/course/3/detail'
    },
    {
        id: 4,
        name: 'React Advanced',
        desc: 'Deep dive into advanced React concepts including hooks, state management, performance optimization, and more.',
        path: '/course/4/detail'
    },
    {
        id: 5,
        name: 'Python',
        desc: 'Learn Python programming from basics to intermediate level, covering logic building, functions, and real-world applications.',
        path: '/course/5/detail'
    },
    {
        id: 6,
        name: 'Python Advanced',
        desc: 'Explore advanced Python concepts including OOP, decorators, generators, concurrency, and real-world project structures.',
        path: '/course/6/detail'
    },
    {
        id: 7,
        name: 'Generative AI',
        desc: 'Learn how generative AI models work, including LLMs, image generation, prompts, fine-tuning, and practical AI workflows.',
        path: '/course/7/detail'
    },
    {
        id: 8,
        name: 'Machine Learning',
        desc: 'Understand core machine learning algorithms, data preprocessing, model training, evaluation, and deployment.',
        path: '/course/8/detail'
    },
    {
        id: 9,
        name: 'JavaScript',
        desc: 'Master modern JavaScript concepts including ES6+, async programming, DOM manipulation, and real-world applications.',
        path: '/course/9/detail'
    }
];


function Header() {
    return (
        <div className='p-4 max-w-7xl flex justify-between items-center w-full'>
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.png'} alt='logo' width={40} height={40} />
                <h2 className='font-bold text-3xl font-game'>CodeBox</h2>
            </div>
            {/* Navbar */}
            <NavigationMenu>
                <NavigationMenuList className='gap-8'>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Course</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid md:grid-cols-2 gap-2 sm:w-[400px]
                            md:w-[500px] lg:w-[600px]'>
                                {courses.map((course,index)=>(
                                    <div key={index} className='p-2 hover:bg-accent rounded-xl cursor-pointer'>
                                        <h2 className='font-medium'>{course.name}</h2>
                                        <p className='text-xs text-gray-500'>{course.desc}</p>
                                    </div>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href={'/projects'}>Projects</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href={'/pricing'}>Pricing</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Link href={'/contact-us'}>Contact Us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {/* Signup Button */}
            <Button className='font-game text-2xl' variant={'pixel'}>Signup</Button>
        </div>
    )
}

export default Header