import type { Metadata } from "next";
import Link from "next/link";
import { PhotoGallery } from "../../PhotoGallery";

export const metadata: Metadata = {
  title: "Month One | Letters from the Solomon Islands",
  description: "The first month of the Solomon Islands Honiara Mission: delayed bags, answered prayers, baptisms, and a joyful beginning.",
  openGraph: {
    title: "Letters from the Solomon Islands — Month One",
    description: "A bullet train, twelve delayed bags, and a joyful beginning on the other side of the world.",
    type: "article",
  },
};

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
    src: "/photos/local-food.jpg",
    alt: "A whole cooked fish served with green beans",
    caption: "New country, new food",
    className: "landscape",
  },
  {
    src: "/photos/hero-national-news.jpg",
    alt: "President and Sister Court speaking with a reporter in Honiara",
    caption: "National Television News",
    className: "landscape",
  },
  {
    src: "/photos/honiara-traffic.jpg",
    alt: "Night traffic on a road in Honiara",
    caption: "Learning to drive on the other side of the road",
    className: "portrait tall",
  },
  {
    src: "/photos/opening-youth.jpg",
    alt: "Young Solomon Island women at the mission opening celebration",
    caption: "Amazingly faithful Solomon Islanders",
    className: "landscape",
  },
  {
    src: "/photos/opening-men.jpg",
    alt: "Two Solomon Island men smiling at the mission opening celebration",
    caption: "Look at the light in all these eyes!",
    className: "landscape",
  },
  {
    src: "/photos/opening-boys.jpg",
    alt: "Three boys smiling at the mission opening celebration",
    caption: "The celebration of the opening of the mission",
    className: "landscape",
  },
  {
    src: "/photos/opening-girls.jpg",
    alt: "Four girls at the mission opening celebration",
    caption: "The celebration of the opening of the mission",
    className: "landscape",
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
  {
    src: "/photos/district-leaders.jpg",
    alt: "President and Sister Court with district and branch leaders and their wives",
    caption: "First meeting with the District Presidency and Branch Presidents · June 24",
    className: "wide",
  },
  {
    src: "/photos/senior-missionaries.jpg",
    alt: "President and Sister Court with the senior missionaries",
    caption: "Our amazing senior missionaries · June 24",
    className: "wide",
  },
  {
    src: "/photos/naha-sisters.jpg",
    alt: "Sister Kagl and Sister Takifu walking through a neighborhood in Naha",
    caption: "Sister Kagl and Sister Takifu · Naha",
    className: "wide",
  },
];

