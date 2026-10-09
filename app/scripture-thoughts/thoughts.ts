type ThoughtBlock =
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | { kind: "paragraph" | "question" | "heading"; text: string }
  | { kind: "scripture"; paragraphs: string[]; url: string; reference: string };

export type ScriptureThought = {
  slug: string;
  title: string;
  day: string;
  chapters: { label: string; url: string }[];
  blocks: ThoughtBlock[];
};

export const scriptureThoughts: ScriptureThought[] = [
  {
    slug: "alma-6-and-7",
    title: "Alma 6 & 7",
    day: "Day 46/100",
    chapters: [
      { label: "Alma 6", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/6?lang=eng" },
      { label: "Alma 7", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/7?lang=eng" },
    ],
    blocks: [
      { kind: "paragraph", text: "When Elder Gong was here, he leaned forward and told Sister Court and I that we were in the planning and establishment phase of the Church in the Solomon Islands." },
      { kind: "paragraph", text: "Planning and establishment." },
      { kind: "question", text: "What can we learn about how the Church plans for and establishes a church from Alma 6 & 7?" },
      { kind: "paragraph", text: "Since the Lord sent Elder Gong to us and the Church here in Solomon Islands, we should learn from him and we should try to understand all that he taught us about the gospel and how to plan and establish the Church!" },
      { kind: "paragraph", text: "Please study Alma 6 and 7 thinking about this and also listening to the Spirit for what you might need for yourself, your companionship, or the members and friends in your area today! Alma 7 contains some of the sweetest doctrine about the Atonement of Jesus Christ and it's taught to the people of Gideon because they are ready! Let's be ready too so that the Lord can teach us of His ways and lift our mission up to new heights!" },
      { kind: "paragraph", text: "We love you all so much and we can’t wait to see you all soon!" },
    ],
  },
  {
    slug: "alma-5",
    title: "Alma 5",
    day: "Day 45/100",
    chapters: [
      { label: "Alma 5", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/5?lang=eng" },
    ],
    blocks: [
      { kind: "paragraph", text: "Elders and Sisters, we think Alma 5 should stand on its' own." },
      { kind: "paragraph", text: "Please read it and imagine you were there. Imagine you're attending a General Conference and Alma is speaking. As you read his words, imagine that he's asking you each question. Look inside." },
      { kind: "paragraph", text: "This is an amazing sermon!" },
    ],
  },
  {
    slug: "alma-3-and-4",
    title: "Alma 3 & 4",
    day: "Day 44/100",
    chapters: [
      { label: "Alma 3", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/3?lang=eng" },
      { label: "Alma 4", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/4?lang=eng" },
    ],
    blocks: [
      { kind: "paragraph", text: "Hi everyone! We arrived safely to Solomon Islands! Miss you already!" },
      { kind: "paragraph", text: "Alma 3 and Alma 4 expose the rapid spiritual decline of the Nephite nation caused by pride, while simultaneously highlighting the righteous minority who anchored themselves to Christ through humility, covenants, and the Holy Ghost." },
      { kind: "paragraph", text: "Taken together, these chapters present a real warning for us, Elders and Sisters - outward distinctions and material wealth can breed divisions that will harm our unity but true security is found only in an inward, unwavering devotion to God." },
      { kind: "paragraph", text: "In Alma 3, the Nephites face the consequences of war with the Amlicites and Lamanites. The chapter focuses heavily on how people choose their own spiritual and physical destinies by aligning themselves with righteousness or rebellion." },
      {
        kind: "scripture",
        reference: "Alma 3:26–27",
        url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/3?lang=eng&id=p26-p27#p26",
        paragraphs: [
          'Alma 3:26: "And in one year were thousands and tens of thousands of souls sent to the eternal world, that they might reap their rewards according to their works, whether they were good or whether they were bad, to reap eternal happiness or eternal misery..."',
          'Alma 3:27: "Every man receiveth wages of him whom he listeth to obey... therefore, they receive their wages according to their own spirit, whether it be a good spirit or a bad one."',
        ],
      },
      { kind: "paragraph", text: "Despite the wickedness of the majority of people, a dedicated group of believers chose a completely different path, they provided a great blueprint for maintaining a relationship with God during difficult times (and it was about the size of a stake - 3,500 of them were baptized so let's go!)." },
      {
        kind: "scripture",
        reference: "Alma 4:13–14",
        url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/4?lang=eng&id=p13-p14#p13",
        paragraphs: [
          "Alma 4:13 Now this was a great cause for lamentations among the people, while others were abasing themselves, succoring those who stood in need of their succor, such as imparting their substance to the poor and the needy, feeding the hungry, and suffering all manner of afflictions, for Christ’s sake, who should come according to the spirit of prophecy;",
          "14 Looking forward to that day, thus retaining a remission of their sins; being filled with great joy because of the resurrection of the dead, according to the will and power and deliverance of Jesus Christ from the bands of death.",
        ],
      },
      { kind: "paragraph", text: "We think there are some questions from these chapters to ask ourselves." },
      { kind: "question", text: "Are their divisions among us that hurt our unity?" },
      { kind: "question", text: "If so, how can we humbly eliminate them so we too can be filled with great joy?" },
      { kind: "question", text: "Who are we receiving wages from?" },
      { kind: "question", text: "Who do we “listeth to obey”?" },
      { kind: "paragraph", text: "We pray for all of us that we can receive wages from the Lord because we follow Him." },
      { kind: "paragraph", text: "We also pray that we can serve those that need us each day by fulfilling our missionary purpose of inviting others to come unto Christ by helping them receive the restored gospel through faith in the Lord Jesus Christ and His Atonement, repentance, baptism, receiving the gift of the Holy Ghost and enduring to the end." },
      { kind: "paragraph", text: "We love you all!" },
    ],
  },
  {
    slug: "alma-1-and-2",
    title: "Alma 1 & 2",
    day: "Day 43/100",
    chapters: [
      { label: "Alma 1", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/1?lang=eng" },
      { label: "Alma 2", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/2?lang=eng" },
    ],
    blocks: [
      { kind: "paragraph", text: "Elders and Sisters, as we preach the gospel, Alma 1 offers vital warnings for our missions. The story of Nehor shows us a couple of themes for sure that directly apply to today’s world - the danger of priestcraft and the erosion of personal accountability." },
      { kind: "paragraph", text: "First, we witness Nehor championing priestcraft, teaching that leaders should be popular and that it can be carried out by force. In Alma 1:3, he declares that priests “ought not to labor with their hands, but that they ought to be supported by the people.” In contrast, we see the righteous Gideon, who stood as an example of honest labor and selfless service. In today's world full of people that commercialize faith and seek wealth over truth, we urge you to emulate Gideon's integrity rather than Nehor's pride." },
      { kind: "paragraph", text: "Second, Nehor flattered the people by eliminating the need for repentance, teaching in Alma 1:4 that “all mankind should be saved at the last day... for the Lord had created all men, and had also redeemed all men.” This mirrors the modern incorrect belief that we will all be saved where accountability is dismissed. When Gideon withstood Nehor with the words of God, Nehor slew him with the sword. Nehor’s eventual execution proves that deceptive philosophies cannot escape divine justice." },
      { kind: "paragraph", text: "In Alma 2, we watch this deceptive priestcraft taken to an even more dangerous level through Amlici. Nehor sought wealth and praise, but Amlici uses those same flattering doctrines to seek total political tyranny, attempting to rob the people of religious liberty. When the democratic voice of the people rejects him, Amlici’s pride ignites a violent, bloody civil war." },
      { kind: "paragraph", text: "We learn a sobering lesson for our time that unchecked priestcraft doesn't just corrupt individual souls, it can destroy communities, divide nations, and actively fight against the kingdom of God." },
      { kind: "paragraph", text: "Sister Court and I pray you will use these comparisons to help others recognize modern traps. True joy requires the personal accountability Gideon defended, not the flattering deceits of Nehor and Amlici." },
    ],
  },
  {
    "slug": "mosiah-27",
    "title": "Mosiah 27",
    "day": "Day 42/100",
    "chapters": [
      {
        "label": "Mosiah 27",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/27?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "We admit it, the Alma the Younger story is one of our favorites in all of scripture! Him choosing to use his agency to repent, and all that the Lord teaches him about repentance and being born again, is just amazing! The transformation he experienced wasn't just a surface-level change, it was a complete spiritual rebirth."
      },
      {
        "kind": "paragraph",
        "text": "After experiencing the overwhelming joy of the Atonement, he testified of this beautiful change, \"For, said he, I have repented of my sins, and have been redeemed of the Lord; behold I am born of the Spirit\" (Mosiah 27:24). Alma's story makes it clear that true repentance isn't a punishment—it is the liberating process of being rescued and renewed by Jesus Christ."
      },
      {
        "kind": "paragraph",
        "text": "The Lord made sure to emphasize to Alma that this miraculous change is meant for absolutely everyone. As the scripture continues: \"And the Lord said unto me: Marvel not that all mankind, yea, men and women, all nations, kindreds, tongues and people, must be born again; yea, born of God, changed from their carnal and fallen state, to a state of righteousness, being redeemed of God, becoming his sons and daughters\" (Mosiah 27:25)."
      },
      {
        "kind": "paragraph",
        "text": "This message is the heartbeat of our missionary purpose. It was true for Alma, it’s true for all of us missionaries, and it’s true for all of the members and friends that we teach. No matter where we come from or what our past looks like, we all need the Savior and to be changed by Him! He is the greatest!"
      },
      {
        "kind": "paragraph",
        "text": "Have a great day! \nLavem ufala evriwan tumas!"
      }
    ]
  },
  {
    "slug": "mosiah-25-and-26",
    "title": "Mosiah 25 - 26",
    "day": "Day 41/100",
    "chapters": [
      {
        "label": "Mosiah 25",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/25?lang=eng"
      },
      {
        "label": "Mosiah 26",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/26?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Mosiah 25 and 26 emphasize emotional and spiritual unity and the divine nature of personal accountability."
      },
      {
        "kind": "heading",
        "text": "Mourning and Comforting Through Emotional & Spiritual Unity"
      },
      {
        "kind": "paragraph",
        "text": "When the assembled Nephites hear the accounts of Alma’s people and the Lamanites, they are moved to a deep sense of shared grief. When they thought of their brethren's immediate suffering and captivity, \"they were filled with sorrow, and even shed many tears of sorrow\" (Mosiah 25:9). What a great willingness to feel alongside others!"
      },
      {
        "kind": "paragraph",
        "text": "This deep “fellow-feeling” aligns with the principles taught in Preach My Gospel, which explains that developing Christlike love means our actions are driven by genuine concern: \"Charity is the pure love of Christ... It includes God’s love for all His children and our love for Him and our fellowmen\" Preach My Gospel, Chapter 6: Seek Christlike Attributes. When we develop this trait, we naturally mourn with those who suffer and we even see how we might be able to alleviate some part of the pain."
      },
      {
        "kind": "heading",
        "text": "Sincere Repentance and the Bounds of Forgiveness"
      },
      {
        "kind": "paragraph",
        "text": "In chapter 26, the rising generation won’t believe, they bring dissension into the Church, which causes Alma to seek divine direction regarding transgression. The Lord responds with a universal doctrine of mercy for each of us - \"if he confess his sins before thee and me, and repenteth in the sincerity of his heart, him shall ye forgive, and I will forgive him also\" (Mosiah 26:29). The Lord promises that \"as often as my people repent will I forgive them\" (Mosiah 26:30)."
      },
      {
        "kind": "paragraph",
        "text": "Remember that, Elders and Sisters! It’s true for us too! We can repent and He will forgive us!"
      },
      {
        "kind": "paragraph",
        "text": "However, the Lord also outlines clear consequences for deliberate non-compliance - \"whosoever will not repent of his sins the same shall not be numbered among my people\" (Mosiah 26:32). This distinction echoes the core lesson taught in Preach My Gospel: \"Repentance is the process of turning to God and turning away from sin... When we sincerely repent, God forgives us. Forgiveness is possible because Jesus Christ atoned for our sins\" (Preach My Gospel, Chapter 3: Lesson 3—The Gospel of Jesus Christ)."
      },
      {
        "kind": "paragraph",
        "text": "God requires our personal accountability and while His forgiveness is endlessly accessible to the repentant heart, remaining deliberately unrepentant can separate each of us from Him and His Church."
      },
      {
        "kind": "paragraph",
        "text": "Finally, we learn a powerful lesson in Priesthood Authority in these chapters. The Church was organized, new members baptized, people met and were taught, and even members confessed, repented and were forgiven, or didn’t and were separated from the Church, all through priesthood keys."
      },
      {
        "kind": "paragraph",
        "text": "Keep this in mind. Don’t just acknowledge the Lord’s hand, His power and His authority - Praise it! It is here in THIS CHURCH!"
      },
      {
        "kind": "paragraph",
        "text": "Today we were in the Kola’a Ridge DCM (which was amazing - you Elders and Sisters bring us such joy!), and we were discussing friends that don’t understand their need to be baptized or in their minds \"baptized again.\""
      },
      {
        "kind": "paragraph",
        "text": "Remember our purpose is to invite all to come unto Christ and receive the RESTORED gospel by helping them…"
      },
      {
        "kind": "paragraph",
        "text": "One part of helping them is to take Elder Boom’s invitation to learn more about Joseph Smith and the restoration. What was restored in the First Vision and subsequent visions and revelations was that Baptism is the gateway that points us to the Temple and additional covenants with God and an eternity of blessings with Heavenly Father, Jesus Christ and our families!"
      },
      {
        "kind": "paragraph",
        "text": "Look at the power and authority revealed -"
      },
      {
        "kind": "paragraph",
        "text": "1. Direct counsel about which church to join and why\n2. The Book of Mormon\n3. The Aaronic Priesthood from John the Baptist\n4. The Melchizedek Priesthood from Peter, James, and John\n5. The Keys of the Gathering of Israel from Moses\n6. The Dispensation of the Gospel of Abraham from Elias\n7. The Keys of Sealing from Elijah"
      },
      {
        "kind": "paragraph",
        "text": "Look at that list! Some of the GOAT’s of discipleship and priesthood power! That is what people need to understand! His POWER and his AUTHORITY are back on Earth and it can bring such blessings into their lives. We know it! We love you Elders and Sisters and pray for you everyday!"
      }
    ]
  },
  {
    "slug": "mosiah-23-and-24",
    "title": "Mosiah 23 - 24",
    "day": "Day 40/100",
    "chapters": [
      {
        "label": "Mosiah 23",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/23?lang=eng"
      },
      {
        "label": "Mosiah 24",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/24?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "heading",
        "text": "The Divine Purpose of Adversity"
      },
      {
        "kind": "paragraph",
        "text": "Even when we are righteous, the Lord allows us to face trials to refine us. As the record states: \"Nevertheless the Lord seeth fit to chasten his people; yea, he trieth their patience and their faith\" (Mosiah 23:21). This aligns with the teaching on patience in Preach My Gospel - “Patience is the ability to endure delay, trouble, opposition, or suffering without getting angry, frustrated, or anxious. It is doing God’s will and accepting His timing with hope and faith.\" Under heavy Lamanite oppression, Alma’s people demonstrated this Christlike attribute by enduring their afflictions calmly, trusting in God's ultimate plan for their growth and their deliverance."
      },
      {
        "kind": "heading",
        "text": "Strengthened Through Humble Submission"
      },
      {
        "kind": "paragraph",
        "text": "When Amulon banned open prayer under penalty of death, the people did not rebel; instead, they \"did pour out their hearts to him\" in silence (Mosiah 24:11–12). Because they submitted completely to His will, the Lord promised: \"I will also ease the burdens which are put upon your shoulders\" (Mosiah 24:14). This narrative illustrates how the Lord blesses those who develop the attribute of humility. As Preach My Gospel teaches: \"Humility includes gratitude for God’s blessings and acknowledgment of your constant need for His help. He helps those who are humble.\" Because they acknowledged their constant need for Him, the Lord \"did strengthen them that they could bear up their burdens with ease, and they did submit cheerfully and with patience to all the will of the Lord\" (Mosiah 24:15)."
      },
      {
        "kind": "paragraph",
        "text": "Through patience and humility, the \"impossible\" trial of captivity became a showcase of divine deliverance."
      },
      {
        "kind": "paragraph",
        "text": "You have heard Sister Court and I talk about how this story impacted our lives. We were so sad. We had a problem we could not solve. This story brought us God’s light, patience, and a belief that the Lord would be with us! It all proved to be true and we ended up with our two beautiful girls!"
      },
      {
        "kind": "paragraph",
        "text": "The Book of Mormon has answers to questions of the soul and to real-life problems, Elders and Sisters. But what if we weren’t reading it? Or worse, what if we’d never heard of it?"
      },
      {
        "kind": "paragraph",
        "text": "As we fulfill our missionary purpose, let’s bear testimony and promise blessings of reading the Book of Mormon! It will bless the lives of any who read it!"
      }
    ]
  },
  {
    "slug": "mosiah-21-and-22",
    "title": "Mosiah 21 - 22",
    "day": "Day 39/100",
    "chapters": [
      {
        "label": "Mosiah 21",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/21?lang=eng"
      },
      {
        "label": "Mosiah 22",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/22?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "In these chapters King Limhi’s people faced the difficult reality of living under Lamanite oppression. Yes, it was a consequence of their sinfulness. But it was still difficult. Frustrated, they initially reacted with pride. As PMG explains on pgs 131-132, pride means putting greater trust in oneself than in God and can become a great stumbling block. They still hadn’t learned humility, which is putting greater trust in God than oneself."
      },
      {
        "kind": "paragraph",
        "text": "So, while still relying strictly on their own strength, Limhi's people went to war three times to fight for their freedom. Each time, they were defeated with great loss of life (Mosiah 21:11–12)."
      },
      {
        "kind": "paragraph",
        "text": "These desperate circumstances, and painful loss of life, eventually taught them humility, a sign of spiritual strength, not weakness. They \"did humble themselves even to the dust... crying mightily to God that he would deliver them\" (Mosiah 21:13–14). This shift perfectly illustrates the definition of humility, a willingness to submit to the will of the Lord and an acknowledgment of our constant need for His help."
      },
      {
        "kind": "paragraph",
        "text": "When we humbly trust the Lord, we gain the confidence that we can do whatever He requires if we rely on Him. For Limhi's people, this humility made them teachable and willing to trust God's servants. When Ammon and Gideon arrived with a plan, the people chose to follow their counsel rather than trying to force their own way again."
      },
      {
        "kind": "paragraph",
        "text": "Another theme from this story is that sometimes the Lord does not deliver us immediately. He did not deliver them instantly, but He began easing their burdens because He helps those who are humble (Mosiah 21:15). Eventually, the Lord provided a practical, peaceful escape through a back pass while the drunken guards slept (Mosiah 22:6–11)."
      },
      {
        "kind": "paragraph",
        "text": "Humility acts as a vital catalyst for spiritual growth. By shifting from prideful reliance on self to divine reliance, Limhi’s people proved that when we align our efforts with the Lord, the impossible becomes completely doable."
      },
      {
        "kind": "paragraph",
        "text": "We love this verse, “And it came to pass that they began to prosper by degrees in the land…” (Mosiah 21:16)"
      },
      {
        "kind": "paragraph",
        "text": "There are a lot of examples of this in our lives as missionaries. Maybe you’re working on a Christlike attribute, breaking a bad habit, or even working to be a more obedient missionary."
      },
      {
        "kind": "paragraph",
        "text": "Be humble and ask the Lord for help. Then make an effort. Just watch closely as you begin to “prosper by degrees”, finding more people to teach, having the days go by faster, having less drunks on the street, feeling the pain of walking the hills a little less, or maybe even having more of your friends come to Church and make and keep commitments."
      },
      {
        "kind": "paragraph",
        "text": "Let’s not rely on our own strength. Let’s be humble and obedient, as we fulfill our missionary purpose, and watch the Lord prosper us by degrees!"
      },
      {
        "kind": "paragraph",
        "text": "Finally, look at how important changing and being baptized was to them!"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "32 And now since the coming of Ammon, king Limhi had also entered into a covenant with God, and also many of his people, to serve him and keep his commandments.",
          "33 And it came to pass that king Limhi and many of his people were desirous to be baptized; but there was none in the land that had authority from God. And Ammon declined doing this thing, considering himself an unworthy servant.",
          "34 Therefore they did not at that time form themselves into a church, waiting upon the Spirit of the Lord. Now they were desirous to become even as Alma and his brethren, who had fled into the wilderness.",
          "35 They were desirous to be baptized as a witness and a testimony that they were willing to serve God with all their hearts; nevertheless they did prolong the time; and an account of their baptism shall be given hereafter."
        ],
        "reference": "Mosiah 21:32–35",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/21?lang=eng&id=p32-p35#p32"
      },
      {
        "kind": "paragraph",
        "text": "Elders and Sisters, isn’t it great that we have received the power of the Priesthood and with that authority we can teach our friends about repentance, faith in the Lord Jesus Christ, and baptism, and they can choose to be baptized! It is such a great blessing that they don’t have to wait like Limhi’s people, because of your efforts and priesthood authority!"
      },
      {
        "kind": "paragraph",
        "text": "We love you so very much! Enjoy P-Day!"
      }
    ]
  },
  {
    "slug": "mosiah-19-and-20",
    "title": "Mosiah 19 - 20",
    "day": "Day 38/100",
    "chapters": [
      {
        "label": "Mosiah 19",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/19?lang=eng"
      },
      {
        "label": "Mosiah 20",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/20?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "King Noah’s people engaged in his sins. It’s easy to do when your leader says it’s ok. But this story shows how unrepented sin drives individuals to actions they once thought impossible."
      },
      {
        "kind": "paragraph",
        "text": "Bound by their choices, grown men eventually found themselves abandoning their wives and children to save their own lives, an act they never could have imagined doing in their right minds. But they were following a wicked leader."
      },
      {
        "kind": "paragraph",
        "text": "As Mosiah 19:11 records, \"the king commanded them that all men should leave their wives and their children, and flee before the Lamanites.\" The progression of sin can rob any of us of our moral compass,  blinding us until we cross lines we never thought possible."
      },
      {
        "kind": "paragraph",
        "text": "In sharp contrast to this scene that ended in King Noah’s death by fire, stands Gideon, who beautifully bridges the roles of a courageous warrior and a wise peacemaker."
      },
      {
        "kind": "paragraph",
        "text": "Gideon was not afraid to fight for justice; he famously drew his sword against King Noah to stop his wickedness (Mosiah 19:4). Yet, his true strength lay in his restraint and submissiveness to the greater good (19:7-8)."
      },
      {
        "kind": "paragraph",
        "text": "When the Lamanites attacked in retaliation for the priests' crimes, Gideon did not let pride dictate a bloodbath. Instead, he counseled the new King Limhi to extend mercy, search out the truth, and advised him to recognize their sins, Abinadi’s prophecy coming true, and their need to live up to the oath that they had made to the Lamanites to remain in bondage to them (all righteous noble things) -"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "21 For are not the words of Abinadi fulfilled, which he prophesied against us—and all this because we would not hearken unto the words of the Lord, and turn from our iniquities?",
          "22 And now let us pacify the king, and we fulfil the oath which we have made unto him; for it is better that we should be in bondage than that we should lose our lives; therefore, let us put a stop to the shedding of so much blood."
        ],
        "reference": "Mosiah 20:21–22",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/20?lang=eng&id=p21-p22#p21"
      },
      {
        "kind": "paragraph",
        "text": "Gideon proved that genuine courage does not necessarily mean seeking victory on the battlefield; with Gideon it meant having the bravery to fight when necessary, and the humility to sue for peace when it was right to do and would preserve life."
      },
      {
        "kind": "paragraph",
        "text": "Lots of lessons in the Book of Mormon Elders and Sisters! Let’s be great examples of the names we wear today and our missionary purpose!"
      }
    ]
  },
  {
    "slug": "mosiah-17-and-18",
    "title": "Mosiah 17 - 18",
    "day": "Day 37/100",
    "chapters": [
      {
        "label": "Mosiah 17",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/17?lang=eng"
      },
      {
        "label": "Mosiah 18",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/18?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Elders and Sisters, your mission will test you, but Mosiah 17–18 provides a playbook for success."
      },
      {
        "kind": "paragraph",
        "text": "First, be true no matter the cost. Look at Abinadi. Surrounded by a hostile court, he refused to retract his words. He declared, “I will not recall my words…for they are true…even unto death” (Mosiah 17:9-10)."
      },
      {
        "kind": "paragraph",
        "text": "He paid the ultimate price, sealed his testimony with his life, and showed us that standing for truth is never a losing battle."
      },
      {
        "kind": "paragraph",
        "text": "One individual you teach matters. From Abinadi’s fearless teaching and ultimate sacrifice Alma emerges."
      },
      {
        "kind": "paragraph",
        "text": "Alma was just one “friend” in a corrupt court, yet he repented, fled, and \"began to teach the words of Abinadi\" (Mosiah 18:1)."
      },
      {
        "kind": "paragraph",
        "text": "Never underestimate the power of finding that one soul. Your entire mission is worth it for the one individual who is waiting to hear the voice of the Lord through you."
      },
      {
        "kind": "paragraph",
        "text": "Finally, remember the blessings of having the baptismal covenant in common."
      },
      {
        "kind": "paragraph",
        "text": "Alma took those truths to the Waters of Mormon, creating a beautiful sanctuary, a Zion. He reminded the people that they were bound together, \"willing to bear one another’s burdens, that they may be light; yea, and are willing to mourn with those that mourn and comfort those that stand in need of comfort\" (Mosiah 18:8–9)."
      },
      {
        "kind": "paragraph",
        "text": "As companionships, you share this exact covenant. You are not alone out here. When you see your companion struggling, bear that burden. When a friend feels overwhelmed, stand as a witness of God to comfort them, invite them to more fully receive the restored gospel and promise them blessings."
      },
      {
        "kind": "paragraph",
        "text": "Be fearless like Abinadi. Search for the one like Alma. Rely on our covenant community by being there for those around you and receiving the help you need from others. The same Spirit that filled the people at the Waters of Mormon is ready to fill you on your mission today."
      }
    ]
  },
  {
    "slug": "mosiah-15-and-16",
    "title": "Mosiah 15 - 16",
    "day": "Day 36/100",
    "chapters": [
      {
        "label": "Mosiah 15",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/15?lang=eng"
      },
      {
        "label": "Mosiah 16",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/16?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Elders and Sisters today we testify of two things from this reading."
      },
      {
        "kind": "paragraph",
        "text": "Everyone saved will have chosen to follow a prophet and that following that prophet will, at some point, not be easy. But Christ’s seed are those that follow the prophets and it is a sure thing!"
      },
      {
        "kind": "paragraph",
        "text": "“There is no end to the adversary’s deceptions. Please be prepared. Never take counsel from those who do not believe. Seek guidance from voices you can trust — from prophets, seers and revelators and from the whisperings of the Holy Ghost, who ‘will show unto you all things what ye should do’ (2 Nephi 32:5). Please do the spiritual work to increase your capacity to receive personal revelation.” President Nelson"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Mosiah 15:10-12\n“…Behold, I say unto you, that when his soul has been made an offering for sin he shall see his seed. And now what say ye? And who shall be his seed?",
          "Behold I say unto you, that whosoever has heard the words of the prophets, yea, all the holy prophets who have prophesied concerning the coming of the Lord—I say unto you, that all those who have hearkened unto their words, and believed that the Lord would redeem his people, and have looked forward to that day for a remission of their sins, I say unto you, that these are his seed, or they are the heirs of the kingdom of God.",
          "For these are they whose sins he has borne; these are they for whom he has died, to redeem them from their transgressions."
        ],
        "reference": "Mosiah 15:10–12",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/15?lang=eng&id=p10-p12#p10"
      },
      {
        "kind": "paragraph",
        "text": "Secondly, Jesus Christ is the only way and there is no other name or way back to the loving arms of our Heavenly Father but we have to choose Him by our repentance and obedience."
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Mosiah 16:11-13",
          "11 If they be good, to the resurrection of endless life and happiness; and if they be evil, to the resurrection of endless damnation, being delivered up to the devil, who hath subjected them, which is damnation—",
          "12 Having gone according to their own carnal wills and desires; having never called upon the Lord while the arms of mercy were extended towards them; for the arms of mercy were extended towards them, and they would not; they being warned of their iniquities and yet they would not depart from them; and they were commanded to repent and yet they would not repent.",
          "13 And now, ought ye not to tremble and repent of your sins, and remember that only in and through Christ ye can be saved?"
        ],
        "reference": "Mosiah 16:11–13",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/16?lang=eng&id=p11-p13#p11"
      },
      {
        "kind": "paragraph",
        "text": "Finally, these chapters are anthems to our callings as missionaries! Enjoy being those that publish peace and declare glad tidings! What a privilege to serve the Lord as a missionary! \nWe love you!"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Mosiah 15:28\n28 And now I say unto you that the time shall come that the salvation of the Lord shall be declared to every nation, kindred, tongue, and people."
        ],
        "reference": "Mosiah 15:28",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/15?lang=eng&id=p28#p28"
      }
    ]
  },
  {
    "slug": "mosiah-13-and-14",
    "title": "Mosiah 13 & 14",
    "day": "Day 35/100",
    "chapters": [
      {
        "label": "Mosiah 13",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/13?lang=eng"
      },
      {
        "label": "Mosiah 14",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/14?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "question",
        "text": "Question 1 - What do people perceive when they are around you?"
      },
      {
        "kind": "question",
        "text": "Question 2 - Abinadi teaches that what they would do to him was what would later happen to them. What if what you do, is just a future tell of what will come back to you?"
      },
      {
        "kind": "paragraph",
        "text": "What do people perceive in you? Abinadi does a lot of perceiving in chapter 13 and what he perceives in them is not good."
      },
      {
        "kind": "paragraph",
        "text": "Did you know that, Elders and Sisters?"
      },
      {
        "kind": "paragraph",
        "text": "Men and women with stewardship, men and women with the Spirit of the Lord and responsibilities in the Kingdom of God, or men and women with parental stewardships for their children, they receive the gift of discernment. That gift helps them perceive, they receive eyes to see. They might not know exactly what is wrong, exactly what the sins are, but they can tell something is off, and given enough time and a good dose of honesty, the truth will come out (and usually help)!"
      },
      {
        "kind": "paragraph",
        "text": "So, just a heads up, we’re all being perceived. People that sin that think they’re hiding, they’re just not."
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "7 Ye see that ye have not power to slay me, therefore I finish my message. Yea, and I perceive that it cuts you to your hearts because I tell you the truth concerning your iniquities.",
          "8 Yea, and my words fill you with wonder and amazement, and with anger.",
          "9 But I finish my message; and then it matters not whither I go, if it so be that I am saved.",
          "10 But this much I tell you, what you do with me, after this, shall be as a type and a shadow of things which are to come.",
          "11 And now I read unto you the remainder of the commandments of God, for I perceive that they are not written in your hearts; I perceive that ye have studied and taught iniquity the most part of your lives."
        ],
        "reference": "Mosiah 13:7–11",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/13?lang=eng&id=p7-p11#p7"
      },
      {
        "kind": "question",
        "text": "Question 3 - Why does Abinadi teach the 10 commandments?"
      },
      {
        "kind": "paragraph",
        "text": "Although most of the Ten Commandments list things we should not do, they also represent things we should do. The Savior summarized the Ten Commandments in two principles—love for the Lord and love for our fellow men:"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "“Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.",
          "“This is the first and great commandment.",
          "“And the second is like unto it, Thou shalt love thy neighbour as thyself” (Matthew 22:37–39)."
        ],
        "reference": "Matthew 22:37–39",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/nt/matt/22?lang=eng&id=p37-p39#p37"
      },
      {
        "kind": "paragraph",
        "text": "(The commandments pave the way for us to be able to obey other commandments that will come from the Lord as well as keep the covenants that we make with Him)."
      },
      {
        "kind": "question",
        "text": "Question 4 - What do you learn about the Savior from Mosiah 14. The entire chapter is about Him. Read it with Him in your mind and heart."
      },
      {
        "kind": "paragraph",
        "text": "We love you and pray that you will be blessed and protected as you serve the Lord today!"
      }
    ]
  },
  {
    "slug": "mosiah-11-and-12",
    "title": "Mosiah 11-12",
    "day": "Day 34/100",
    "chapters": [
      {
        "label": "Mosiah 11",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/11?lang=eng"
      },
      {
        "label": "Mosiah 12",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/12?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Elders and Sisters we think this talk is probably the best introduction to Abinadi, King Noah and his people."
      },
      {
        "kind": "paragraph",
        "text": "As you read this quote from Let God Prevail! and the chapters from today’s reading, ask yourself, how do I respond when I’m told to repent? What am I like when it’s pointed out that I need to change? How deep are have your desires sunk into your heart? Do they override the will and commandments of the Lord?"
      },
      {
        "kind": "paragraph",
        "text": "Here’s some vintage President Nelson -"
      },
      {
        "kind": "paragraph",
        "text": "“Are you willing to let God prevail in your life? Are you willing to let God be the most important influence in your life? Will you allow His words, His commandments, and His covenants to influence what you do each day? Will you allow His voice to take priority over any other? Are you willing to let whatever He needs you to do take precedence over every other ambition? Are you willing to have your will swallowed up in His?"
      },
      {
        "kind": "paragraph",
        "text": "Consider how such willingness could bless you. When your greatest desire is to let God prevail, to be part of Israel, so many decisions become easier. So many issues become nonissues! You know how best to groom yourself. You know what to watch and read, where to spend your time, and with whom to associate. You know what you want to accomplish. You know the kind of person you really want to become. Now, my dear brothers and sisters, it takes both faith and courage to let God prevail. It takes persistent, rigorous spiritual work to repent and to put off the natural man through the Atonement of Jesus Christ. It takes consistent, daily effort to develop personal habits to study the gospel, to learn more about Heavenly Father and Jesus Christ, and to seek and respond to personal revelation. During these perilous times of which the Apostle Paul prophesied, Satan is no longer even trying to hide his attacks on God’s plan. Emboldened evil abounds. Therefore, the only way to survive spiritually is to be determined to let God prevail in our lives, to learn to hear His voice, and to use our energy to help gather Israel."
      },
      {
        "kind": "paragraph",
        "text": "Now, how does the Lord feel about people who will let God prevail? Nephi summed it up well: “[The Lord] loveth those who will have him to be their God.”"
      },
      {
        "kind": "paragraph",
        "text": "Elders and Sisters, Abinadi is one of the all-time greatest! King Noah is not."
      },
      {
        "kind": "paragraph",
        "text": "We love you! Have a great day of fulfilling your missionary purpose!"
      }
    ]
  },
  {
    "slug": "mosiah-8-and-10",
    "title": "Mosiah 8-10",
    "day": "Day 33/100",
    "chapters": [
      {
        "label": "Mosiah 8",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/8?lang=eng"
      },
      {
        "label": "Mosiah 9",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/9?lang=eng"
      },
      {
        "label": "Mosiah 10",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/10?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Sister Court and I think that a reading of these chapters should really start with PMG, the bottom of page 182 (Use the Scriptures) and through the bottom of 184 (Help People Use the Scriptures)"
      },
      {
        "kind": "heading",
        "text": "Use the Scriptures"
      },
      {
        "kind": "paragraph",
        "text": "The standard works of the Church are your basic sources for teaching the restored gospel of Jesus Christ. There are many reasons why it is vital to use the scriptures as the basis for your teaching. \nFor example:\n* The scriptures invite the Holy Ghost into your teaching (see Luke 24:13–32).\n* The scriptures have a more powerful effect on the minds of people than anything else (see Alma 31:5).\n* The scriptures address the great questions of the soul (see chapter 5; see also 2 Nephi 32:3; Jacob 2:8).\n* The scriptures give authority and validity to your teaching.\n* The Lord and His prophets have said to do so (see Doctrine and Covenants 42:12, 56–58; 71:1)."
      },
      {
        "kind": "paragraph",
        "text": "As you read these chapters, see if you can find all the why’s related to the importance of knowing, learning from, and teaching with the scriptures."
      },
      {
        "kind": "paragraph",
        "text": "Here’s a great prophetic quote about the scriptures -"
      },
      {
        "kind": "paragraph",
        "text": "\"I find that when I get casual in my relationships with divinity and when it seems that no divine ear is listening and no divine voice is speaking, that I am far, far away. If I immerse myself in the scriptures the distance narrows and the spirituality returns.\"  \nSpencer W. Kimball"
      },
      {
        "kind": "paragraph",
        "text": "Here are some of the themes that stand out to us - \nThe Role & Power of a Seer\nMosiah 8:13, 16-17"
      },
      {
        "kind": "paragraph",
        "text": "The Consequences of Being Too Eager (Over Zealous) & of Blind Trust \nMosiah 9:3, 10"
      },
      {
        "kind": "paragraph",
        "text": "The Real Danger of Inherited Hate & Cultural Traditions\nMosiah 10:12, 15-16"
      },
      {
        "kind": "paragraph",
        "text": "Sister Court talked powerfully about forgiving in District Conference. Forgive, Elders and Sisters, and let go of hatred. It will rob you of joy and keep you from your missionary purpose now and seeing the hand of the Lord in your lives later."
      },
      {
        "kind": "paragraph",
        "text": "We love you so much and hope that this week is a week of joy, of being the message, of doing the will of the Father, of living and teaching the Doctrine of Christ."
      },
      {
        "kind": "paragraph",
        "text": "In short, a week of fulfilling your missionary purpose!"
      }
    ]
  },
  {
    "slug": "mosiah-6-and-7",
    "title": "Mosiah 6 & 7",
    "day": "Day 32/100",
    "chapters": [
      {
        "label": "Mosiah 6",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/6?lang=eng"
      },
      {
        "label": "Mosiah 7",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/7?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "We hope you enjoyed District Conference yesterday! As we looked around that room we saw the results of the desire and commitment that define success as a missionary. So many of those members are members because of your willingness to serve the Lord and fulfill your missionary purpose!"
      },
      {
        "kind": "paragraph",
        "text": "It’s also no surprise to us, that the Book of Mormon comes through today with lessons that are perfectly timed."
      },
      {
        "kind": "paragraph",
        "text": "Mosiah 6 is the administrative and spiritual bridge that follows King Benjamin’s amazing sermon. It is a perfect description of how much legitimate work it is to transition a people, newly converted to Christ, into sustainable, lifelong discipleship."
      },
      {
        "kind": "paragraph",
        "text": "That is what you’ll read in chapter six and it is also what is happening here in the Solomon Islands! The Book of Mormon is amazing!"
      },
      {
        "kind": "paragraph",
        "text": "Here are some highlights that point to this -"
      },
      {
        "kind": "heading",
        "text": "1. The Power of Names and Accountability (So important to put data into PMG App)"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Mosiah 6:1 - And now, king Benjamin thought it was expedient, after he had finished speaking to the people, that he should take the names of all those who had entered into a covenant with God to keep his commandments."
        ],
        "reference": "Mosiah 6:1",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/6?lang=eng&id=p1#p1"
      },
      {
        "kind": "heading",
        "text": "2. Ongoing Teaching is So Critical (Member Lessons and involvement in the branches, helping the leaders where you are needed)"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Mosiah 6:3 - And it came to pass that he appointed priests to teach the people, ...and to stir them up in remembrance of the oath which they had made."
        ],
        "reference": "Mosiah 6:3",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/6?lang=eng&id=p3#p3"
      },
      {
        "kind": "heading",
        "text": "3. Righteous Leadership/A Good Example is Vital (Be the message - be obedient)"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Mosiah 6:7 - And king Mosiah did walk in the ways of the Lord, and did keep his judgments and his statutes, and did keep his commandments in all things whatsoever he commanded him."
        ],
        "reference": "Mosiah 6:7",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/6?lang=eng&id=p7#p7"
      },
      {
        "kind": "paragraph",
        "text": "The next lesson is another we all can use from time to time - a grand rescue mission! Notice that Limhi and his people have been wicked, repented, been subjugated, suffered, and are really in bondage, all while those that will help them, were wandering around looking for them. The Lord had sent the rescuers already, but he wasn’t going to let them find them until the people repented and were more humble."
      },
      {
        "kind": "heading",
        "text": "The Power of Deliverance Through Remembering"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Mosiah 7:19 – Therefore, lift up your heads, and rejoice, and put your trust in God, in that God who was the God of Abraham, and Isaac, and Jacob; and also, that God who brought the children of Israel out of the land of Egypt, and caused that they should walk through the Red Sea on dry ground, and fed them with manna that they might not perish in the wilderness; and many more things did he do for them.",
          "20 And again, that same God has brought our fathers out of the land of Jerusalem, and has kept and preserved his people even until now; and behold, it is because of our iniquities and abominations that he has brought us into bondage."
        ],
        "reference": "Mosiah 7:19–20",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/7?lang=eng&id=p19-p20#p19"
      },
      {
        "kind": "heading",
        "text": "The Cause and Effect of Spiritual Bondage (really 25-29)"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Mosiah 7:29 – For the Lord hath said: I will not succor my people in the day of their transgression; but I will hedge up their ways that they prosper not; and their doings shall be as a stumbling block before them."
        ],
        "reference": "Mosiah 7:29",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/7?lang=eng&id=p29#p29"
      },
      {
        "kind": "heading",
        "text": "The Formula for Spiritual and Temporal Rescue"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Mosiah 7:33 – But if ye will turn to the Lord with full purpose of heart, and put your trust in him, and serve him with all diligence of mind, if ye do this, he will, according to his own will and pleasure, deliver you out of bondage."
        ],
        "reference": "Mosiah 7:33",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/7?lang=eng&id=p33#p33"
      },
      {
        "kind": "paragraph",
        "text": "Turn to the Lord with full purpose of heart.\nPut your trust in Him.\nServe Him with all diligence of mind."
      },
      {
        "kind": "paragraph",
        "text": "The Book of Mormon has power and the answers to real life problems. We love you so much, Elders and Sisters! Enjoy P-day and travel day!"
      }
    ]
  },
  {
    "slug": "mosiah-5",
    "title": "Mosiah 5",
    "day": "Day 31/100",
    "chapters": [
      {
        "label": "Mosiah 5",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/5?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Before starting today’s reading, we invite you to read Repentance, Commitment, and Conversion - Preach My Gospel, Chapter 11 (p. 201 - 202)"
      },
      {
        "kind": "paragraph",
        "text": "We wanted to start today’s reading with this, because you are about to see it in the Book of Mormon with King Benjamin’s people. It’s amazing!"
      },
      {
        "kind": "paragraph",
        "text": "Specifically here are some things to correlate to Chapter 11 but also to other chapters in PMG -"
      },
      {
        "kind": "paragraph",
        "text": "Verse 2 - “…the Spirit…has wrought a mighty change in us…” to Chapter 3 (Repentance)"
      },
      {
        "kind": "paragraph",
        "text": "Verse 5 - “…willing to enter into a covenant…” to Chapter 11 (Commitments)"
      },
      {
        "kind": "paragraph",
        "text": "Verse 7 - “…this day he hath spiritually begotten you…” to Chapter 12 (Baptism & Confirmation)"
      },
      {
        "kind": "paragraph",
        "text": "Verse 15 - “…be steadfast and immovable…” to Chapter 3 (Endure to the End)."
      },
      {
        "kind": "paragraph",
        "text": "Finally, here’s a few of our favorite verses -"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "7 And now, because of the covenant which ye have made ye shall be called the children of Christ, his sons, and his daughters; for behold, this day he hath spiritually begotten you; for ye say that your hearts are changed through faith on his name; therefore, ye are born of him and have become his sons and his daughters.",
          "8 And under this head ye are made free, and there is no other head whereby ye can be made free. There is no other name given whereby salvation cometh; therefore, I would that ye should take upon you the name of Christ, all you that have entered into the covenant with God that ye should be obedient unto the end of your lives."
        ],
        "reference": "Mosiah 5:7–8",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/5?lang=eng&id=p7-p8#p7"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "12 I say unto you, I would that ye should remember to retain the name written always in your hearts, that ye are not found on the left hand of God, but that ye hear and know the voice by which ye shall be called, and also, the name by which he shall call you.",
          "13 For how knoweth a man the master whom he has not served, and who is a stranger unto him, and is far from the thoughts and intents of his heart?"
        ],
        "reference": "Mosiah 5:12–13",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/5?lang=eng&id=p12-p13#p12"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "15 Therefore, I would that ye should be steadfast and immovable, always abounding in good works, that Christ, the Lord God Omnipotent, may seal you his, that you may be brought to heaven, that ye may have everlasting salvation and eternal life, through the wisdom, and power, and justice, and mercy of him who created all things, in heaven and in earth, who is God above all. Amen."
        ],
        "reference": "Mosiah 5:15",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/5?lang=eng&id=p15#p15"
      },
      {
        "kind": "paragraph",
        "text": "See you all at District Conference tomorrow morning!"
      },
      {
        "kind": "paragraph",
        "text": "We can’t wait to see you all and hear you sing like angels!"
      }
    ]
  },
  {
    "slug": "mosiah-4",
    "title": "Mosiah 4",
    "day": "Day 30/100",
    "chapters": [
      {
        "label": "Mosiah 4",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Yesterday, in addition to saying goodbye to Elder Tapusoa and Elder and Sister Boom, Sister Court and I had the opportunity to spend a couple of hours with members of the Solomon Islands Honiara District. In preparation for District Conference many came to the office to speak to us or to be interviewed for the Melchizedek Priesthood. It was wonderful."
      },
      {
        "kind": "paragraph",
        "text": "Some that were interviewed were taught and baptized by you!"
      },
      {
        "kind": "paragraph",
        "text": "We hope you know that your efforts are making a difference in the lives of real people. Keeping these efforts going, obedient, and with the Holy Ghost as your companion, will bring the stake that we have been promised by an apostle of the Lord."
      },
      {
        "kind": "paragraph",
        "text": "We mention this because in Mosiah 4 we see the results of masterful teaching, combined with a humble and willing people. This combination brings about true conversion."
      },
      {
        "kind": "paragraph",
        "text": "You’ll notice in verses 1 - 3 that true conversion begins with humility, recognizing a desperate need for the Savior, and pleading for His grace. This is worth looking for as you teach people - a sincere desire for forgiveness, humility, and the amazing gifts of joy and peace of conscience brought by the Holy Ghost."
      },
      {
        "kind": "paragraph",
        "text": "Verses 4 - 11 are wonderful because King Benjamin reminds his people of God’s power, wisdom and patience before teaching them to be strictly obedient."
      },
      {
        "kind": "paragraph",
        "text": "Remember to connect every new teaching back to the goodness of God and the redeeming grace of Jesus Christ when introducing new commandments to those you teach."
      },
      {
        "kind": "paragraph",
        "text": "When our friends understand the depth of the Father and the Son’s love for each of them, they will be more likely to grow in their faith."
      },
      {
        "kind": "paragraph",
        "text": "Finally, since retaining each precious new friend of ours, and bringing back each former friend that has strayed, is so important in our missionary purpose, you’ll find the HOW in the next three verses (remember God daily, humble ourselves, pray, be steadfast in the faith)."
      },
      {
        "kind": "paragraph",
        "text": "You can use these verses to help everyone establish daily habits that will anchor their faith."
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "11 And again I say unto you as I have said before, that as ye have come to the knowledge of the glory of God, or if ye have known of his goodness and have tasted of his love, and have received a remission of your sins, which causeth such exceedingly great joy in your souls, even so I would that ye should remember, and always retain in remembrance, the greatness of God, and your own nothingness, and his goodness and long-suffering towards you, unworthy creatures, and humble yourselves even in the depths of humility, calling on the name of the Lord daily, and standing steadfastly in the faith of that which is to come, which was spoken by the mouth of the angel.",
          "12 And behold, I say unto you that if ye do this ye shall always rejoice, and be filled with the love of God, and always retain a remission of your sins; and ye shall grow in the knowledge of the glory of him that created you, or in the knowledge of that which is just and true."
        ],
        "reference": "Mosiah 4:11–12",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=eng&id=p11-p12#p11"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "26 And now, for the sake of these things which I have spoken unto you—that is, for the sake of retaining a remission of your sins from day to day, that ye may walk guiltless before God—I would that ye should impart of your substance to the poor, every man according to that which he hath, such as feeding the hungry, clothing the naked, visiting the sick and administering to their relief, both spiritually and temporally, according to their wants."
        ],
        "reference": "Mosiah 4:26",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/4?lang=eng&id=p26#p26"
      },
      {
        "kind": "paragraph",
        "text": "This is so powerful. We hope you find things that you love in this sermon as much as we love what we’ve shared!"
      },
      {
        "kind": "paragraph",
        "text": "See you at the baptism!"
      }
    ]
  },
  {
    "slug": "mosiah-1-and-2",
    "title": "Mosiah 1 & 2",
    "day": "Day 28/100",
    "chapters": [
      {
        "label": "Mosiah 1",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/1?lang=eng"
      },
      {
        "label": "Mosiah 2",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "King Benjamin - a righteous king!"
      },
      {
        "kind": "paragraph",
        "text": "There is so much to learn from King Benjamin over today and tomorrow. Remember to learn, apply teachings to yourself, and to ask yourself how what you learn might help with your missionary purpose of inviting all to come unto Christ and receive the restored Gospel."
      },
      {
        "kind": "paragraph",
        "text": "One thing we noticed is that King Benjamin asked his son Mosiah, to ask the people to come and hear him and they came."
      },
      {
        "kind": "question",
        "text": "How might that also be like General Conference coming up next month and gathering to listen to the Prophet?"
      },
      {
        "kind": "paragraph",
        "text": "King Benjamin models true leadership for them, reminding them that he has labored along side them and teaching them that when they serve each other they are serving God (Mosiah 2:17)."
      },
      {
        "kind": "paragraph",
        "text": "He outlines for them the pattern of Heavenly love and how no matter how much they do, and how much they praise God, they will still be indebted to Him."
      },
      {
        "kind": "paragraph",
        "text": "He warns against contention, beginning to obey the evil spirit, as it may result in openly rebelling against God."
      },
      {
        "kind": "paragraph",
        "text": "But he also promises a blessed and happy state to those that keep the commandments of God and how they will be blessed both temporally and spiritually which some consider their favorite Book of Mormon verse (Mosiah 2:41)!"
      },
      {
        "kind": "paragraph",
        "text": "These chapters are great and they set the stage for the continuation of one of the greatest sermons of all time!"
      },
      {
        "kind": "paragraph",
        "text": "Enjoy meeting King Benjamin!"
      }
    ]
  },
  {
    "slug": "enos",
    "title": "Enos",
    "day": "Day 26/100",
    "chapters": [
      {
        "label": "Enos",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/enos/1?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Enos is amazing!"
      },
      {
        "kind": "question",
        "text": "Do you want to go from you to SUPER YOU?"
      },
      {
        "kind": "paragraph",
        "text": "Follow the Enos pattern."
      },
      {
        "kind": "paragraph",
        "text": "Enos describes his experience as a “wrestle” which he had before God (1:2)."
      },
      {
        "kind": "paragraph",
        "text": "As we fulfill our missionary purpose, we will have our own spiritual wrestles to grow our testimonies and help us to teach others with authentic experiences of our own."
      },
      {
        "kind": "paragraph",
        "text": "Enos also prayed because his soul hungered (1:4)."
      },
      {
        "kind": "paragraph",
        "text": "Elders and Sisters, we promise that moving past checklist prayers, or box check scripture study, to truly wanting a personal connection with Heaven, will bring change. The Lord said to John in Revelations that He stands at the door and knocks and anyone that hears His voice and opens the door, He will come in and they will have dinner together! (Paraphrase intentional)"
      },
      {
        "kind": "paragraph",
        "text": "Can you imagine? Dinner with the Lord!!!! The things you would talk about! The things He would teach you! The feelings you would have!"
      },
      {
        "kind": "paragraph",
        "text": "This is what you’re after and it’s what the world needs. The friends we walk by everyday need to know that a covenant based personal relationship with Jesus Christ is not only possible, it's what He wants!"
      },
      {
        "kind": "paragraph",
        "text": "The voice of the Lord assured Enos that his sins were forgiven because of his faith in Christ."
      },
      {
        "kind": "paragraph",
        "text": "Experiencing the peace of the Atonement firsthand is what will give each of us the authentic authority to invite others to repent (1:5)."
      },
      {
        "kind": "paragraph",
        "text": "That is why Enos’ focus turned outward once he felt this amazing love from the Lord. This sequence mirrors the exact change of heart we all need. Just as Enos’ desires naturally expanded outward when his faith grew, ours will too.  He wrote that he began to feel a desire for the welfare of his brethren, the Nephites. This represents your love for your companion, your district, all the missionaries, the members of your branch, etc. (1:9)"
      },
      {
        "kind": "paragraph",
        "text": "Finally, Enos pours out his whole soul for his enemies, the Lamanites. This is the ultimate missionary heart, which involves praying deeply for strangers, those who reject the message, or even people who openly mock or antagonize us (1:11)."
      },
      {
        "kind": "paragraph",
        "text": "Finally, armed with a love of God and of all men, Enos teaches us about unshakable faith and laboring with all diligence. Remember from PMG, p. 13 (President Court’s favorite page) “success as a missionary is determined primarily by your desire and commitment.” Your diligence and faith in God’s promises, will make each of us successful, even without immediate results."
      },
      {
        "kind": "paragraph",
        "text": "You might be planting seeds you never see grow and harvested. Read how Enos and his brethren kept laboring with the Lamanites, but without success. Trust in the Lord’s timing. That is how we will be able to labor tirelessly to “declare it in all [our] days, and have rejoiced in it above that of the world.” (1:26)"
      },
      {
        "kind": "paragraph",
        "text": "We love Enos, Elders and Sisters! We can’t wait for his conversion to impact your conversion, and your conversion to impact those that you will teach today, tomorrow and for the rest of your mission!"
      },
      {
        "kind": "paragraph",
        "text": "As you fulfill your missionary purpose to invite all to come unto Christ and receive the restored gospel through faith in the Lord Jesus Christ and His atonement, repentance, baptism, receiving the gift of the Holy Ghost and enduring to the end, we promise you the blessings that come from desire and commitment - He will help us do His work!"
      },
      {
        "kind": "paragraph",
        "text": "There is so much here in this smol buk blo Enos!"
      },
      {
        "kind": "question",
        "text": "What will the Lord show you as you study it?"
      },
      {
        "kind": "paragraph",
        "text": "Have an awesome day! Lavem ufala evriwan!"
      }
    ]
  },
  {
    "slug": "jacob-6-and-7",
    "title": "Jacob 6 & 7 (not 67 🤣)",
    "day": "Day 25/100",
    "chapters": [
      {
        "label": "Jacob 6",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/6?lang=eng"
      },
      {
        "label": "Jacob 7",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/7?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Goodbye to Nephi’s Brother Jacob!"
      },
      {
        "kind": "heading",
        "text": "Jacob 6 - Mercy After Laboring in the Vineyard"
      },
      {
        "kind": "paragraph",
        "text": "Jacob summarizes the Allegory of the Olive Tree. He pleads with the people to repent and accept God's arm of mercy, reminding us that the Lord will reward His faithful, hard-working servants. Let’s be that as we fulfill our missionary purpose!"
      },
      {
        "kind": "heading",
        "text": "Jacob 7 - Defending the Faith"
      },
      {
        "kind": "paragraph",
        "text": "An anti-Christ named Sherem arrives, preaching that there is no Christ and demanding a sign from Jacob. What is so annoying about the Sherem’s is that they are hard working (“…he labored diligently that he might lead away the hearts of the people…”)! So we have to be just as diligent to have the Lord’s help to overcome them!"
      },
      {
        "kind": "paragraph",
        "text": "Remember Jacob could not be shaken!"
      },
      {
        "kind": "question",
        "text": "How can you get where you cannot be shaken?"
      },
      {
        "kind": "heading",
        "text": "Some Favorite Scriptures"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Jacob 6:3",
          "“How blessed are they who have labored diligently in his vineyard…”"
        ],
        "reference": "Jacob 6:3",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/6?lang=eng&id=p3#p3"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "Jacob 7:5",
          "...And he had hope to shake me from the faith, notwithstanding the many revelations and the many things which I had seen concerning these things... wherefore, I could not be shaken."
        ],
        "reference": "Jacob 7:5",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/7?lang=eng&id=p5#p5"
      },
      {
        "kind": "paragraph",
        "text": "You will meet skeptics, critics, and anti-Christs like Sherem on your mission."
      },
      {
        "kind": "paragraph",
        "text": "This verse should remind all of us that an anchor built on personal spiritual experiences cannot be shaken by anyone's arguments."
      },
      {
        "kind": "paragraph",
        "text": "Have a great P-Day!"
      }
    ]
  },
  {
    "slug": "jacob-5",
    "title": "Jacob 5",
    "day": "Day 24/100",
    "chapters": [
      {
        "label": "Jacob 5",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/5?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Here are five things to remember as you read this chapter."
      },
      {
        "kind": "paragraph",
        "text": "1. Remember that God is not disinterested or uninvolved in your life - He is interested and involved. Find that in this allegory. \n2. The Lord of the Vineyard is Jesus Christ. Look at all He’s willing to do for the Trees of the Vineyard. \n3. The servants are His prophets, missionaries and all the laboring righteous. What blessings come to those who help the Lord of the Vineyard? \n4. The tame Olive Tree (Covenant Israel)\n5. The wild Olive Tree (Those outside the Covenant)"
      },
      {
        "kind": "paragraph",
        "text": "Here is a diagram that will help with the different phases of the work in the Vineyard (which is the world)"
      },
      {
        "kind": "image",
        "src": "/scripture-thoughts/vineyard-diagram.png",
        "alt": "The Allegory of the Olive Trees (Jacob 5)",
        "width": 1247,
        "height": 960
      }
    ]
  },
  {
    "slug": "jacob-1-and-2",
    "title": "Jacob 1 & 2",
    "day": "Day 22/100",
    "chapters": [
      {
        "label": "Jacob 1",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/1?lang=eng"
      },
      {
        "label": "Jacob 2",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/2?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Jacob was a great disciple of Jesus Christ!"
      },
      {
        "kind": "paragraph",
        "text": "Here is a verse you might consider for your mission Book of Mormon Hall of Fame -"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "And we did magnify our office unto the Lord, taking upon us the responsibility, answering the sins of the people upon our own heads if we did not teach them the word of God with all diligence; wherefore, by laboring with our might their blood might not come upon our garments; otherwise their blood would come upon our garments, and we would not be found spotless at the last day. (Jacob 1:19)"
        ],
        "reference": "Jacob 1:19",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/1?lang=eng&id=p19#p19"
      },
      {
        "kind": "paragraph",
        "text": "Accountability was taught so well in our last Mission Conference! Learning from this verse how important personal accountability was to Jacob, here is some more on the importance of Accountability from PMG, p. 154"
      },
      {
        "kind": "paragraph",
        "text": "The principle of accountability is fundamental in God’s eternal plan (see Alma 5:15–19; Doctrine and Covenants 104:13; 137:9). This principle influences how you think and feel about the sacred responsibility the Lord has given you. Accountability also influences how you approach your work."
      },
      {
        "kind": "paragraph",
        "text": "During His earthly ministry, the Savior gave assignments to His disciples to help them grow, develop, and accomplish His work. He also gave them opportunities to account for the work they were given to do (see Luke 9:10; 3 Nephi 23:6–13). As a missionary, you likewise account for the work the Lord has given you to do."
      },
      {
        "kind": "paragraph",
        "text": "Approach your goal setting and planning with the idea that you will account to the Lord through prayer each day. Also be accountable to yourself and to your mission leaders."
      },
      {
        "kind": "paragraph",
        "text": "Rendering an account should be a loving, positive experience in which your efforts are recognized and you identify ways you can improve."
      },
      {
        "kind": "paragraph",
        "text": "PMG P 155\nConsider the following sentence from your call letter: “As you devote your time and attention to serving the Lord, leaving behind all other personal affairs, the Lord will bless you with increased knowledge and testimony of Jesus Christ and His restored gospel.” Ask yourself the following questions, and record your impressions."
      },
      {
        "kind": "question",
        "text": "How am I doing with devoting my time and attention to serving the Lord?"
      },
      {
        "kind": "question",
        "text": "What blessings have I experienced?"
      },
      {
        "kind": "question",
        "text": "How has my testimony been strengthened?"
      },
      {
        "kind": "question",
        "text": "How can I improve?"
      },
      {
        "kind": "paragraph",
        "text": "Take a few moments to think about your last day in the mission field. When that day comes:"
      },
      {
        "kind": "question",
        "text": "What do you want your relationship with Heavenly Father and Jesus Christ to be like?"
      },
      {
        "kind": "question",
        "text": "What do you want to have become?"
      },
      {
        "kind": "paragraph",
        "text": "In Jacob 2, the Lord shows us again that He sees and knows everything. He loves His daughters so much and wants His sons to honor them, not cause them harm. He desires all of our happiness, and having trust between husbands and wives (amazingly taught by Elder and Sister White in our last mission conference), comes from honoring covenants of chastity and fulfilling our duties as husbands and wives."
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "32 And I will not suffer, saith the Lord of Hosts, that the cries of the fair daughters of this people, which I have led out of the land of Jerusalem, shall come up unto me against the men of my people, saith the Lord of Hosts.",
          "33 For they shall not lead away captive the daughters of my people because of their tenderness, save I shall visit them with a sore curse, even unto destruction; for they shall not commit whoredoms, like unto them of old, saith the Lord of Hosts.",
          "34 And now behold, my brethren, ye know that these commandments were given to our father, Lehi; wherefore, ye have known them before; and ye have come unto great condemnation; for ye have done these things which ye ought not to have done.",
          "35 Behold, ye have done greater iniquities than the Lamanites, our brethren. Ye have broken the hearts of your tender wives, and lost the confidence of your children, because of your bad examples before them; and the sobbings of their hearts ascend up to God against you. And because of the strictness of the word of God, which cometh down against you, many hearts died, pierced with deep wounds."
        ],
        "reference": "Jacob 2:32–35",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/jacob/2?lang=eng&id=p32-p35#p32"
      },
      {
        "kind": "paragraph",
        "text": "That last line has always hit us so hard because we know the world is full of pierced hearts. As we fulfill our missionary purpose to invite all to come unto Christ by helping them receive the restored gospel through faith in Jesus Christ and His Atonement, repentance, baptism, receiving the gift of the Holy Ghost and enduring to the end we can bring them to Him, the Great Physician. No one is better at healing than Him. It also means that we seek His attributes so that our pride, arrogance, or poor examples, are never the cause of adding to the wounds of others, or if they are, we repent, apologize and seek the Lord’s help to change."
      },
      {
        "kind": "paragraph",
        "text": "Let the lesson of these chapters sink deep into your hearts, Elders and Sisters. Be faithful to your covenants. Honor your missionary purpose now, as it is helping you build the relationship with the Lord and the spiritual muscles to help you keep your temple covenants and build strength to honor and bless your future family with your faithfulness and devotion to them!"
      },
      {
        "kind": "paragraph",
        "text": "We hope you have the best of days in service to the Lord!"
      }
    ]
  },
  {
    "slug": "2-nephi-32-and-33",
    "title": "Say Goodbye to Nephi!",
    "day": "Day 21/100",
    "chapters": [
      {
        "label": "2 Nephi 32",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=eng"
      },
      {
        "label": "2 Nephi 33",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/33?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Nephi’s last writings are packed with doctrine and insights from a man who spent his entire life exercising faith in Jesus Christ and His Doctrine, learning about covenants, and trusting in the gathering of Israel."
      },
      {
        "kind": "paragraph",
        "text": "If you really want to see a miraculous example of how much of a prophet Nephi was, read 2 Nephi 32:6. Then read these verses from Jesus Himself as a fulfillment of Nephi’s prophecy -"
      },
      {
        "kind": "paragraph",
        "text": "3 Nephi 11:32-39\n3 Nephi 27:11-16, 20-21"
      },
      {
        "kind": "paragraph",
        "text": "Here’s a quote from President Nelson about the importance of doing what Nephi was teaching -"
      },
      {
        "kind": "paragraph",
        "text": "“My beloved brothers and sisters, I plead with you to increase your spiritual capacity to receive revelation. Choose to do the spiritual work required to enjoy the gift of the Holy Ghost and hear the voice of the Spirit more frequently and more clearly.”"
      },
      {
        "kind": "paragraph",
        "text": "The more we do this work, the more effective we will be in fulfilling our missionary purpose!"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "“…the words of Christ will tell you all things what ye should do.” 2 Nephi 32:3"
        ],
        "reference": "2 Nephi 32:3",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=eng&id=p3#p3"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "“…and receive the Holy Ghost, it will show unto you all things what ye should do.” 2 Nephi 32:5"
        ],
        "reference": "2 Nephi 32:5",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/32?lang=eng&id=p5#p5"
      },
      {
        "kind": "paragraph",
        "text": "Tell and show. Isn’t that interesting. The scriptures contain Christ’s teachings which will TELL us  all things which we should do. Then, after we follow what He’s taught, including entering into the covenant of baptism and receiving the gift of the Holy Ghost, then the Holy Ghost will SHOW us what we should do each and every day."
      },
      {
        "kind": "paragraph",
        "text": "How important is prayer to us as missionaries and to everyone according to Nephi? 2 Nephi 32:9"
      },
      {
        "kind": "paragraph",
        "text": "2 Nephi 33:6 - one of the greatest verses ever!"
      },
      {
        "kind": "paragraph",
        "text": "The optimism of a true follower of Jesus Christ - \n2 Nephi 33:12"
      },
      {
        "kind": "question",
        "text": "Can someone speak more plainly than Nephi did in his last two verses?"
      },
      {
        "kind": "paragraph",
        "text": "Finally, we all are wounded, Elders and Sisters. We are separated from God, our loving Heavenly Father, and we miss Him deeply. As we connect with our Savior by exercising faith in Him and truly repenting of our sins, we will feel the comforting influence of the Holy Ghost. When this happens, when we truly feel connected to Heavenly Father, Jesus Christ and the Holy Ghost in their eternal oneness, we will become one with them and we’ll experience spiritual healing. This is what Christ prayed for and what will ultimately heal our wounded souls!"
      }
    ]
  },
  {
    "slug": "2-nephi-30-and-31",
    "title": "2 Nephi 30-31",
    "day": "Day 20/100",
    "chapters": [
      {
        "label": "2 Nephi 30",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/30?lang=eng"
      },
      {
        "label": "2 Nephi 31",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/31?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Today’s reading are two of the greatest chapters in the Book of Mormon as they illustrate the importance of obedience and the Doctrine of Christ!"
      },
      {
        "kind": "paragraph",
        "text": "There is so much salvation for the human soul in these chapters!"
      },
      {
        "kind": "paragraph",
        "text": "In PMG, page 62-63, it teaches -"
      },
      {
        "kind": "heading",
        "text": "Faith in Jesus Christ"
      },
      {
        "kind": "paragraph",
        "text": "Faith is the first principle of the gospel of Jesus Christ."
      },
      {
        "kind": "paragraph",
        "text": "Faith in Jesus Christ includes having confidence that He is the Son of God and trusting in Him as our Savior and Redeemer."
      },
      {
        "kind": "paragraph",
        "text": "Faith in Jesus Christ is a principle of action and power."
      },
      {
        "kind": "paragraph",
        "text": "We strengthen our faith by praying, studying the scriptures, and obeying the commandments."
      },
      {
        "kind": "heading",
        "text": "Repentance"
      },
      {
        "kind": "paragraph",
        "text": "Faith in Jesus Christ leads us to repent. Repentance is the process of turning to God and turning away from sin. As we repent, our actions, desires, and thoughts change to be more in harmony with God’s will."
      },
      {
        "kind": "paragraph",
        "text": "When we sincerely repent, God forgives us. Forgiveness is possible because Jesus Christ atoned for our sins."
      },
      {
        "kind": "paragraph",
        "text": "As we repent, we feel peace as our guilt and sorrow are healed."
      },
      {
        "kind": "paragraph",
        "text": "Repentance is a lifelong process. God welcomes us back every time we repent. He will never give up on us."
      },
      {
        "kind": "heading",
        "text": "The Gift of the Holy Ghost"
      },
      {
        "kind": "paragraph",
        "text": "The Holy Ghost is the third member of the Godhead."
      },
      {
        "kind": "paragraph",
        "text": "After we are baptized, we receive the gift of the Holy Ghost through the ordinance of confirmation."
      },
      {
        "kind": "paragraph",
        "text": "When we receive the gift of the Holy Ghost, we can have His companionship throughout our lives if we are faithful."
      },
      {
        "kind": "paragraph",
        "text": "The Holy Ghost sanctifies us, guides us, comforts us, and helps us know the truth."
      },
      {
        "kind": "heading",
        "text": "Endure to the End"
      },
      {
        "kind": "paragraph",
        "text": "Enduring includes continuing to exercise faith in Christ each day. We continue to keep our covenants with God, repent, seek the companionship of the Holy Ghost, and partake of the sacrament."
      },
      {
        "kind": "paragraph",
        "text": "As we faithfully seek to follow Jesus Christ, God promises that we will have eternal life."
      },
      {
        "kind": "paragraph",
        "text": "Here are some of our favorite themes from these two chapters -"
      },
      {
        "kind": "heading",
        "text": "1. The Example of Jesus Christ and Fulfilling All Righteousness"
      },
      {
        "kind": "paragraph",
        "text": "Before Nephi outlines what we must do, he establishes why we do it by pointing directly to our Savior and His obedience to the Father’s will in 2 Nephi 31."
      },
      {
        "kind": "question",
        "text": "Baptism - Nephi asks a profound rhetorical question - If Jesus Christ, being holy and sinless, required baptism by water to \"fulfill all righteousness,\" how much more do we, being unholy, need it?"
      },
      {
        "kind": "paragraph",
        "text": "The Meaning of \"Fulfilling All Righteousness\" -  Nephi breaks this down into simple terms. Christ fulfilled all righteousness by humbling Himself before the Father, witnessing to the Father that He would be obedient in keeping His commandments, and opening the gate for us to follow. Consider as you read these verses is there anything that you could give up that would bring the power of obedience into your mission life?"
      },
      {
        "kind": "paragraph",
        "text": "The Dual Witness - Nephi records a rare scriptural moment where both the voice of the Father and the voice of the Son speak directly to him, validating that following the Son's example is the only way back to Their presence."
      },
      {
        "kind": "heading",
        "text": "2. The Doctrine of Christ and the Covenant Path"
      },
      {
        "kind": "paragraph",
        "text": "In the latter half of 2 Nephi 31, Nephi outlines the exact, step-by-step formula for salvation -The Gate (Faith, Repentance, and Baptism): We enter the \"strait and narrow path\" by exercising faith in Christ, repenting of our sins, and entering the water of baptism for a remission of those sins."
      },
      {
        "kind": "paragraph",
        "text": "The Baptism of Fire - Following baptism, we receive the Gift of the Holy Ghost. Nephi notes that the Spirit allows us to \"speak with the tongue of angels\" and shout praises to the Redeemer because of this sanctifying baptism of fire and the Holy Ghost."
      },
      {
        "kind": "paragraph",
        "text": "Enduring to the End - Nephi warns that entering the gate is not enough. He leaves us with the iconic charge to \"press forward with a steadfastness in Christ,\" possessing a perfect brightness of hope, a love of God and all men, and feasting upon the words of Christ until the very end of our mortal probation."
      },
      {
        "kind": "paragraph",
        "text": "Elders and Sisters, as we all strive to fulfill our missionary purpose, we will find great joy in humbling ourselves and being willing to do the will of the Father, just like Jesus Christ did! What a perfect example He is!"
      },
      {
        "kind": "paragraph",
        "text": "Then, as we’re striving to be obedient and follow the Doctrine of Christ, we’ll be such authentic teachers as we invite others to come unto Christ by helping them receive the restored gospel through faith in Jesus Christ and His Atonement, repentance, baptism, receiving the gift of the Holy Ghost and enduring to the end."
      },
      {
        "kind": "paragraph",
        "text": "Have the greatest day, Elders and Sisters!"
      }
    ]
  },
  {
    "slug": "2-nephi-28-and-29",
    "title": "2 Nephi 28-29",
    "day": "Day 19/100",
    "chapters": [
      {
        "label": "2 Nephi 28",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/28?lang=eng"
      },
      {
        "label": "2 Nephi 29",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/29?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "During FHE in our home last week, we shared our testimonies of the Book of Mormon. We learned from one missionary how much a specific verse meant to him during real challenges he was experiencing during his mission. From another we learned how much the Book of Mormon had meant to him, as he accepted the challenge to read it and re-read it during the first months of his mission. Sister Court and I love the Book of Mormon. We read it everyday. It helps us, everyday."
      },
      {
        "kind": "paragraph",
        "text": "These two chapters tell you more about how the Lord feels about the Book of Mormon and the Bible. He also gives us some of the reasons why scriptures are so important, as He outlines some of Satan’s tactics to trap and bind us in these latter days."
      },
      {
        "kind": "paragraph",
        "text": "We hope you find real peace and power as you study these chapters! They can help each of us, and friends the Lord brings us as we’re fulfilling our missionary purpose, to draw closer to Jesus Christ and receive His restored gospel!"
      },
      {
        "kind": "heading",
        "text": "1. Satan’s Deceptive Strategies (2 Nephi 28)"
      },
      {
        "kind": "paragraph",
        "text": "Nephi exposes the specific, subtle tactics used to mislead people in the last days. Rather than always using an open, direct attack, spiritual manipulation happens gradually."
      },
      {
        "kind": "paragraph",
        "text": "Pacification and Carnal Security - He lulls people into a false sense of security, convincing them that \"all is well in Zion\" (2 Nephi 28:21)."
      },
      {
        "kind": "paragraph",
        "text": "Flattery - He flatters them by whispering that there is no devil and no hell, stripping away their sense of spiritual accountability (2 Nephi 28:22)."
      },
      {
        "kind": "paragraph",
        "text": "Anger - He stirs people up to rage against that which is good (2 Nephi 28:20)."
      },
      {
        "kind": "paragraph",
        "text": "Rationalization: He promotes a worldly philosophy, encouraging people to \"eat, drink, and be merry, for tomorrow we die,\" under the false pretense that God will justify a \"little sin\" (2 Nephi 28:7–8). This happens differently in the mission. We had a wise missionary share with us something his father taught him - “You have two years to serve your mission and the rest of your life to think about it.”"
      },
      {
        "kind": "paragraph",
        "text": "When you’re thinking about your day to day work as a missionary, think about this verse and how it might apply to you. If you’ve not always had a testimony of obedience, just repent, ask for help, and try again! The Lord is so merciful and you’ll be surprised how your mission gets so much better!"
      },
      {
        "kind": "heading",
        "text": "2. Line Upon Line Learning vs. Complacency (2 Nephi 28)"
      },
      {
        "kind": "paragraph",
        "text": "Nephi explains the contrasting ways people respond to divine truth -"
      },
      {
        "kind": "paragraph",
        "text": "The Danger of Complacency - God issues a stern warning to those who reject new truth because they feel they already possess enough knowledge. Those who say \"we have enough\" will find that even what they currently have will be taken away (2 Nephi 28:29–30)."
      },
      {
        "kind": "paragraph",
        "text": "Continuous Revelation - Conversely, God operates on the principle of giving truth \"line upon line, precept upon precept, here a little and there a little.\" He promises to give more knowledge to those who actively receive and obey what they have already been given (2 Nephi 28:30)."
      },
      {
        "kind": "heading",
        "text": "3. The Rejection of Additional Scripture (2 Nephi 29)"
      },
      {
        "kind": "paragraph",
        "text": "Chapter 29 transitions to God’s direct voice responding to people in the latter days who reject the Book of Mormon by declaring, \"A Bible! A Bible! We have got a Bible, and we need no more Bible!\" (2 Nephi 29:3)."
      },
      {
        "kind": "paragraph",
        "text": "A Multi-Nation Witness - The Lord rebukes this narrow view, reminding readers that He created all men and speaks to all nations, not just one (2 Nephi 29:7)."
      },
      {
        "kind": "paragraph",
        "text": "The Purpose of Two Witnesses - He clarifies that when two separate nations write His words, the testimonies run parallel to establish the truth of His work (2 Nephi 29:8)."
      },
      {
        "kind": "paragraph",
        "text": "This proves that God is the same yesterday, today, and forever, and that He actively remembers His covenants with all His children across the earth (2 Nephi 29:9)."
      },
      {
        "kind": "paragraph",
        "text": "Finally, check out Elder Bednar as part of your personal or companionship study. He exposes some of the tactics of the adversary in this talk and gives some great counsel and promises in the closing section called, Invitation, Promise, and Testimony! We love you so very much!"
      }
    ]
  },
  {
    "slug": "2-nephi-27",
    "title": "2 Nephi 27",
    "day": "Day 18/100",
    "chapters": [
      {
        "label": "2 Nephi 27",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/27?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "So this chapter is cool because it talks about the coming forth of the Book of Mormon and the three witnesses that will testify of the Book. This chapter was written 600 years before Christ’s birth and it talks about an event that happened in the 1820’s - 2,400 years later! One more example that the Lord knows, well, everything!"
      },
      {
        "kind": "paragraph",
        "text": "Here's some cool church history - When Joseph Smith was some portion of the way through translating the Book of Mormon, he gave pages with some of the reformed Egyptian characters from the Book of Mormon to Martin Harris to take to New York to have the characters authenticated. Professor Anton, who knew ancient languges, first certified that the characters were authentic Egyptian and Chaldean, then he asked for the book to be brought to him. When Martin said he couldn’t because the book was sealed, Anton took back his certification, ripped it up and said he couldn’t read a sealed book. Then, much to his shame, then denied that the event ever happened. Yikes, hate to be him, but to Martin’s credit, he was convinced and financed the first printing of the Book of Mormon by mortgaging his farm."
      },
      {
        "kind": "heading",
        "text": "Three Missionary Themes"
      },
      {
        "kind": "paragraph",
        "text": "Empowering the Weak and Unlearned (2 Nephi 27:15–20): God chooses the \"unlearned\" rather than the worldly elite to bring forth the Book of Mormon, showing that he is able to do his own work. This should really boost your testimony of our missionary purpose since he is basically saying we’re almost always going to be the least impressive people in a room from a worldly perspective but we’re going to be armed with His word and His Spirit, which is the power of God unto the convincing of men!"
      },
      {
        "kind": "paragraph",
        "text": "You might feel inadequate, Elders and Sisters, but exercise faith in Jesus Christ and go forth with His power! He will show you that He can do His own work and you’ll get to be a part of the miracle.  You might feel  underprepared to teach certain concepts to some people. The Book of Mormon reassures us that the Lord prefers a humble, teachable instrument, like you. If we have the faith to open our mouths, the Lord will do the heavy lifting. We promise!"
      },
      {
        "kind": "paragraph",
        "text": "Overcoming Spiritual Blindness (2 Nephi 27:25–26): The coming forth of the Book of Mormon is a \"marvelous work and a wonder\" designed to shatter modern skepticism and the precepts of men! The Book of Mormon is the ultimate gathering tool for us as missionaries because it cuts through modern apathy and spiritual sleep to awaken those seeking truth."
      },
      {
        "kind": "paragraph",
        "text": "Transforming Hearts from Murmuring to Doctrine (2 Nephi 27:35): The chapter promises that those who err in spirit will gain understanding and those who murmur will learn sound doctrine. This should remind all of us Elders and Sisters to rely on the book's clarifying power to soften hearts and resolve confusion, rather than engaging in fruitless debates. True gathering is an internal process of conversion for each of us. Israel is gathered when we, and when those we teach, switch from resisting God's word (murmuring) to joyfully accepting, understanding, and keeping His covenants."
      },
      {
        "kind": "heading",
        "text": "Use the Book of Mormon to Teach the Gospel of Jesus Christ"
      },
      {
        "kind": "paragraph",
        "text": "The Prophet Joseph Smith said, “The Book of Mormon [is] the most correct of any book on earth” (introduction to the Book of Mormon). It testifies of Christ and plainly teaches His doctrine (see 2 Nephi 31; 32:1–6; 3 Nephi 11:31–39; 27:13–22). It teaches the fulness of His gospel. The first principles and ordinances of the gospel as taught in the Book of Mormon are the way to an abundant life."
      },
      {
        "kind": "paragraph",
        "text": "Use the Book of Mormon as your main source for teaching the restored gospel and you’ll see miracles in your areas."
      },
      {
        "kind": "paragraph",
        "text": "Love tons! Have a great day!"
      }
    ]
  },
  {
    "slug": "2-nephi-25-and-26",
    "title": "2 Nephi 25-26",
    "day": "Day 17/100",
    "chapters": [
      {
        "label": "2 Nephi 25",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/25?lang=eng"
      },
      {
        "label": "2 Nephi 26",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/26?lang=eng"
      }
    ],
    "blocks": [
      {
        "kind": "paragraph",
        "text": "Here we go!"
      },
      {
        "kind": "paragraph",
        "text": "You did it! You read through the Isaiah chapters! If that is your first time, we’re so proud of you!"
      },
      {
        "kind": "paragraph",
        "text": "Isaiah was all about Jesus Christ! So, of course, the first message of these chapters is a Christ-Centered Message (Which is Our Missionary Purpose - to invite all to come unto Him and receive the restored gospel)!"
      },
      {
        "kind": "paragraph",
        "text": "\"And we talk of Christ, we rejoice in Christ, we preach of Christ...\" (2 Nephi 25:26)."
      },
      {
        "kind": "paragraph",
        "text": "We all need to pray and study and obey so that Christ can become and remain the center of our daily ministries despite any challenges, difficulties and afflictions we might face. Filling our minds and hearts with testimonies of His Atonement will bring joy to all of us and our friends."
      },
      {
        "kind": "paragraph",
        "text": "From PMG, Jesus’s atoning sacrifice provides the way for us to become cleansed of sin and sanctified as we repent. It also provides the way to satisfy the demands of justice (see Alma 42:15, 23–24). The Savior said, “I … have suffered these things for all, that they might not suffer if they would repent; but if they would not repent they must suffer even as I” (Doctrine and Covenants 19:16–17). If not for Jesus Christ, sin would end all hope for a future existence with Heavenly Father."
      },
      {
        "kind": "paragraph",
        "text": "In offering Himself as a sacrifice for us, Jesus did not eliminate our personal responsibility. We need to have faith in Him, repent, and strive to obey the commandments. As we repent, Jesus will claim on our behalf His rights of mercy of His Father (see Moroni 7:27–28). Because of the Savior’s intercession, Heavenly Father forgives us, relieving us of the burden and guilt of our sins (see Mosiah 15:7–9). We are spiritually cleansed and can ultimately be welcomed into God’s presence."
      },
      {
        "kind": "paragraph",
        "text": "There are so many great verses about Jesus Christ in the Book of Mormon that it is difficult to pick a favorite. It is, after all, Another Testament of Jesus Christ!"
      },
      {
        "kind": "paragraph",
        "text": "But if we could pick any set of verses to convince someone of the unbelievable mercy and grace, love and devotion, glory and majesty, of our Lord and Savior Jesus Christ, we might pick these from 2 Nephi 26 -"
      },
      {
        "kind": "scripture",
        "paragraphs": [
          "24 He doeth not anything save it be for the benefit of the world; for he loveth the world, even that he layeth down his own life that he may draw all men unto him. Wherefore, he commandeth none that they shall not partake of his salvation.",
          "25 Behold, doth he cry unto any, saying: Depart from me? Behold, I say unto you, Nay; but he saith: Come unto me all ye ends of the earth, buy milk and honey, without money and without price.",
          "26 Behold, hath he commanded any that they should depart out of the synagogues, or out of the houses of worship? Behold, I say unto you, Nay.",
          "27 Hath he commanded any that they should not partake of his salvation? Behold I say unto you, Nay; but he hath given it free for all men; and he hath commanded his people that they should persuade all men to repentance.",
          "28 Behold, hath the Lord commanded any that they should not partake of his goodness? Behold I say unto you, Nay; but all men are privileged the one like unto the other, and none are forbidden."
        ],
        "reference": "2 Nephi 26:24–28",
        "url": "https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/26?lang=eng&id=p24-p28#p24"
      },
      {
        "kind": "paragraph",
        "text": "A second important theme for us as missionaries is Diligent Labor and Persuasion (The Focus of Our Work): \"For we labor diligently to write, to persuade our children, and also our brethren, to believe in Christ...\" (2 Nephi 25:23)."
      },
      {
        "kind": "paragraph",
        "text": "It is real work to be a disciple of Jesus Christ and even more to be a full time missionary! We honor you for your willingness to serve Him! Every act of daily preparation and teaching is sacred devotion, defined by loving invitations as we fulfill our missionary purpose each day, while leaving the ultimate results in the hands of the Lord."
      },
      {
        "kind": "paragraph",
        "text": "Finally, there is a theme of Universal Love for All of God’s Children (The Scope of Our Work): \"...and he inviteth them all to come unto him and partake of his goodness; and he denieth none that come unto him, black and white, bond and free, male and female; and he remembereth the heathen; and all are alike unto God, both Jew and Gentile.\" (2 Nephi 26:33)."
      },
      {
        "kind": "paragraph",
        "text": "As we fulfill our missionary purpose, inviting all to come unto Christ by helping them receive the restored gospel through faith in Jesus Christ and His Atonement, repentance, baptism, receiving the gift of the Holy Ghost, and enduring to the end, we will be given the love and the strength to overcome our cultural bias’ and recognize God’s love for and patience with everyone, including ourselves!"
      },
      {
        "kind": "paragraph",
        "text": "Realizing this will make you so grateful for our merciful Savior, and it will also increase your patience and compassion for each other."
      },
      {
        "kind": "paragraph",
        "text": "We love you all, Elders and Sisters, so very much! Love each other and have a great Sunday!"
      },
      {
        "kind": "paragraph",
        "text": "Help where you can in the branches as there is so much work to be done. But also have charity in your hearts and recognize the great efforts of these new Solomon Island members to follow the Savior and to become a part of His Kingdom here on Earth!"
      }
    ]
  },
];
