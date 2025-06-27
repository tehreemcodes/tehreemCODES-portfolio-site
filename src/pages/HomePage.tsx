import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Hero = lazy(() => import('@/components/sections/Hero'))
const FeaturedProjects = lazy(() => import('@/components/sections/FeaturedProjects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function HomePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Tehreem Zafar | Web Developer & Software Engineer</title>
        <meta
          name='description'
          content='Tehreem Zafar is a Web Developer and Cybersecurity Enthusiast with 3+ years of experience building responsive, secure, and scalable websites & applications using React, MERN Stack, Next.js, WordPress, Webflow, HubSpot, Shopify, and more.'
        />
        <link
          rel='canonical'
          href=''
        />
      </Helmet>
      <Suspense fallback={<Preloader />}>
        <PageWrapper>
          <Navbar />
          <Hero />
          <FeaturedProjects />
          <Footer />
        </PageWrapper>
      </Suspense>
    </>
  )
}