export default function MonthOneLetter() {
  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Letters from the Solomon Islands, home">
          <span className="brand-mark">S</span>
          <span>Letters from the Solomon Islands</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/#letters">All letters</Link>
          <a href="#photographs">Photographs</a>
          <a className="nav-button" href="mailto:?subject=Letters%20from%20the%20Solomon%20Islands%20%E2%80%94%20Month%20One">
            Share
          </a>
        </nav>
      </header>

      <main id="top">
        <article className="postcard" aria-labelledby="post-title">
          <div className="hero-photo">
            <img
              src="/photos/hero-sunset.jpg"
              alt="President and Sister Court together near the water at sunset"
            />
            <p className="photo-caption">President &amp; Sister Court · Solomon Islands</p>
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
              Imagine you are at the Kurikoma-Kōgen Station in Tokyo, as a bullet train, not scheduled to stop in that station, just roars through. On the outside of the train, there are handles, used to climb onto the top for maintenance. This is the picture Elder Bednar painted for us when we met with him.
            </p>
            <p>
              Arriving into the mission field, as new mission leaders, is like standing in a Tokyo train station and grabbing the outside handle of a bullet train, not scheduled to stop at that station. In this, as in many other things he’s taught us over the years, he is a prophet. It is exactly like that, and difficult to really describe.
            </p>
            <p>
              One of the things not difficult to describe is our testimony of this line of this verse - “…I am able to do mine own work” (2 Nephi 27:20). We have seen that the Lord can and does His own work! We’ve been invited along for the ride and what a great ride it already has proven to be.
            </p>

            <blockquote>
              “We have been invited along for the ride—and what a great ride it already has proven to be.”
            </blockquote>

            <section className="story-section" aria-labelledby="carry-on-heading">
              <p className="section-number">01</p>
              <h3 id="carry-on-heading">Two carry-ons and 119 missing bags</h3>
              <p>
                Elder Bednar made an offhand comment when we were having dinner with him and his wife at the MTC. “Susan and I have learned that if you have a carry-on suitcase with a change of clothes and toiletries, and you can do your laundry every once in a while, you have everything you need.
              </p>
              <p>
                Not surprisingly for Kim, but somewhat surprising for me, we listened to that off-hand comment and repacked our carry-ons for the trip to Solomon Islands. It wasn’t easy to keep this counsel either. In Los Angeles, they actually tried to take our carry-ons, saying they were too heavy and so they would have to check them. What? They would weigh the same under the plane, but while wearing name tags for the Church of Jesus Christ of Latter-day Saints you don’t argue. But what we did do was start the process of taking things out and putting them in our backpacks. After about ten minutes of reorganizing and reweighing, she finally gave up and we got our boarding passes.
              </p>
              <figure className="inline-photo right">
                <img src="/photos/bags-arrive.jpg" alt="President and Sister Court with missionaries and their recovered luggage" />
                <figcaption>Twelve bags, finally released from Customs.</figcaption>
              </figure>
              <p>
                Long story short - 18 hours later after landing in Honiara, Solomon Islands, we were waiting at Customs when this announcement came over the intercom - “Passengers of Fiji Airways arriving from Nadi, because of weight restrictions 119 bags were not loaded on the flight. They will be on the next flight - Sunday, June 29th.” It was Wednesday!
              </p>
              <p>
                What did Kim and I have? We had two carry-ons with a change of clothes and toiletries. Thank you, Elder Bednar.
              </p>
              <p>
                So, for the first six days, we wore the same clothes every day and washed them, but at least we had them. He was totally right. BTW, the kind senior missionaries let Kim borrow some of their clothes too, so it all worked out.
              </p>
              <p>
                How is this a miracle? Well, one, we were able to function for six days while waiting for our bags which we got from Customs on Monday. But the group that got their bags on that first flight had each and every bag so scrutinized. They were put through a scanner, opened and examined. Many lost contents to confiscation and it took hours.
              </p>
              <p>
                But when ours came, one of the Elders that was with us, prayed that their hearts would be softened and we would be able to get our bags (there were two brand new missionaries that flew in on our same flight from Fiji and they didn’t get their bags either). Well, the Customs people couldn’t get us out of there fast enough! They scanned only three of twelve bags and didn’t open a single one. We got out of there in just minutes with nothing confiscated.
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
              We have been welcomed, had an event put on by the members to celebrate the opening of the mission, had a Meet the New Mission Leaders meeting with the young Elders and Sisters, visited five of the branches for Sacrament meetings, shown up on the doorsteps of our missionaries, visiting almost all of their homes and apartments, attended two baptismal services of over 30 new members, welcomed 6 new missionaries to the mission, stopped two serious cases of Malaria and countless skin infections, interviewed 38 missionaries so far, had two family home evenings with the missionaries and one Mission Leadership Council and one District Council Meeting and one District Presidency Meeting, all in the first two weeks.
            </p>
            <p>
              And on top of all of this, countless things that you just can’t even imagine. Picture four elders boarding a plane to Ulawa, a remote island, when they are told that the plane is no longer flying to that island but another island instead. Picture those young men protesting, disembarking the plane, and then standing in front of that plane so it couldn’t leave, until their bags were taken off. Literally, a tarmac standoff! Picture those elders going two more times to the airport, over the course of two weeks, while working in other missionary areas each day, only to be told the flight was cancelled each time. Finally, and miraculously, being able to get there, after one missionary has a prayer answered and a family on that island prays that the plane will come because they need to be on the main island to leave for the temple the next week. Then, it all works out.
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
              All this and more while experiencing all the fun and excitement of being in a new country, with new food and water, on the other side of the world from your intestinal tract comfort zone, and shaking hands with hundreds of people. Let’s just say that part of grabbing the bullet train handle, involves grabbing it while not feeling 100%. In some cases, not even feeling 65%.
            </p>
            <p>
              But it’s like we said, the Lord is in it with us.
            </p>
            <p>
              There has been no time to prepare for almost anything. Many times, we are put on the spot, including below with National Television News. But the Lord has been in our minds and hearts and we have felt that we’ve been given in the very moment the things to say.
            </p>
            <p>
              All this while learning to drive on the other side of the road, in a car with the steering wheel on the other side, on roads that are perpetually under construction.
            </p>
            <p>
              Kim asked me the other day, “Knowing what you know now, would you still say yes to this calling?”
            </p>
            <p>
              We both knew the answer to that. 100% yes!
            </p>
            <p>
              Being a Bishop was the best perch from which to see the Lord personally minister to individuals and families.
            </p>
            <p>
              Being Mission Leaders is the best perch from which to see the Gathering of Israel in all the world. In just a few weeks we have a greater testimony of this verse and we know it’s only going to grow more and more -
            </p>
            <p>
              “Behold, I say unto you, I cannot say the smallest part which I feel…Now my brethren, we see that God is mindful of every people, whatsoever land they may be in; yea, he numbereth his people, and his bowels of mercy are over all the earth. Now this is my joy, and my great thanksgiving; yea, and I will give thanks unto my God forever. Amen.” (Alma 26:16,37)
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
          <PhotoGallery photos={gallery} />
        </section>

        <section className="service-strip">
          <div>
            <p className="kicker">Hands at work</p>
            <h2>Faith expressed in service.</h2>
            <p>
              From this group, members of the Church in the Solomon Islands have everything prepared so that they can go to the temple, a Herculean effort, the mission office including all the travel in and out, all the finances, all the housing needs, almost every administrative aspect of the Church in this country as well as all the Humanitarian and Self-Reliance programs, plus branch auditing. On top of it all, they bless the lives of the young Elders and Sisters with Family Home Evenings and the occasional emergency needs that come with life here as well as each taking a Branch or two and supporting the local leaders with a mounting list of needs. This is an amazing group and thankfully, MORE are ON THE WAY!
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
            We love you all and we want to thank you for your prayers and support. In a lot of ways, we know this is our mission together. We carry you with us every day!
          </p>
          <p>
            Truth is, we could go on for pages about these missionaries and the members. The faith and the deprivation. The miracles and the challenges. But we’ll save that for next time! But here are some more pics!
          </p>
          <p className="signature">With love,<br /><strong>President &amp; Sister Court</strong></p>
        </section>

        <nav className="letter-navigation" aria-label="Letter navigation">
          <Link href="/#letters"><span>←</span><small>Back to</small><strong>All letters</strong></Link>
          <div>
            <small>Current letter</small>
            <strong>Dispatch 01 · Month One</strong>
          </div>
        </nav>
      </main>

      <footer>
        <Link className="brand" href="/"><span className="brand-mark">S</span><span>Letters from the Solomon Islands</span></Link>
        <p>Solomon Islands Honiara Mission · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
