import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function AboutPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Tehreem Zafar | Full-stack Development | My Projects</title>
        <meta
          name='description'
          content="Explore Tehreem Zafar’s portfolio featuring secure full-stack web applications, AI-driven cybersecurity tools, and interactive UIs built with React, Next.js, Python, Firebase, and more."
        />
        <link
          rel='canonical'
          href=''
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Projects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
