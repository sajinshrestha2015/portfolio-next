interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => {
  const getFirstName = (name: string) => {
    if (!name) return ''
    const firstName = name.split(' ')[0]
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
  }

  const firstName = getFirstName(name)
  return (
    <div className='mx-auto max-w-lg rounded-lg bg-gray-50 p-6 text-gray-800 shadow-md'>
      <p className='mb-4 font-bold'>Dear {firstName},</p>

      <p className='mb-4'>
        I'm delighted to hear that you'd like to connect with me! I'll make sure
        to stay in touch through emails and look forward to building a
        meaningful connection. Please feel free to reach out anytime for
        discussions, ideas, or opportunities.
      </p>

      <p className='mb-4'>
        Thank you, and I’m excited about this new connection!
      </p>

      <p className='mt-6'>
        Best regards,
        <br />
        Sajin Shrestha
        <br />
      </p>
    </div>
  )
}

export default ContactFormEmail
