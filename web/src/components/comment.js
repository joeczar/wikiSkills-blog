import React from 'react'
import styles from './commentsBlock.module.css'

const Comment = (pageContext) => {
  return (
    <div className={styles.block}>
      <hr />
      <h2 id={styles.title}>Comments</h2>
      <h3 id={styles.subtitle}>Add a comment</h3>
      <form className={styles.form}
        netlify-honeypot='bot-field'
        data-netlify='true'
      >
        <input type='hidden' name='comment' value='comment' />

        <input id='pageContext'
          name='options[slug]'
          type='hidden'
          value={pageContext.slug}
        />
        <input id='nameInput'
          name='fields[name]'
          type='text'
          placeholder='Name'
          required />

        <input className={styles.email}
          id='emailInput'
          name='fields[email]'
          type='email'
          placeholder='Email'
          required
        />
        <textarea className='comment'
          id='commentInput'
          name='fields[message]'
          placeholder='Comment'
          required
        />
        <br />
        <button type='submit'>Submit Comment</button>
      </form>
    </div>
  )
}

export default Comment
