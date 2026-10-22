import type { LibraryItem, VideoStory } from "../library";

// The header facts, educational videos and real people's stories for the pages in mind-extra.ts, each checked
// on the date given beside it: titles and channels from YouTube's oEmbed, running times from the watch page (or
// from search results where the report says so), and each story's details only from its own title or description.
// Where no real, verified story exists, a page has fewer stories, or none.

export type PageMedia = { facts: string[]; watch: LibraryItem[]; videoStories: VideoStory[] };

export const MIND_EXTRA_MEDIA: Record<string, PageMedia> = {
  "burnout": {
    facts: ["65% of UK workers feel burnt out","Not a medical condition, says WHO","Recovery can take months to years"],
    watch: [
      { id: "yt-wlnhs-heading-for-burnout", title: "Could you be heading towards burnout without even realising it?", kind: "video", duration: "2:05", url: "https://www.youtube.com/watch?v=Mv_hhSktCko", extra: "Three key warning signs of burnout", publisher: "West London NHS Trust", keywords: ["warning signs", "work", "burnout"] },
      { id: "yt-nhs-essex-stress-burnout-tips", title: "Tips to help you deal with stress and burnout", kind: "video", duration: "1:58", url: "https://www.youtube.com/watch?v=sdnNv0QkwKA", extra: "Six top tips for stress and burnout", publisher: "NHS Essex", keywords: ["tips", "stress", "burnout"] },
      { id: "yt-acas-work-related-stress", title: "Work-related stress: supporting health and wellbeing at work", kind: "video", duration: "4:32", url: "https://www.youtube.com/watch?v=jpopHMdWGkA", extra: "Recognising the signs of burnout at work", publisher: "Acas", keywords: ["work", "signs of burnout", "wellbeing"] },
    ],
    videoStories: [
      { id: "yt-kirk-work", person: "Kirk", title: "Kirk's Story | Mental Health at Work", channel: "Heads Together", url: "https://www.youtube.com/watch?v=AjLXO9woNaw", duration: "2:09", about: "When Kirk's daughter became ill, being able to talk about it at work, with support and understanding from his team, helped him through a very difficult time; he now encourages colleagues to talk about mental health and ask for help." },
    ],
  },
  "personality-disorder": {
    facts: ["Around 1 in 100 people live with BPD","Treatment may last more than a year","Many people with BPD recover over time"],
    watch: [
      { id: "yt-rethink-what-is-bpd", title: "What is borderline personality disorder (BPD)?", kind: "video", duration: "2:16", url: "https://www.youtube.com/watch?v=kphAKzmYYmA", extra: "Animation on BPD and its symptoms", publisher: "Rethink Mental Illness", keywords: ["what is bpd", "symptoms", "animation"] },
      { id: "yt-rcpsych-personality-disorder", title: "Personality Disorder - subtitles", kind: "video", duration: "1:44", url: "https://www.youtube.com/watch?v=OnwVTrZcn5s", extra: "Animation exploring what personality disorder is", publisher: "The Royal College of Psychiatrists", keywords: ["personality disorder", "animation", "explained"] },
      { id: "yt-maudsley-dbt-what-is-it", title: "DBT: What is it and who is it for? | Mind of the Matter", kind: "video", duration: "8:05", url: "https://www.youtube.com/watch?v=HvM44ScSh0g", extra: "A DBT therapist explains DBT", publisher: "Maudsley NHS", keywords: ["dbt", "therapy", "dialectical behaviour therapy"] },
    ],
    videoStories: [
      { id: "yt-sarah-bpd", person: "Sarah", title: "Borderline personality disorder (BPD) and recovery | Sarah's Mental Health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=srPBnXx3gd0", duration: "2:57", about: "Sarah talks about her experience of borderline personality disorder and her recovery." },
      { id: "yt-lechelle-debbie-bpd", person: "Lechelle and Debbie", title: "Borderline personality disorder (BPD) | Talking about mental health - Episode 5", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=EG8SlVd9vCk", duration: "7:31", about: "Lechelle and Debbie talk about having borderline personality disorder and how medication and dialectical behaviour therapy (DBT) helped them develop the skills to manage it." },
      { id: "yt-kerry-andy-scm", person: "Kerry and Andy", title: "Structured Clinical Management service user stories - Kerry and Andy", channel: "Northamptonshire Healthcare NHS Foundation Trust (NHFT)", url: "https://www.youtube.com/watch?v=JAU_bQFCS0Q", duration: "8:52", about: "Kerry and Andy, experts by experience, share their stories of Structured Clinical Management at Northamptonshire Healthcare NHS Foundation Trust." },
    ],
  },
  "schizophrenia": {
    facts: ["Affects about 1 in 100 people","It is not a split personality","Many people recover from it"],
    watch: [
      { id: "yt-rethink-what-is-schizophrenia", title: "What is schizophrenia?", kind: "video", duration: "2:20", url: "https://www.youtube.com/watch?v=J1s4YCloCbo", extra: "More common than you might think", publisher: "Rethink Mental Illness", keywords: ["what is schizophrenia", "stigma", "explained"] },
      { id: "yt-rcpsych-what-is-schizophrenia", title: "What is Schizophrenia?", kind: "video", duration: "2:28", url: "https://www.youtube.com/watch?v=Qvo7Z3TrcwA", extra: "What it is, causes, how to help", publisher: "The Royal College of Psychiatrists", keywords: ["what is schizophrenia", "causes", "help"] },
      { id: "yt-mind-talking-schizophrenia", title: "Schizophrenia | Talking about mental health - Episode 18", kind: "video", duration: "6:40", url: "https://www.youtube.com/watch?v=1le_D--fjlo", extra: "Five people on symptoms and stigma", publisher: "Mind, the mental health charity", keywords: ["living with schizophrenia", "symptoms", "stigma"] },
    ],
    videoStories: [
      { id: "yt-rethink-ashley", person: "Ashley", title: "Living with hearing voices - Ashley's Story", channel: "Rethink Mental Illness", url: "https://www.youtube.com/watch?v=kkUtR4ZLuMo", duration: "2:37", about: "Ashley talks to Rethink Mental Illness about her experience of living with hearing voices." },
      { id: "yt-rethink-paul", person: "Paul", title: "Paul's Story", channel: "Rethink Mental Illness", url: "https://www.youtube.com/watch?v=nu3WU13ip9s", duration: "1:16", about: "Paul was just 20 when he first started seeing things that weren't there, and the diagnosis of schizophrenia came as a shock." },
      { id: "yt-rethink-andrew", person: "Andrew", title: "Andrew's Story", channel: "Rethink Mental Illness", url: "https://www.youtube.com/watch?v=XNM2UyYb8lw", duration: "1:10", about: "Andrew has lived with schizophrenia since his twenties, and tells his story of overcoming discrimination and finally getting the right support." },
    ],
  },
  "narcolepsy": {
    facts: ["About 1 in 2,500 people","Starts in children and young adults","Planned daytime naps help"],
    watch: [
      { id: "yt-nuk-oregan-qa", title: "Questions and Answers on Narcolepsy - Dr. David O'Regan", kind: "video", duration: "4:10", url: "https://www.youtube.com/watch?v=JjUtBRbR6Ao", extra: "Guy's Hospital sleep consultant answers questions", publisher: "Narcolepsy UK", keywords: ["questions", "sleep specialist", "narcolepsy uk"] },
      { id: "yt-cleveland-what-is-narcolepsy", title: "What Is Narcolepsy? | Ask Cleveland Clinic’s Expert", kind: "video", duration: "4:33", url: "https://www.youtube.com/watch?v=lT03MH6cANg", extra: "Causes, five signs and treatments", publisher: "Cleveland Clinic", keywords: ["what is narcolepsy", "causes", "signs"] },
      { id: "yt-harvard-what-is-narcolepsy", title: "What is Narcolepsy?", kind: "video", duration: "5:01", url: "https://www.youtube.com/watch?v=Ucpf_OYvs4E", extra: "Symptoms and causes, with brain animations", publisher: "Harvard Medical School", keywords: ["what is narcolepsy", "symptoms", "brain"] },
    ],
    videoStories: [
      { id: "yt-honor-narcolepsy", person: "Honor", title: "Narcolepsy - Honor's Story", channel: "Narcolepsy UK", url: "https://www.youtube.com/watch?v=E03Frw3vbr0", duration: "2:45", about: "In an animated film made by her sister, Honor, who developed narcolepsy at 13, talks about her everyday struggles with narcolepsy and the lengthy process of being diagnosed." },
      { id: "yt-maddie-narcolepsy", person: "Maddie", title: "\"My Journey with Narcolepsy\" - Maddie Wallenius", channel: "Narcolepsy UK", url: "https://www.youtube.com/watch?v=bESmlQUNpAI", duration: "18:43", about: "Speaking at the 2019 Narcolepsy UK conference, Maddie Wallenius presents her personal journey of living with narcolepsy." },
      { id: "yt-aaron-narcolepsy", person: "Aaron", title: "Meet Aaron: Living with Narcolepsy", channel: "Sleep Health Foundation", url: "https://www.youtube.com/watch?v=63wm51fiyMs", duration: "7:47", about: "Aaron, who lives with narcolepsy type 1, shares his experience from childhood through to his first symptoms, diagnosis and treatment." },
    ],
  },
  "panic-disorder": {
    facts: ["Most attacks last 5 to 20 minutes","Frightening, but not dangerous","You can refer yourself for CBT"],
    watch: [
      { id: "yt-nhs24-coping-panic", title: "Coping with panic attacks and when to seek help", kind: "video", duration: "2:30", url: "https://www.youtube.com/watch?v=SRII9IQ5HOg", extra: "NHS doctor on symptoms, coping, help", publisher: "NHS 24", keywords: ["panic attacks", "coping", "when to get help"] },
      { id: "yt-mind-cope-panic", title: "How to cope with panic attacks", kind: "video", duration: "2:15", url: "https://www.youtube.com/watch?v=pJCpZBIedrw", extra: "Practical tips during and after attacks", publisher: "Mind, the mental health charity", keywords: ["panic attacks", "coping", "tips"] },
      { id: "yt-nopanic-what-are", title: "What are panic attacks?", kind: "video", duration: "5:34", url: "https://www.youtube.com/watch?v=YLEe8rEWDVE", extra: "What they are, why, strategies", publisher: "No Panic", keywords: ["what is a panic attack", "why", "strategies"] },
    ],
    videoStories: [
      { id: "yt-anthony-panic", person: "Anthony", title: "Anthony’s experience of panic disorder | NHS Talking Therapies", channel: "NHS", url: "https://www.youtube.com/watch?v=kFY--rPwMFY", duration: "0:53", about: "Anthony has lived with panic disorder since he was 16, and NHS Talking Therapies taught him tools such as keeping a diary and setting clear goals to manage the physical sensations." },
      { id: "yt-harley-panic", person: "Harley", title: "Anxiety and panic attacks | Harley's Mental health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=9neXU_iBP9c", duration: "2:55", about: "Harley talks about how she feels her anxiety has held her back, and the ways she has learned to cope with it." },
      { id: "yt-stuart-panic", person: "Stuart", title: "How I deal with panic attacks with doodling | Stuart's Mental Health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=bh0vyjnA9WA", duration: "4:52", about: "Mind ambassador Stuart Semple talks about how doodling, drawing and colouring in help him during his panic attacks, and how being creative helps his mental health." },
    ],
  },
  "self-harm": {
    facts: ["About 1 in 10 young people self-harm","Samaritans: free, any hour, 116 123","Many people learn to cope and recover"],
    watch: [
      { id: "yt-nhs-talking-about-self-harm", title: "Talking about self-harm | NHS", kind: "video", duration: "2:56", url: "https://www.youtube.com/watch?v=C-FCkMeidoQ", extra: "Why it happens, getting support", publisher: "NHS", keywords: ["what is self-harm", "talking", "support"] },
      { id: "yt-maudsley-self-harm-what-is-it", title: "Self-Harm: What is it? | Dr Jake Camp Explains | Mind of the Matter", kind: "video", duration: "9:51", url: "https://www.youtube.com/watch?v=sPFk3qQlxiY", extra: "A psychologist explains self-harm", publisher: "Maudsley NHS", keywords: ["what is self-harm", "why", "psychologist"] },
      { id: "yt-samaritans-support-someone", title: "How do I support someone who’s self-harming or having suicidal thoughts?", kind: "video", duration: "2:51", url: "https://www.youtube.com/watch?v=tzAGbCew5Mc", extra: "Listening without judgement, self-care", publisher: "Samaritans", keywords: ["family", "friends", "supporting someone"] },
    ],
    videoStories: [
      { id: "yt-alys-self-harm", person: "Alys", title: "How can I help myself cope when struggling with self-harm?", channel: "Samaritans", url: "https://www.youtube.com/watch?v=yfWBTjveU5w", duration: "4:08", about: "Alys shares her personal story and what helped her cope with self-harm, from working out what to do to trying different coping strategies." },
      { id: "yt-ross-coping", person: "Ross", title: "How do I navigate the journey of coping with self-harm and suicidal feelings?", channel: "Samaritans", url: "https://www.youtube.com/watch?v=Vc7s5JbVbPQ", duration: "4:22", about: "Ross shares his personal story and what helped him cope, from noticing the signs he was struggling to practical ways to help himself cope." },
    ],
  },
  "perimenopause-mood": {
    facts: ["Usually affects ages 45 to 55","Usually lasts 7 to 9 years","CBT can help low mood and anxiety"],
    watch: [
      { id: "yt-nhs24-perimenopause-explained", title: "Perimenopause explained: symptoms, signs and what to expect", kind: "video", duration: "4:08", url: "https://www.youtube.com/watch?v=fPmvThZi2i4", extra: "A GP explains perimenopause symptoms", publisher: "NHS 24", keywords: ["perimenopause", "symptoms", "mood changes", "brain fog"] },
      { id: "yt-ekhuft-menopause-psychological", title: "Menopause Support: Psychological symptoms", kind: "video", duration: "1:22", url: "https://www.youtube.com/watch?v=j76fH6gNqRA", extra: "Low mood, anxiety and concentration", publisher: "East Kent Hospitals University NHS Foundation Trust", keywords: ["low mood", "anxiety", "irritability", "work"] },
      { id: "yt-hmeft-menopause-emotional-wellbeing", title: "Menopause and Emotional Wellbeing", kind: "video", duration: "2:09", url: "https://www.youtube.com/watch?v=DSYFKgGyM_s", extra: "How NHS talking therapies can help", publisher: "Hertfordshire & Mid Essex Talking Therapies", keywords: ["talking therapies", "emotional wellbeing", "perimenopause"] },
    ],
    videoStories: [
      { id: "yt-hema-menopause-policy", person: "Hema", title: "Hema Clarke's Experience - Menopause Policy", channel: "Bedfordshire Hospitals NHS Foundation Trust", url: "https://www.youtube.com/watch?v=TR8Sy07qABo", duration: "1:11", about: "Hema Clarke shares her experience of the menopause policy at Bedfordshire Hospitals NHS Foundation Trust." },
    ],
  },
  "social-anxiety": {
    facts: ["Affects about 5 in 100","Often starts in teenage years","CBT is generally the best treatment"],
    watch: [
      { id: "yt-khp-what-is-social-anxiety", title: "What Is Social Anxiety? | Mind of the Matter", kind: "video", duration: "11:44", url: "https://www.youtube.com/watch?v=25NZccRnqBE", extra: "A clinical psychologist explains social anxiety", publisher: "King's Health Partners", keywords: ["what is social anxiety", "explained", "psychologist"] },
      { id: "yt-rad-rethink-social-anxiety", title: "RAD and Rethink: Social Anxiety Disorder", kind: "video", duration: "1:08", url: "https://www.youtube.com/watch?v=3dQuAayOYbE", extra: "Signs, situations and seeing a GP", publisher: "Royal Association for Deaf people", keywords: ["signs", "situations", "deaf"] },
      { id: "yt-elft-safety-behaviours", title: "Safety Behaviours", kind: "video", duration: "6:01", url: "https://www.youtube.com/watch?v=J-FjbMmGZpU", extra: "Spotting habits that keep anxiety going", publisher: "East London NHS Foundation Trust", keywords: ["safety behaviours", "habits", "anxiety"] },
    ],
    videoStories: [
      { id: "yt-shona-social-anxiety", person: "Shona", title: "Shona McGarty's journey with social anxiety | NHS Talking Therapies", channel: "NHS", url: "https://www.youtube.com/watch?v=l8fileoP-W0", duration: "0:52", about: "EastEnders star Shona McGarty shares her mental health journey with social anxiety, as part of the NHS Talking Therapies campaign to raise awareness of common anxiety conditions." },
      { id: "yt-sola-social-anxiety", person: "Sola", title: "Social anxiety and finding a community you can thrive in - Sola", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=bm-_97oueOE", duration: "1:19", about: "Sola, 18, tells how being creative and finding a community that understands her has helped her mental health." },
      { id: "yt-hannah-social-anxiety", person: "Hannah", title: "HEAR ME OUT || Social Anxiety Disorder", channel: "Fixers UK", url: "https://www.youtube.com/watch?v=idZfdihEmH4", duration: "4:20", about: "Hannah, 20, from Canterbury, has experienced the impact of mental ill health and wants to show people living with social anxiety disorder that help is at hand." },
    ],
  },
  "phobias": {
    facts: ["Around 10% have claustrophobia","Often start as a child or teenager","Self-refer to NHS talking therapies"],
    watch: [
      { id: "yt-maudsley-phobias", title: "Phobias", kind: "video", duration: "2:47", url: "https://www.youtube.com/watch?v=ep76ElEiLrY", extra: "Fear or phobia, and treatments", publisher: "Maudsley NHS", keywords: ["fear or phobia", "treatment", "explained"] },
      { id: "yt-lpt-needle-phobia-tips", title: "Needle phobia - Top tips video", kind: "video", duration: "5:07", url: "https://www.youtube.com/watch?v=9SN3lBvW3Eg", extra: "Top tips for needle phobia", publisher: "Leicestershire Partnership NHS Trust", keywords: ["needles", "tips", "medical"] },
      { id: "yt-emm-anxiety-things-you-can-do", title: "Anxiety - Things You Can Do", kind: "video", duration: "3:39", url: "https://www.youtube.com/watch?v=4OIYDkA20vY", extra: "Tips for what helps with anxiety", publisher: "Every Mind Matters", keywords: ["self-help", "anxiety", "tips"] },
    ],
    videoStories: [
      { id: "yt-romy-phobia", person: "Romy", title: "Romy’s story of overcoming a phobia | NHS Talking Therapies", channel: "NHS", url: "https://www.youtube.com/watch?v=tA3r2bI5p40", duration: "1:01", about: "From the age of eight Romy lived with a severe phobia of dentists, until her GP referred her to NHS Talking Therapies and CBT helped her understand what she was afraid of and gradually face dental treatment calmly." },
      { id: "yt-peter-phobias", person: "Peter", title: "“I took 40 years to get help for my phobias.”", channel: "OxfordHealth", url: "https://www.youtube.com/watch?v=itAuM1RtIfw", duration: "4:11", about: "Peter, one of five talking therapy patients sharing their recovery journeys, talks about taking 40 years to get help for his phobias, to encourage others to get help early." },
      { id: "yt-damon-needle-phobia", person: "Damon", title: "Damon's Story - Vaccination experience as someone with learning disabilities & needle phobia", channel: "NHS Devon", url: "https://www.youtube.com/watch?v=224T8Owd3T0", duration: "2:04", about: "Damon shares his experience of vaccination as someone with learning disabilities and needle phobia, in a series made to reassure people with learning disabilities about the support available." },
    ],
  },
  "health-anxiety": {
    facts: ["Closely related to OCD","Usually treated with CBT","You can refer yourself to therapy"],
    watch: [
      { id: "yt-maudsley-health-anxiety", title: "Health Anxiety: What is it? | Dr Rachel White Explains | Mind of the Matter", kind: "video", duration: "5:59", url: "https://www.youtube.com/watch?v=i1kyE01D9C0", extra: "What it is, and getting treatment", publisher: "Maudsley NHS", keywords: ["what is health anxiety", "treatment", "psychologist"] },
      { id: "yt-nopanic-rob-willson", title: "Dr Rob Willson talks Health Anxiety with No Panic", kind: "video", duration: "6:17", url: "https://www.youtube.com/watch?v=fOu32YL_0X4", extra: "How common, symptoms, overcoming it", publisher: "No Panic", keywords: ["health anxiety", "symptoms", "overcoming"] },
      { id: "yt-maudsley-cbt-anxiety", title: "How does CBT help with anxiety? | Mind of the Matter: Hear from the experts", kind: "video", duration: "6:11", url: "https://www.youtube.com/watch?v=JyRhkNFZFI0", extra: "How CBT works, and getting help", publisher: "Maudsley NHS", keywords: ["cbt", "therapy", "getting help"] },
    ],
    videoStories: [
      { id: "yt-alex-mind-anxiety", person: "Alex", title: "The physical effects of anxiety | Alex's Mental Health Story | Mind", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=oPmKH00kIpA", duration: "3:48", about: "Alex describes how anxiety showed up as a racing heart and tension headaches, how hospital tests for a suspected heart attack came back clear, and how knowing his own baseline helps him manage it." },
    ],
  },
  "carer-stress": {
    facts: ["Nearly 3 million juggle work and care","Carer's assessments are free","3 in 4 carers felt stressed or anxious"],
    watch: [
      { id: "yt-carersuk-carers-assessments", title: "Carers' Assessments", kind: "video", duration: "3:13", url: "https://www.youtube.com/watch?v=2uZfwOeuUvw", extra: "Introduction to carers' assessments", publisher: "Carers UK", keywords: ["carer's assessment", "council", "support"] },
      { id: "yt-carersuk-carers-allowance", title: "Carer's Allowance", kind: "video", duration: "2:55", url: "https://www.youtube.com/watch?v=bEasVnMisfc", extra: "Introduction to Carer's Allowance", publisher: "Carers UK", keywords: ["carer's allowance", "benefits", "money"] },
      { id: "yt-carersuk-coping-with-stress", title: "Coping with stress", kind: "video", duration: "2:49", url: "https://www.youtube.com/watch?v=tcp6bZAQAh4", extra: "Finding support for carer stress", publisher: "Carers UK", keywords: ["stress", "support", "wellbeing"] },
    ],
    videoStories: [
      { id: "yt-pam-carer", person: "Pam", title: "That Counts as Caring: Pam's story", channel: "Gaddum", url: "https://www.youtube.com/watch?v=EWc9Mr3lYvU", duration: "4:20", about: "Pam lives in Salford and cares for her mum, who is 91 and has dementia, and shares the impact caring has had on her own life and the changes she would like to see for future carers." },
      { id: "yt-sharon-carer", person: "Sharon", title: "Carers Trust Scotland - Sharon's Story", channel: "Carers Trust Scotland", url: "https://www.youtube.com/watch?v=nmTIJRrtyTw", duration: "2:40", about: "Sharon cares for her son, who has autism, and shares the issues she has had and the support she has received from her local carers centre." },
      { id: "yt-steve-carer", person: "Steve", title: "Unpaid carer Steve on the life-changing support he received from Carers Trust", channel: "Carers Trust", url: "https://www.youtube.com/watch?v=zLgqjxQVXFA", duration: "1:08", about: "Steve, an unpaid carer, talks about the life-changing support he received from Carers Trust." },
    ],
  },
  "drug-use": {
    facts: ["FRANK helpline 24/7: 0300 123 6600","You can refer yourself to services","Addiction is treatable"],
    watch: [
      { id: "yt-turningpoint-assessment", title: "What does an alcohol or other drug assessment look like?", kind: "video", duration: "1:33", url: "https://www.youtube.com/watch?v=COA1kOL24Bk", extra: "From first assessment to key worker", publisher: "Turning Point", keywords: ["assessment", "treatment", "keyworker"] },
      { id: "yt-adfam-what-is-addiction", title: "(4/14) What is addiction? | Adfam Online Support Sessions", kind: "video", duration: "15:25", url: "https://www.youtube.com/watch?v=1Re1oWPwKOc", extra: "What addiction is, and its causes", publisher: "AdfamUK", keywords: ["addiction", "families", "causes"] },
      { id: "yt-adfam-how-to-talk", title: "(7/14) How to talk to someone struggling with their substance use | Adfam Online Support Sessions", kind: "video", duration: "12:02", url: "https://www.youtube.com/watch?v=d3yJPNxPL4Y", extra: "Talking with someone you love", publisher: "AdfamUK", keywords: ["family", "talking", "support"] },
    ],
    videoStories: [
      { id: "yt-kelly-drug-use", person: "Kelly", title: "A path to recovery: Kelly's story", channel: "WithYou", url: "https://www.youtube.com/watch?v=khDQbqgOCz0", duration: "3:09", about: "After struggling with crack cocaine and her mental health, Kelly sought support from WithYou in Darlington, built a strong relationship with her key worker, and has since had her children returned to her care." },
      { id: "yt-jeffrey-drug-use", person: "Jeffrey", title: "Recovery Story - Jeffrey", channel: "Turning Point", url: "https://www.youtube.com/watch?v=0wPT0gxIeq0", duration: "3:45", about: "Jeffrey, now a support worker at Smithfield Detox, talks about his recovery journey from drug addiction." },
      { id: "yt-alan-drug-use", person: "Alan", title: "Alan's story: Overcoming struggles and finding a new beginning", channel: "WithYou", url: "https://www.youtube.com/watch?v=yivaTD41wPY", duration: "2:32", about: "Alan shares his journey from alcohol and heroin to rebuilding his life, and is now a team lead at WithYou." },
    ],
  },
  "quitting-smoking": {
    facts: ["Pulse settles within 20 minutes","Expert support triples quit odds","Cravings last up to 15 minutes"],
    watch: [
      { id: "yt-ukhsa-smoking-vs-vaping", title: "Smokefree ‘Health Harms’ – Impact of smoking vs vaping demonstration", kind: "video", duration: "2:41", url: "https://www.youtube.com/watch?v=RisBe5sLGPc", extra: "Smoking versus vaping, shown visually", publisher: "UK Health Security Agency", keywords: ["vaping", "smoking harms", "demonstration"] },
      { id: "yt-phs-quit-mental-health", title: "Quit Your Way stop-smoking service – smoking and mental health", kind: "video", duration: "1:01", url: "https://www.youtube.com/watch?v=NaScWQn1bBQ", extra: "Quitting benefits and free NHS support", publisher: "Public Health Scotland", keywords: ["mental health", "stop smoking service", "quit your way"] },
      { id: "yt-northumbria-where-to-start", title: "Where to start with stopping smoking", kind: "video", duration: "11:24", url: "https://www.youtube.com/watch?v=k6qU6_TzRbk", extra: "Benefits of quitting and local support", publisher: "NorthumbriaNHS", keywords: ["getting started", "benefits", "support"] },
    ],
    videoStories: [
      { id: "yt-stefan-no-smoking-day", person: "Stefan", title: "No Smoking Day 2016 - Stefan’s Story", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=pxe9cjqFncQ", duration: "2:15", about: "Stefan shares his story for No Smoking Day 2016, and says he has never felt as well as he does now." },
      { id: "yt-vanessa-no-smoking-day", person: "Vanessa", title: "British Heart Foundation - Vanessa's story for No Smoking Day", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=erqg-_Nce1s", duration: "1:27", about: "For No Smoking Day, Vanessa shows how she claimed victory over cigarettes by using knitting." },
      { id: "yt-michael-no-smoking-day", person: "Michael", title: "British Heart Foundation - Michael's story for No Smoking Day", channel: "British Heart Foundation", url: "https://www.youtube.com/watch?v=Hen5O2lFgOM", duration: "1:03", about: "For No Smoking Day, Michael shares how he claimed victory in his battle with cigarettes." },
    ],
  },
  "anger": {
    facts: ["A normal, healthy emotion","Most programmes include CBT","12 in 100 struggle with anger"],
    watch: [
      { id: "yt-nsft-tipp-technique", title: "The TIPP Technique", kind: "video", duration: "2:24", url: "https://www.youtube.com/watch?v=8nVady7A3Qo", extra: "Calming intense fear or anger", publisher: "Norfolk and Suffolk NHS Foundation Trust", keywords: ["calming", "in the moment", "intense emotions"] },
      { id: "yt-talk-wandsworth-anger-irritability", title: "Managing Anger & Irritability Taster (Wellbeing Summit May 2020) w/ Merton Uplift and Sutton Uplift", kind: "video", duration: "4:52", url: "https://www.youtube.com/watch?v=ddcKbq5U9M8", extra: "Managing anger and irritability workshop", publisher: "Talk Wandsworth Wellbeing", keywords: ["anger management", "irritability", "workshop"] },
      { id: "yt-headway-behaviours-that-challenge", title: "Understanding and responding to behaviours that challenge following acquired brain injury", kind: "video", duration: "23:03", url: "https://www.youtube.com/watch?v=b76w2wN4m2w", extra: "Challenging behaviour after brain injury", publisher: "Headway - the brain injury association", keywords: ["brain injury", "behaviour", "families"] },
    ],
    videoStories: [
      { id: "yt-bernadine-mind-anger", person: "Bernadine", title: "Opening up about stress and anger - Bernadine", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=jgiorDF-mxU", duration: "1:14", about: "Bernadine, 18, talks about how she opened up to her Mum during her GCSEs, and how she found ways to deal with her stress and anger." },
      { id: "yt-christine-headway", person: "Christine", title: "See the Hidden Me: Headway talks to brain injury survivor Christine", channel: "Headway - the brain injury association", url: "https://www.youtube.com/watch?v=Fjla2Nrxp7Y", duration: "9:29", about: "Christine, 34, lives with the effects of a brain injury left by a brain tumour, including memory problems, fatigue and getting very irate, which she finds the most frustrating because it affects other people." },
      { id: "yt-isaac-respect", person: "Isaac", title: "Isaac's Story", channel: "Respect", url: "https://www.youtube.com/watch?v=yxKxasxwim4", duration: "0:56", about: "Isaac called the Respect Phoneline because he was struggling to manage his behaviour, and talked through the times he had lost his temper and the warning signs in his body." },
    ],
  },
  "arfid": {
    facts: ["Affects people of any age","Not about body image","Treatment can be tailored to you"],
    watch: [
      { id: "yt-aauk-what-is-arfid", title: "What is ARFID? | Introduction to ARFID", kind: "video", duration: "4:29", url: "https://www.youtube.com/watch?v=0Q-nOChxVGM", extra: "An introduction to ARFID", publisher: "ARFID Awareness UK", keywords: ["what it is", "introduction", "myths"] },
      { id: "yt-canddid-cbt-arfid", title: "8 Cognitive Behavioural Therapy for ARFID", kind: "video", duration: "1:20", url: "https://www.youtube.com/watch?v=QHVHOeNDVIs", extra: "CBT for ARFID, NHS information", publisher: "CANDDID", keywords: ["cbt", "therapy", "treatment"] },
      { id: "yt-maudsley-dietitians", title: "Eating disorders dietitians explain their role in treatment", kind: "video", duration: "6:05", url: "https://www.youtube.com/watch?v=vt4u9IXiVPo", extra: "Specialist dietitians explain their role", publisher: "Maudsley NHS", keywords: ["dietitian", "nutrition", "treatment"] },
    ],
    videoStories: [
      { id: "yt-joe-arfid", person: "Joe", title: "Eating Disorders Awareness Week 2024.  Joe’s Story.", channel: "Beat", url: "https://www.youtube.com/watch?v=CCQdEUf7lKE", duration: "1:53", about: "Joe tells how ARFID has affected his life for over ten years, for Beat's message that people with ARFID are not being fussy." },
    ],
  },
  "adhd": {
    facts: ["Affects 3 to 4 in 100 adults","Usually starts before age 12","Often runs in families"],
    watch: [
      { id: "yt-adhduk-what-is-adhd", title: "What is ADHD?", kind: "video", duration: "2:29", url: "https://www.youtube.com/watch?v=kSVJc4H0gFo", extra: "A short answer to what ADHD is", publisher: "ADHD UK", keywords: ["what is adhd", "introduction", "adhd uk"] },
      { id: "yt-nhs-inform-living-with-adhd", title: "Attention deficit hyperactivity disorder (ADHD) - Living with ADHD", kind: "video", duration: "6:35", url: "https://www.youtube.com/watch?v=fKjgY8H0QpU", extra: "Learning about living with ADHD", publisher: "NHS inform", keywords: ["living with adhd", "daily life", "nhs"] },
      { id: "yt-adhduk-medication", title: "ADHD Medication", kind: "video", duration: "6:54", url: "https://www.youtube.com/watch?v=fyMokif8hXg", extra: "An ADHD specialist on medication", publisher: "ADHD UK", keywords: ["medication", "treatment", "specialist"] },
    ],
    videoStories: [
      { id: "yt-steven-adhd", person: "Steven", title: "Steven's Story - The impact of ADHD on my life and how I am recovering", channel: "SWYPFT", url: "https://www.youtube.com/watch?v=upE2AXymTT4", duration: "4:16", about: "Steven was diagnosed with ADHD from a young age, and explains how it has affected his life and how South West Yorkshire Partnership NHS services have helped him cope." },
      { id: "yt-julie-adhd", person: "Julie", title: "The Recovery College - Support on the ADHD pathway", channel: "Norfolk and Suffolk NHS Foundation Trust", url: "https://www.youtube.com/watch?v=RAdsvDwTru8", duration: "5:23", about: "Julie, a service user on the ADHD pathway, shares her experience of the pathway and the benefits of the Recovery College during this time." },
      { id: "yt-george-adhd", person: "George", title: "Waiting for answers - a week in the life of OCD, anxiety and undiagnosed ADHD", channel: "Mind, the mental health charity", url: "https://www.youtube.com/watch?v=Rb35DoLSPe0", duration: "19:14", about: "George shares his experience of waiting for an ADHD diagnosis, living with adult ADHD, and how it affects his anxiety and OCD." },
    ],
  },
  "gambling": {
    facts: ["2 to 3 in 100 have it","Free 24-hour helpline: 0808 8020 133","You can self-refer to NHS clinics"],
    watch: [
      { id: "yt-em-gambling-harms-service", title: "An introduction to the East Midlands Gambling Harms Service", kind: "video", duration: "0:36", url: "https://www.youtube.com/watch?v=xRcxl4XuHFI", extra: "A psychologist explains the NHS service", publisher: "Derbyshire Healthcare NHS Foundation Trust", keywords: ["nhs gambling service", "east midlands"] },
      { id: "yt-apa-what-is-gambling-addiction", title: "What is gambling addiction? | APA", kind: "video", duration: "1:16", url: "https://www.youtube.com/watch?v=9zzRwwx8K1c", extra: "What gambling disorder is", publisher: "American Psychiatric Association", keywords: ["gambling disorder", "signs", "explained"] },
      { id: "yt-gamcare-help", title: "GamCare - Help for Anyone Affected by Gambling Harms", kind: "video", duration: "0:45", url: "https://www.youtube.com/watch?v=g7DNhTeZ4fA", extra: "Support for anyone affected by gambling", publisher: "GamCare UK", keywords: ["gamcare", "support", "helpline"] },
    ],
    videoStories: [
      { id: "yt-kelly-gambling", person: "Kelly", title: "Kelly - a gambling addiction story", channel: "Leeds and York PFT", url: "https://www.youtube.com/watch?v=LP_bYyQ1SWw", duration: "2:23", about: "Kelly from Merseyside began gambling online while off work for a long time, and kept gambling until she got help; she wants more awareness of how gambling can affect women as well as men." },
      { id: "yt-joe-gambling", person: "Joe", title: "Joe - a  gambling addiction story", channel: "Leeds and York PFT", url: "https://www.youtube.com/watch?v=ZO7YCKYHMEo", duration: "2:34", about: "Joe (not his real name) from Leeds gambled secretly for years, then came clean to his wife and got help from Gamblers Anonymous; exercise has been a big help in his recovery." },
      { id: "yt-nathan-gambling", person: "Nathan", title: "Nathan - a gambling addiction story", channel: "Leeds and York PFT", url: "https://www.youtube.com/watch?v=wVZvf3_gW5c", duration: "2:10", about: "Nathan from Leeds started gambling at 18; he vowed to stop, told his family and friends everything, and says that commitment has been crucial to his recovery." },
    ],
  },
  "autism": {
    facts: ["More than 1 in 100 people are autistic","Autism is not an illness","A disability under the Equality Act"],
    watch: [
      { id: "yt-nas-what-is-autism", title: "What is autism?", kind: "video", duration: "3:05", url: "https://www.youtube.com/watch?v=WLx9jyxJaRw", extra: "Characteristics shown in daily life", publisher: "National Autistic Society", keywords: ["what is autism", "characteristics", "spectrum"] },
      { id: "yt-nas-assessment-steps", title: "What will happen in the autism assessment? What will I have to do?", kind: "video", duration: "1:38", url: "https://www.youtube.com/watch?v=lyaCl3qUo3k", extra: "An expert explains assessment steps", publisher: "National Autistic Society", keywords: ["assessment", "diagnosis", "adults"] },
      { id: "yt-nhs-we-are-autistic", title: "We are autistic | NHS", kind: "video", duration: "15:16", url: "https://www.youtube.com/watch?v=nhXHAVAEspk", extra: "Five autistic people on everyday life", publisher: "NHS", keywords: ["living with autism", "everyday life", "support"] },
    ],
    videoStories: [
      { id: "yt-graeme-autism", person: "Graeme", title: "Autism: Graeme's story | NHS", channel: "NHS", url: "https://www.youtube.com/watch?v=yKT3swmn_wc", duration: "2:01", about: "Graeme took a dyslexia test at 24 that showed signs of autism, and describes how he was finally diagnosed and what the diagnosis meant to him." },
      { id: "yt-adrian-autism", person: "Adrian", title: "Autism - My Story - Adrian | NHS", channel: "NHS", url: "https://www.youtube.com/watch?v=IO02QTF5eOw", duration: "7:09", about: "Adrian talks about the events at work that led to his autism diagnosis, the challenges he faces, disclosing his diagnosis and getting to know himself." },
      { id: "yt-dawn-nowiknow", person: "Dawn", title: "#NowIKnow - Dawn's story", channel: "National Autistic Society", url: "https://www.youtube.com/watch?v=5P7RM4EnRQA", duration: "4:26", about: "Dawn, whose words helped shape the Now I Know campaign on late diagnosis in women and non-binary people, explains why subtler presentations of autism need to be understood." },
    ],
  },
  "binge-eating": {
    facts: ["Around 1 in 25 in the UK","Often starts in your 20s or older","Most people recover with support"],
    watch: [
      { id: "yt-nhsinform-bed-bsl", title: "BSL Binge eating disorder (BED)", kind: "video", duration: "10:17", url: "https://www.youtube.com/watch?v=-WQ4ihiNSAw", extra: "BED explained in British Sign Language", publisher: "NHS inform", keywords: ["bsl", "what it is", "nhs"] },
      { id: "yt-beat-affect-anyone-bed", title: "Eating disorders can affect anyone", kind: "video", duration: "1:49", url: "https://www.youtube.com/watch?v=xRdKBLbb-bk", extra: "Anyone, anywhere, at any time", publisher: "Beat", keywords: ["anyone", "awareness", "beat"] },
      { id: "yt-nhs24-get-help-bed", title: "How to get help for an eating disorder", kind: "video", duration: "3:19", url: "https://www.youtube.com/watch?v=MtsJBk41zSg", extra: "A GP on getting help", publisher: "NHS 24", keywords: ["gp", "getting help", "binge eating"] },
    ],
    videoStories: [
      { id: "yt-abigail-anorexia-bed", person: "Abigail", title: "Abigail’s story: recovering from anorexia and a binge eating disorder", channel: "NHS 24", url: "https://www.youtube.com/watch?v=s7nBob9T6Lo", duration: "9:09", about: "Abigail talks about being diagnosed with anorexia and later binge eating disorder, how she got help, and what recovery has looked like for her." },
    ],
  },
};
