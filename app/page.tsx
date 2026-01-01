import styles from "./page.module.css";
import SubscribeButton from "@/components/SubscribeButton";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Master Coding like a <br />
          <span style={{ color: "hsl(var(--primary))" }}>True Professional</span>
        </h1>
        <p className={styles.subtitle}>
          Premium tutorials, advanced patterns, and a community of experts.
          Level up your career today.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-outline">View Courses</button>
        </div>
      </section>

      <section className={styles.grid}>
        {/* Free Tier */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Starter</h3>
            <div className={styles.price}>
              $0<span className={styles.period}>/mo</span>
            </div>
          </div>
          <ul className={styles.features}>
            <li className={styles.feature}><span className={styles.checkmark}>✓</span> Access to basic courses</li>
            <li className={styles.feature}><span className={styles.checkmark}>✓</span> Community Support</li>
          </ul>
          <button className="btn btn-outline">Sign Up Free</button>
        </div>

        {/* Pro Tier - Featured */}
        <div className={styles.card} style={{ borderColor: 'hsl(var(--primary))', borderWidth: '2px' }}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Pro Access</h3>
            <div className={styles.price}>
              $15<span className={styles.period}>/mo</span>
            </div>
          </div>
          <ul className={styles.features}>
            <li className={styles.feature}><span className={styles.checkmark}>✓</span> All Premium Courses</li>
            <li className={styles.feature}><span className={styles.checkmark}>✓</span> Source Code Downloads</li>
            <li className={styles.feature}><span className={styles.checkmark}>✓</span> Priority Support</li>
            <li className={styles.feature}><span className={styles.checkmark}>✓</span> Certificate of Completion</li>
          </ul>
          <SubscribeButton />
        </div>

        {/* Enterprise Tier */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Enterprise</h3>
            <div className={styles.price}>
              $99<span className={styles.period}>/mo</span>
            </div>
          </div>
          <ul className={styles.features}>
            <li className={styles.feature}><span className={styles.checkmark}>✓</span> Everything in Pro</li>
            <li className={styles.feature}><span className={styles.checkmark}>✓</span> Team Management</li>
            <li className={styles.feature}><span className={styles.checkmark}>✓</span> SSO Integration</li>
          </ul>
          <button className="btn btn-outline">Contact Sales</button>
        </div>
      </section>
    </main>
  );
}
