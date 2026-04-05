import Link from 'next/link'
import { productDropdown } from '@/components/Header/dropdownData'
import { CardVideo } from './CardVideo'
import styles from './ToolsShowcase.module.css'

interface ToolsShowcaseProps {
  currentProduct?: string
}

const cardVideos: Record<string, { desktop: string; mobile?: string; startOffset?: number; scale?: number; mobileScale?: number; mobileLoop?: boolean; playOnce?: boolean; hideOnMobile?: boolean }> = {
  '/plattform/workflows': {
    desktop: '/videos/newworkflowsvideo.mp4',
    mobile: '/videos/newworkflowsvideo.mp4',
    startOffset: 1,
    scale: 1.15,
    mobileLoop: true,
  },
  '/plattform/assistent': {
    desktop: '/videos/assistenttoolsvideo.mp4',
    mobileScale: 1.15,
    mobileLoop: true,
  },
  '/plattform/ecosystem': {
    desktop: '/videos/ecosystemvideo.mp4',
    playOnce: true,
    hideOnMobile: true,
  },
}

export function ToolsShowcase({ currentProduct }: ToolsShowcaseProps) {
  const allProducts = productDropdown.columns.flatMap((col) => col.links)
  const currentIndex = allProducts.findIndex((p) => p.href.endsWith(`/${currentProduct}`))

  // Rotate the list based on current product so each page shows different tools
  const offset = currentIndex >= 0 ? currentIndex + 2 : 0
  const rotated: typeof allProducts = []
  for (let i = 0; i < allProducts.length; i++) {
    rotated.push(allProducts[(offset + i) % allProducts.length])
  }

  const filtered = rotated.filter((p) => !p.href.endsWith(`/${currentProduct}`) && !p.href.endsWith('/overview'))

  // Ecosystem always first (left on desktop, top on mobile)
  const ecosystemIndex = filtered.findIndex((p) => p.href.endsWith('/ecosystem'))
  if (ecosystemIndex > 0) {
    const [eco] = filtered.splice(ecosystemIndex, 1)
    filtered.unshift(eco)
  }

  const products = filtered.slice(0, 3)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>Explore the suite of tools</h2>
        <div className={styles.grid}>
          {products.map((product) => {
            const video = cardVideos[product.href]
            return (
              <Link key={product.href} href={product.href} className={styles.card}>
                {video && (
                  <div className={styles.cardVideo}>
                    <CardVideo desktopSrc={video.desktop} mobileSrc={video.mobile} startOffset={video.startOffset} scale={video.scale} mobileScale={video.mobileScale} mobileLoop={video.mobileLoop} playOnce={video.playOnce} hideOnMobile={video.hideOnMobile} />
                  </div>
                )}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardDescription}>{product.subtitle}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
