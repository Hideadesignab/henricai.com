import Image from 'next/image'

const logos = [
  { name: 'Balder', src: '/logos/balder.png' },
  { name: 'Newsec', src: '/logos/newsec.png' },
  { name: 'Castellum', src: '/logos/castellum.png' },
  { name: 'Holmströmgruppen', src: '/logos/holmstromgruppen.png' },
]

export function LogoBar() {
  return (
    <div style={{
      width: '100%',
      paddingTop: '48px',
      paddingBottom: '48px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddingLeft: '48px',
        paddingRight: '48px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {logos.map((logo) => (
          <div key={logo.name} style={{ flexShrink: 0 }}>
            <Image
              src={logo.src}
              alt={logo.name}
              width={160}
              height={50}
              style={{
                height: logo.name === 'Balder' ? '60px' : '32px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(100%) brightness(0)',
                opacity: 0.7,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
