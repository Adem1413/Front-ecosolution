import styles from './Blog.module.css';
export default function Blog({ titre, contenu,image }) {
  return (


    <div className={styles.cardBlog }>
    <div className="card-body ">
   <div className={styles.a}>
    
     <img className={styles.cards_img} src={image} />
     
     <div>
     <h4 className={styles.card_title}>{titre}</h4>
      <p className={styles.card_text} >{contenu}</p>
      </div>
      </div>
</div>

</div>
  );
}

