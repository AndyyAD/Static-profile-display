import styles from '../../styles/page.module.css'
import prfdata from '@/data/data'

export default function Home() {
    const user = prfdata[0];
    console.log(user.posts)

    return (
        <section className={`${styles.post} container`}>
            <p className={styles.postscnt}> {user.posts.length} Posts </p>
            <ul>
                {user.posts.map((post, index) => (
                    <li key={index}>
                        <hr />
                        <h2 className={styles.postHead}> {post.heading}</h2>
                        <p className={styles.postDesc}> {post.description} </p>
                        <p className={styles.postDetails}> {post.date} | {post.views} views</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}