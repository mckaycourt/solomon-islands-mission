import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { PhotoGallery } from "../../PhotoGallery";

export const metadata: Metadata = {
  title: "Evridai, Evridai | Letters from the Solomon Islands",
  description: "Teaching, family home evenings, cocoa farming, temple journeys, new missionaries, and the Lord’s hand on Malaita.",
  openGraph: {
    title: "Letters from the Solomon Islands — Evridai, Evridai",
    description: "The work here continues at an amazing pace.",
    type: "article",
  },
};

const teachingPhotos = [
  { src: "/photos/august-5/teaching-selfie.jpg", alt: "Two missionaries teaching in a hillside neighborhood", caption: "Teaching on Guadalcanal" },
  { src: "/photos/august-5/walking-neighborhood.jpg", alt: "Two sister missionaries walking through a neighborhood", caption: "Sisters on their way" },
  { src: "/photos/august-5/porch-teaching.jpg", alt: "Missionaries visiting with people beneath a porch awning", caption: "Sharing testimonies" },
  { src: "/photos/august-5/family-teaching-selfie.jpg", alt: "Missionaries smiling with a family during a teaching visit", caption: "A joyful teaching visit" },
] as const;

const americaBeforeCopyPhotos = [
  { src: "/photos/august-5/guadalcanal-memorial.jpg", alt: "President and Sister Court at the Guadalcanal American Memorial", caption: "Guadalcanal American Memorial" },
  { src: "/photos/august-5/memorial-flags.jpg", alt: "American and Solomon Islands flags flying over the Guadalcanal memorial", caption: "Remembering those who served" },
  { src: "/photos/august-5/courts-memorial-selfie.jpg", alt: "President and Sister Court at the memorial wall", caption: "At the memorial wall" },
  { src: "/photos/august-5/independence-cake.jpg", alt: "A cake decorated as an American flag for the 250th anniversary", caption: "Celebrating 250 years" },
] as const;

const embassyPhotos = [
  { src: "/photos/august-5/embassy-reception.jpg", alt: "President and Sister Court with guests at the US Embassy reception", caption: "The US Embassy reception" },
] as const;

const fheBeforeCopyPhotos = [
  { src: "/photos/august-5/fhe-living-room.jpg", alt: "Missionaries and senior couples gathered in a living room for Family Home Evening", caption: "Family Home Evening together" },
  { src: "/photos/august-5/fhe-group.jpg", alt: "Missionaries smiling together during Family Home Evening", caption: "Learning from each other" },
  { src: "/photos/august-5/fhe-dinner.jpg", alt: "Missionaries and senior couples gathered around a dinner table", caption: "A good meal and good company" },
] as const;

const fheAfterCopyPhotos = [
  { src: "/photos/august-5/rainy-senior-missionaries.jpg", alt: "Senior missionaries smiling together on a rainy day", caption: "Our amazing senior missionaries" },
] as const;

const cocoaPhotos = [
  { src: "/photos/august-5/cocoa-farm-couple.jpg", alt: "President and Sister Court standing among cocoa trees", caption: "Amazing Grace Cocoa Farm" },
  { src: "/photos/august-5/cocoa-art.jpg", alt: "Local artwork displayed at the cocoa farm", caption: "Art at the family plantation" },
  { src: "/photos/august-5/cocoa-display.jpg", alt: "Colorful cocoa farm crafts and baskets", caption: "Made at the plantation" },
  { src: "/photos/august-5/cocoa-grinder.jpg", alt: "President Court working a wooden cocoa grinder", caption: "Learning how cocoa is produced" },
  { src: "/photos/august-5/coconut-harvest.jpg", alt: "President and Sister Court holding a freshly husked coconut", caption: "Fresh from the farm" },
  { src: "/photos/august-5/beach-dog.jpg", alt: "President Court standing near the beach with a dog", caption: "Tenaru Beach" },
  { src: "/photos/august-5/husking-coconut.jpg", alt: "Sister Court husking a coconut", caption: "Mom was a rock star" },
  { src: "/photos/august-5/bananas.jpg", alt: "Sister Court standing beneath a bunch of bananas", caption: "Finding the bananas" },
  { src: "/photos/august-5/grace-cocoa-farmer.jpg", alt: "Grace holding produce from her cocoa farm", caption: "Grace and her family plantation" },
] as const;

const omaePhotos = [
  { src: "/photos/august-5/omae-family-airport.jpg", alt: "The O’mae family together at the airport", caption: "The O’mae family · On their way to the temple" },
] as const;

const elderSamiaPhotos = [
  { src: "/photos/august-5/elder-samia-airport.jpg", alt: "Elder Samia with family and missionaries at the airport", caption: "Elder Samia · Back to serve" },
] as const;

const fanasiaPhotos = [
  { src: "/photos/august-5/fanasia-family.jpg", alt: "The Fanasia family with President and Sister Court", caption: "The Fanasia family · Sealed together" },
] as const;

const nahaHousePhotos = [
  { src: "/photos/august-5/naha-house-missionaries.jpg", alt: "Missionaries and senior couples together above the former Naha house", caption: "Goodbye to the Naha House" },
] as const;

