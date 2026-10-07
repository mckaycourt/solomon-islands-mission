type ThoughtBlock =
  | { kind: "paragraph" | "question"; text: string }
  | { kind: "scripture"; text: string; url: string; reference: string };

export type ScriptureThought = {
  slug: string;
  title: string;
  day: string;
  chapters: { label: string; url: string }[];
  blocks: ThoughtBlock[];
};

export const scriptureThoughts: ScriptureThought[] = [
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
      { kind: "scripture", reference: "Alma 3:26", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/3?lang=eng&id=p26#p26", text: 'Alma 3:26: "And in one year were thousands and tens of thousands of souls sent to the eternal world, that they might reap their rewards according to their works, whether they were good or whether they were bad, to reap eternal happiness or eternal misery..."' },
      { kind: "scripture", reference: "Alma 3:27", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/3?lang=eng&id=p27#p27", text: 'Alma 3:27: "Every man receiveth wages of him whom he listeth to obey... therefore, they receive their wages according to their own spirit, whether it be a good spirit or a bad one."' },
      { kind: "paragraph", text: "Despite the wickedness of the majority of people, a dedicated group of believers chose a completely different path, they provided a great blueprint for maintaining a relationship with God during difficult times (and it was about the size of a stake - 3,500 of them were baptized so let's go!)." },
      { kind: "scripture", reference: "Alma 4:13", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/4?lang=eng&id=p13#p13", text: "Alma 4:13 Now this was a great cause for lamentations among the people, while others were abasing themselves, succoring those who stood in need of their succor, such as imparting their substance to the poor and the needy, feeding the hungry, and suffering all manner of afflictions, for Christ’s sake, who should come according to the spirit of prophecy;" },
      { kind: "scripture", reference: "Alma 4:14", url: "https://www.churchofjesuschrist.org/study/scriptures/bofm/alma/4?lang=eng&id=p14#p14", text: "14 Looking forward to that day, thus retaining a remission of their sins; being filled with great joy because of the resurrection of the dead, according to the will and power and deliverance of Jesus Christ from the bands of death." },
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
];
