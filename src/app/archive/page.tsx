import React from 'react'
import Gallery3D from '../../components/Gallery3D'
import styles from './page.module.css'

const ArchivePage = () => {
  return (
    <div className={styles.archivePage}>
      <header className={styles.pageHeader}>
        <h1>Archive Gallery</h1>
        <p>Explore our archived collections through this interactive 3D experience</p>
      </header>
      
      <main>
        {/* Main Gallery */}
        <section className={styles.gallerySection}>
          <Gallery3D 
            height="600px"
            categories={['spring', 'summer', 'autumn', 'winter']}
            imagePrefix="/img"
          />
        </section>
        
        {/* Additional content */}
        <section className={styles.contentSection}>
          <h2>About the Archive</h2>
          <p>This collection represents our work spanning multiple seasons and projects.</p>
          
          {/* Compact gallery */}
          <div className={styles.inlineGallery}>
            <h3>Featured Projects</h3>
            <Gallery3D 
              height="400px"
              className="compact"
              showScrollHint={false}
            />
          </div>
        </section>
      </main>
    </div>
  )
}

export default ArchivePage