import Link from 'next/link'
import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import NewsletterForm from '@/components/newsletter-form'
import { getCertification, getCertificationBySlug } from '@/lib/certifications'

export async function generateStaticParams() {
  const certifications = await getCertification()
  const slugs = certifications.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Certification({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const post = await getCertificationBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              width={800}
              height={600}
              unoptimized
            />
          </div>
        )}

        <header>
          <Link
            href={
              'https://www.udemy.com/certificate/UC-f16a8e9f-eac0-4662-b69b-08b76f60bfde/'
            }
            className='title'
          >
            {title}
          </Link>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>

        <footer className='mt-16'>
          <NewsletterForm />
        </footer>
      </div>
    </section>
  )
}
