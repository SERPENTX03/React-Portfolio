import { createProject } from '@/actions/Project'
import { auth } from '@/auth'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { redirect } from 'next/navigation'
import React from 'react'

const portfolio = async() => {
  const session = await auth()
  const user = session?.user

  if(!user) redirect('/login')

  return (
    <div className='px-10 mt-20'>

    <div className='max-w-[600px] mx-auto'>
      <Card>
        <form action={createProject}>
          <Label htmlFor="project">Project</Label>
          <Input id="project" type="text" name="project" placeholder="Project"/>

          <Label htmlFor="description">Description</Label>
          <Input id="description" type="text" name="description" placeholder="description"/>
          
          <Label htmlFor="GithubUrl">GithubUrl</Label>
          <Input id="GithubUrl" type="text" name="githubUrl" placeholder="GithubUrl"/>
         
          <Label htmlFor="SiteUrl">SiteUrl</Label>
          <Input id="SiteUrl" type="text" name="siteUrl" placeholder="SiteUrl"/>
         
          <Label htmlFor="Image">Image</Label>
          <Input id="Image" type="file" name="image"/>
         
          <button className='mt-2 bg-blue-500 text-white w-full py-3 rounded-lg' type='submit'>เพิ่มข้อมูล</button>
        </form>
      </Card>
    </div>
    </div>
  )
}

export default portfolio