const missionariesTogetherPhotos = [
  { src: "/photos/august-5/missionaries-together.jpg", alt: "A large group of missionaries gathered outside a meetinghouse", caption: "Ours forever" },
] as const;

const elderWilkersonPhotos = [
  { src: "/photos/august-5/elder-wilkerson-airport.jpg", alt: "Elder Wilkerson arriving at the Honiara airport", caption: "Welcome, Elder Wilkerson" },
] as const;

const dieselPhotos = [
  { src: "/photos/august-5/diesel-drum-shed.jpg", alt: "Missionaries moving a fuel drum from a storage shed", caption: "The empty drum" },
  { src: "/photos/august-5/diesel-team.jpg", alt: "Missionaries standing with a full fuel drum on Malaita", caption: "The full drum arrives" },
  { src: "/photos/august-5/fueling-mission-vehicle.jpg", alt: "President Court pouring diesel into the mission vehicle", caption: "One pitcher at a time" },
] as const;

const malaitaPhotos = [
  { src: "/photos/august-5/malaita-branch.jpg", alt: "Missionaries and branch members gathered at a meetinghouse on Malaita", caption: "The Saints on Malaita" },
  { src: "/photos/august-5/children-watching-baptism.jpg", alt: "Children and families who watched a baptism from beneath the trees", caption: "Watching the baptism from the trees" },
] as const;

const sourcePages = readFileSync(join(process.cwd(), "app/letters/august-5/letter.txt"), "utf8")
  .split("\f")
  .map((page) => page.split(/\n\s*\n/)
    .map((block) => block.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean));

function sourceParagraph(page: number, block: number) {
  return sourcePages[page - 1][block];
}

const fheParagraphOne =
  "We love having Family Home Evening with the Elders and Sisters! It is so fun to get together, have a good meal, talk about the gospel, " +
  "learn from each other and our various backgrounds and experiences, and then leave better prepared to live our missionary purpose of inviting all to come unto Christ " +
  "by helping them receive the restored gospel through faith in Jesus Christ and His atonement, repentance, baptism, receiving the gift of the Holy Ghost and enduring to the end!";
const fheParagraphTwo =
  "We’ve had such great experiences with each FHE we’ve had (Although some of our senior couples are pictured here, it is more common to have the missionaries in each of our four homes. " +
  "We could not do it without the amazing senior missionaries that are here sacrificing so much to serve the Lord)!";

