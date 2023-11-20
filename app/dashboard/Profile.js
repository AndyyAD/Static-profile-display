import styles from '../../styles/page.module.css';
import Link from 'next/link';
import prfdata from '@/data/data';

export default function Home() {
    const user = prfdata[0];

    return (
        <section className={styles.profile}>
            <div className="container">
                <div className={styles.displayImg}>
                    <div className={styles.bgImg}>
                        <div></div>
                        <img src={user.coverphoto} alt="" />
                    </div>
                    <div className={styles.prfDetails}>
                        <div className={styles.prfImgWrap}>
                            <div className={styles.prfImg}>
                                <img src={user.profilephoto} alt="" />
                            </div>
                            <div>
                                <h2 className={styles.name}>{user.name}</h2>
                                <div className={styles.follow}>
                                    <div className={styles.followers}>
                                        <h4>{user.followers}</h4>
                                        <p>Followers</p>
                                    </div>
                                    <div className={styles.following}>
                                        <h4>{user.following}</h4>
                                        <p>Following</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p> {user.bio} </p>
                        <Link href={user.insta}> Instagram </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
