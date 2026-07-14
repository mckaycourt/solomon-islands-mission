const milestones = [
  { value: "5", label: "branches visited" },
  { value: "30+", label: "new members baptized" },
  { value: "6", label: "missionaries welcomed" },
  { value: "38", label: "missionary interviews" },
];

const gallery = [
  {
    src: "/photos/opening-celebration.jpg",
    alt: "Solomon Islanders performing at the celebration opening the new mission",
    caption: "The celebration of the opening of the Solomon Islands Honiara Mission · June 27, 2026",
    className: "wide",
  },
  {
    src: "/photos/mission-leadership-council.jpg",
    alt: "President and Sister Court with the first Mission Leadership Council",
    caption: "First Mission Leadership Council · June 26",
    className: "portrait",
  },
  {
    src: "/photos/talise-baptisms.jpg",
    alt: "Missionaries and newly baptized members outside the Talise Chapel",
    caption: "First weekend baptisms at the Talise Chapel · June 27",
    className: "landscape",
  },
  {
    src: "/photos/companionship-study.jpg",
    alt: "President and Sister Court visiting missionaries for companionship study",
    caption: "A surprise visit for companionship study · July 10",
    className: "landscape",
  },
  {
    src: "/photos/family-home-evening.jpg",
    alt: "President and Sister Court with the Point Cruz District missionaries",
    caption: "Family Home Evening with the Point Cruz District · July 9",
    className: "landscape",
  },
  {
    src: "/photos/auki-baptisms.jpg",
    alt: "Missionaries and newly baptized members on a beach in Malaita",
    caption: "Auki District baptisms on Malaita · July 11",
    className: "wide",
  },
  {
    src: "/photos/fauabu-baptisms.jpg",
    alt: "Missionaries and newly baptized members at Fauabu on Malaita",
    caption: "Fauabu baptisms · July 11",
    className: "portrait tall",
  },
  {
    src: "/photos/branch-members.jpg",
    alt: "Missionaries standing with local branch members",
    caption: "Faithful members and missionaries",
    className: "landscape",
  },
  {
    src: "/photos/green-valley.jpg",
    alt: "Two missionaries walking through a Green Valley neighborhood",
    caption: "Walking through Green Valley",
    className: "portrait tall",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Letters from Honiara, home">
          <span className="brand-mark">H</span>
          <span>Letters from Honiara</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#letter">The letter</a>
          <a href="#photographs">Photographs</a>
          <a className="nav-button" href="mailto:?subject=Letters%20from%20Honiara%20%E2%80%94%20Month%20One">
            Share
          </a>
        </nav>
      </header>

      <main id="top">
        <article className="postcard" aria-labelledby="post-title">
          <div className="hero-photo">
            <img
              src="/photos/hero-national-news.jpg"
              alt="President and Sister Court speaking with a reporter in Honiara"
            />
            <p className="photo-caption">Called on the spot for national television news · Honiara</p>
          </div>

          <div className="letter-face">
            <div className="airmail"><span>Dispatch 01</span></div>
            <p className="eyebrow">June 24 – July 13, 2026</p>
            <h1 id="post-title">Month <em>One</em></h1>
            <p className="deck">
              A bullet train, twelve delayed bags, and a joyful beginning on the other side of the world.
            </p>
            <div className="meta">
              <span>President &amp; Sister Court</span>
              <span>Honiara</span>
              <span>10 min read</span>
            </div>
            <p className="hand-note">we carry you with us every day!</p>
            <div className="postmark" aria-hidden="true">Honiara<br />Solomon Islands<br />13 · 07 · 26</div>
            <div className="stamp" aria-hidden="true"><span><strong>SI</strong>post<br />with love</span></div>
          </div>

          <a className="scroll-cue" href="#letter" aria-label="Read the letter">↓</a>
        </article>

        <section className="letter-layout" id="letter">
          <aside className="chapter-note">
            <span className="script">Dear family,</span>
            <h2>Grabbing the bullet train</h2>
            <p>Month one of the Solomon Islands Honiara Mission.</p>
          </aside>

          <div className="story">
            <p className="dropcap">
              Imagine you are at the Kurikoma-Kōgen Station in Tokyo as a bullet train—not scheduled to stop—roars through. On the outside of the train are handles used to climb onto the top for maintenance. This is the picture Elder Bednar painted for us when we met with him.
            </p>
            <p>
              Arriving in the mission field as new mission leaders is like standing in that station and grabbing the outside handle. In this, as in many other things he has taught us over the years, he was exactly right. It is difficult to describe.
            </p>
            <p>
              One thing is not difficult to describe: our growing testimony of the Lord’s words, “I am able to do mine own work.” We have seen that He can and does His own work. We have been invited along for the ride—and what a ride it has already proven to be.
            </p>

            <blockquote>
              “We have been invited along for the ride—and what a great ride it already has proven to be.”
            </blockquote>

            <section className="story-section" aria-labelledby="carry-on-heading">
              <p className="section-number">01</p>
              <h3 id="carry-on-heading">Two carry-ons and 119 missing bags</h3>
              <p>
                At the MTC, Elder Bednar made what sounded like an offhand comment: if you have a carry-on suitcase with a change of clothes and toiletries—and can do your laundry every once in a while—you have everything you need. We listened. Even when the airline tried to check our carry-ons in Los Angeles, we reorganized until they let us keep them.
              </p>
              <figure className="inline-photo right">
                <img src="/photos/bags-arrive.jpg" alt="President and Sister Court with missionaries and their recovered luggage" />
                <figcaption>Twelve bags, finally released from Customs.</figcaption>
              </figure>
              <p>
                Eighteen hours later, after landing in Honiara, an announcement came over the intercom: because of weight restrictions, 119 bags had not been loaded in Fiji. They would arrive on the next flight—four days later. What did we have? Two carry-ons with a change of clothes and toiletries. Thank you, Elder Bednar.
              </p>
              <p>
                When our luggage finally arrived, an elder prayed that the Customs officers’ hearts would be softened. They scanned only three of our twelve bags, opened none of them, and sent us on our way within minutes. After watching other passengers endure hours of inspections and confiscations, that felt like a miracle all its own.
              </p>
            </section>
          </div>
        </section>

        <section className="milestone-band" aria-label="The first two weeks in numbers">
          <div className="milestone-intro">
            <p className="kicker">The first two weeks</p>
            <h2>Already moving at full speed.</h2>
          </div>
          <div className="milestones">
            {milestones.map((item) => (
              <div className="milestone" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="narrative-block">
          <div className="story-column">
            <p className="section-number">02</p>
            <h2>Miracles, meetings, and a tarmac standoff</h2>
            <p>
              We were welcomed with a celebration for the opening of the mission. We met the elders and sisters, visited five branches for sacrament meetings, showed up on missionaries’ doorsteps, attended two baptismal services for more than thirty new members, welcomed six new missionaries, helped stop two serious cases of malaria, interviewed thirty-eight missionaries, and held our first councils and family home evenings.
            </p>
            <p>
              Then there are the things you could never plan for. Four elders boarded a plane to the remote island of Ulawa, only to be told that the aircraft was going somewhere else. They got off—and stood in front of the plane until their bags were unloaded. A literal tarmac standoff. Two more attempts were canceled. Finally, after prayers from both the missionaries and a family who needed to reach the main island before a temple trip, the plane went through.
            </p>
          </div>
          <figure className="feature-photo">
            <img src="/photos/fauabu-baptisms.jpg" alt="Missionaries and newly baptized members standing on a beach at Fauabu, Malaita" />
            <figcaption><span>Malaita</span> Fauabu baptisms · July 11, 2026</figcaption>
          </figure>
        </section>

        <section className="reflection">
          <div className="reflection-copy">
            <p className="section-number">03</p>
            <h2>“Would you still say yes?”</h2>
            <p>
              All of this came with the adventure of new food and water, shaking hundreds of hands, learning to drive on the other side of the road, and rarely feeling one hundred percent. There has been almost no time to prepare for anything. More than once we have been put on the spot—including on national television—and felt the needed words come in the very moment we needed them.
            </p>
            <p>
              Kim asked the other day, “Knowing what you know now, would you still say yes to this calling?” We both knew the answer: one hundred percent yes.
            </p>
            <p>
              Being mission leaders is the best perch from which to see the gathering of Israel across the world. In only a few weeks, we have gained a deeper testimony that God is mindful of every people, in every land.
            </p>
          </div>
          <div className="answer-card">
            <span>Knowing what we know now…</span>
            <strong>100%<br />yes.</strong>
            <p>“The Lord is in it with us.”</p>
          </div>
        </section>

        <section className="photo-journal" id="photographs">
          <header>
            <p className="kicker">Photographs from month one</p>
            <h2>People, places, and the work.</h2>
            <p>From Honiara to Malaita, every photograph carries a story we are still learning how to tell.</p>
          </header>
          <div className="gallery-grid">
            {gallery.map((photo) => (
              <figure className={photo.className} key={photo.src}>
                <img src={photo.src} alt={photo.alt} />
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="service-strip">
          <div>
            <p className="kicker">Hands at work</p>
            <h2>Faith expressed in service.</h2>
            <p>
              Senior missionaries and local leaders carry an extraordinary load—from temple preparation, housing, travel, and finances to humanitarian and self-reliance programs. Water tanks and wheelchairs are part of $1.7 million in humanitarian aid being donated in the Solomon Islands.
            </p>
          </div>
          <div className="service-photos">
            <figure><img src="/photos/water-tanks.jpg" alt="Blue water tanks donated for humanitarian aid" /><figcaption>Water tanks</figcaption></figure>
            <figure><img src="/photos/wheelchair.jpg" alt="A Solomon Islander using a donated wheelchair" /><figcaption>Mobility support</figcaption></figure>
          </div>
        </section>

        <section className="closing-letter">
          <p className="script">Until next time,</p>
          <p>
            We love you all and want to thank you for your prayers and support. In a lot of ways, we know this is our mission together. We carry you with us every day.
          </p>
          <p className="signature">With love,<br /><strong>President &amp; Sister Court</strong></p>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">H</span><span>Letters from Honiara</span></a>
        <p>Solomon Islands Honiara Mission · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
