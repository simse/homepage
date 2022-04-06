import React, { useState } from "react";

import styles from '../styles/components/SearchBox.module.scss'

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        window.location.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchValue)
    }

    return (
        <div>
            <form className={styles.box} onSubmit={handleSubmit} role={'search'}>
                <input type="search" placeholder="Search" value={searchValue} onChange={handleChange} />

                <button type={"button"}>search</button>
            </form>
        </div>
    )
}

export default SearchBox