export default function AugustFiveLetter() {
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
          <a className="nav-button" href="mailto:?subject=Letters%20from%20the%20Solomon%20Islands%20%E2%80%94%20Evridai%2C%20Evridai">Share</a>
        </nav>
      </header>

      <main id="top">
        <article className="postcard august-postcard" aria-labelledby="post-title">
          <div className="hero-photo august-hero-photo">
            <img src="/photos/august-5/malaita-baptism.jpg" alt="Missionaries and members gathered at a beach baptism on Malaita" />
            <p className="photo-caption">Malaita · Solomon Islands</p>
          </div>

          <div className="letter-face">
            <div className="airmail"><span>Dispatch 02</span></div>
            <p className="eyebrow">August 5, 2026</p>
            <h1 id="post-title">Evridai, <em>evridai</em></h1>
            <p className="deck">The work here continues at an amazing pace!</p>
            <div className="meta">
              <span>President &amp; Sister Court</span>
              <span>Honiara</span>
              <span>9 min read</span>
            </div>
            <p className="hand-note">we are in the hands of God</p>
            <div className="postmark" aria-hidden="true">Honiara<br />Solomon Islands<br />05 · 08 · 26</div>
            <div className="stamp" aria-hidden="true"><span><strong>SI</strong>post<br />with love</span></div>
          </div>

          <a className="scroll-cue" href="#letter" aria-label="Read the letter">↓</a>
        </article>

        <section className="letter-layout" id="letter">
          <aside className="chapter-note">
            <span className="script">August 5, 2026</span>
            <h2>The work continues</h2>
          </aside>
          <div className="story">
            <p className="dropcap">The work here continues at an amazing pace! We cannot find words to express how much we love these missionaries and how great it is to be with them, especially when they are teaching! It is inspiring to hear them teach the gospel and share their testimonies!</p>
          </div>
        </section>

        <section className="dispatch-section dispatch-gallery-first" id="photographs">
          <header>
            <p className="section-number">01</p>
            <h2>Teaching with purpose</h2>
          </header>
          <PhotoGallery photos={teachingPhotos} showCaptions={false} />
        </section>

        <section className="dispatch-section">
          <header>
            <p className="section-number">02</p>
            <h2>‘Merica on Guadalcanal</h2>
          </header>
          <PhotoGallery photos={americaBeforeCopyPhotos} showCaptions={false} />
          <div className="dispatch-copy">
            <p>It’s been so amazing to be living on Guadalcanal during the 250th anniversary of the signing of the Declaration of Independence and during the anniversary of the US Marines landing on Guadalcanal, August 7th, 1942.</p>
            <p>Around here it’s definitely been ‘Merica. We were invited by the US Embassy to a reception for the 250th and we visited the memorial of the US servicemen that lost their lives during the intense fighting with the Japanese here in the Solomon Islands. Gotta love our men and women in uniform!</p>
          </div>
          <PhotoGallery photos={embassyPhotos} showCaptions={false} />
        </section>

        <section className="dispatch-section dispatch-section-tinted">
          <header>
            <p className="section-number">03</p>
            <h2>Four homes, one purpose</h2>
          </header>
          <PhotoGallery photos={fheBeforeCopyPhotos} showCaptions={false} />
          <div className="dispatch-copy">
            <p>{fheParagraphOne}</p>
            <p>{fheParagraphTwo}</p>
          </div>
          <PhotoGallery photos={fheAfterCopyPhotos} showCaptions={false} />
        </section>

        <section className="dispatch-section">
          <header><p className="section-number">04</p><h2>Cocoa, coconuts, and Grace</h2></header>
          <PhotoGallery photos={cocoaPhotos} showCaptions={false} />
          <div className="dispatch-copy">
            <p>{sourceParagraph(19, 0)}</p>
            <p>{sourceParagraph(19, 1)}</p>
            <p>{sourceParagraph(19, 2)} {sourceParagraph(20, 0)}</p>
          </div>
        </section>

        <section className="dispatch-section dispatch-section-tinted">
          <header><p className="section-number">05</p><h2>The gathering on display</h2></header>
          <div className="dispatch-copy">
            <p>{sourceParagraph(20, 1)}</p>
          </div>
          <PhotoGallery photos={omaePhotos} showCaptions={false} />
          <div className="dispatch-copy"><p>{sourceParagraph(20, 2)}</p></div>
          <PhotoGallery photos={elderSamiaPhotos} showCaptions={false} />
          <div className="dispatch-copy"><p>{sourceParagraph(21, 0)}</p></div>
          <PhotoGallery photos={fanasiaPhotos} showCaptions={false} />
          <div className="dispatch-copy"><p>{sourceParagraph(22, 0)}</p></div>
        </section>

        <section className="dispatch-section dispatch-continuation">
          <PhotoGallery photos={nahaHousePhotos} showCaptions={false} />
          <div className="dispatch-copy">
            <p>{sourceParagraph(23, 0)}</p>
            <p>{sourceParagraph(23, 1)}</p>
            <p>{sourceParagraph(23, 2)}</p>
          </div>
          <PhotoGallery photos={missionariesTogetherPhotos} showCaptions={false} />
          <div className="dispatch-copy">
            <p>{sourceParagraph(24, 0)}</p>
            <p>{sourceParagraph(24, 1)}</p>
          </div>
          <PhotoGallery photos={elderWilkersonPhotos} showCaptions={false} />
          <div className="dispatch-copy">
            <p>{sourceParagraph(25, 0)}</p>
          </div>
        </section>

        <section className="dispatch-section malaita-section">
          <header><p className="section-number">06</p><h2>Malaita: delays with a purpose</h2></header>
          <div className="dispatch-copy">
            <p>{sourceParagraph(25, 1)}</p>
            <p>{sourceParagraph(25, 2)}</p>
            <p>{sourceParagraph(25, 3)}</p>
            <p>{sourceParagraph(25, 4)}</p>
          </div>
          <PhotoGallery photos={dieselPhotos} showCaptions={false} />
          <div className="dispatch-copy">
            <p>{sourceParagraph(28, 0)}</p>
            <p>{sourceParagraph(28, 1)} {sourceParagraph(29, 0)}</p>
            <p>{sourceParagraph(29, 1)}</p>
            <p>{sourceParagraph(29, 2)}</p>
            <p>{sourceParagraph(29, 3)}</p>
            <p>{sourceParagraph(29, 4)}</p>
            <p>{sourceParagraph(29, 5)}</p>
            <p>{sourceParagraph(29, 6)}</p>
          </div>
          <PhotoGallery photos={malaitaPhotos} showCaptions={false} />
        </section>

        <section className="scripture-closing">
          <p className="kicker">In the hands of God</p>
          <div className="closing-letter">
            <p>{sourceParagraph(31, 0)}</p>
            <p>{sourceParagraph(31, 1)}</p>
            <p className="signature">{sourceParagraph(31, 2)}</p>
          </div>
        </section>

        <nav className="letter-navigation" aria-label="Letter navigation">
          <Link href="/letters/month-one"><span>←</span><small>Previous letter</small><strong>Month One</strong></Link>
          <div><small>Current letter</small><strong>Dispatch 02 · Evridai, Evridai</strong></div>
        </nav>

        <footer className="letter-footer">
          <Link className="brand" href="/"><span className="brand-mark">S</span><span>Letters from the Solomon Islands</span></Link>
          <p>Solomon Islands Honiara Mission · 2026</p>
          <a href="#top">Back to top ↑</a>
        </footer>
      </main>
    </>
  );
}
