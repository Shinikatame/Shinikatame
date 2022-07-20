import React, { useState, ChangeEvent } from 'react'
import Image from 'next/image'

import styles from '../styles/components/search.module.sass'

import graphqlQuery, { ResponseType }  from '../modules/graphqlQuery'

const Search = () => {
    const [inputValue, setInputValue] = useState('')
    const [autoComplete, setAutoComplete] = useState<ResponseType>({})

    const change = async ( event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        
        const response = await graphqlQuery({'search': event.target.value})
        setAutoComplete(response)
    }
    
    return (
    <main className={`${styles.main} ${styles.dark}`}>
            <h1>Ani<span>Search</span></h1>
            <input type="search" value={inputValue} placeholder="search anime" onChange={ change }/>

            <ul>
            {autoComplete.Page && autoComplete.Page?.media.map( (anime, i) => (
                <a key={`anime-${i}`} href={anime.siteUrl} target="_blank" rel="noreferrer" >
                    <li>
                        <Image className={styles.image} src={anime.coverImage.medium} alt={`${anime.title.romaji}-image`} width={50} height={70} />
                        <span>{anime.title.romaji || anime.title.english}</span>
                    </li>
                </a>
            ))}
            </ul>

    </main>
    )
}
  
export default Search
  