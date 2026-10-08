type ThoughtBlock =
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
];
