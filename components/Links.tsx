import React from 'react'
import type { Link } from '../lib/types'

import styles from '../styles/components/Links.module.scss'

interface LinksProps {
  links: Link[]
}

const Links = ({ links }: LinksProps) => {
  return (
    <div className={styles.links}>
      <h2 className={styles.title}>Quick links</h2>

      <div className={styles.grid}>
        {links.map(link => (
          <a href={link.url} className={styles.card} key={link.name}>
            <h3 className={styles.cardTitle}>{link.name}</h3>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Links