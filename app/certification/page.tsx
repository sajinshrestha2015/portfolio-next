import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'
import { getCertification } from '@/lib/certifications'
import Certifications from '@/components/certifications'

export default async function CertificationPage() {
  const certifications = await getCertification()
  console.log(certifications)
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Certification</h1>

        <Certifications certifications={certifications} />
      </div>
    </section>
  )
}
