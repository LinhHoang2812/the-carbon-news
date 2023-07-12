import { nanoid } from "nanoid";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const headlines = [
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Richard Forbes",
    title: "Inside the First Youth-Led Climate Lawsuit to Go to Trial",
    description:
      "In Held v. Montana, 16 young residents challenged what the state must do to uphold its constitution’s guarantee of a “clean and healthful environment.”",
    url: "https://www.wired.com/story/inside-the-first-youth-led-climate-lawsuit-to-go-to-trial/",
    urlToImage:
      "https://media.wired.com/photos/649ec08ca6c1fece8f4bb3f3/191:100/w_1280,c_limit/heldmontana_science_climatedesk_GettyImages-1258644061.jpg",
    publishedAt: "2023-07-01T12:00:00Z",
    content:
      "I would feel relief and joy, that what were doing matters, said 18-year-old Kian Tanner, that when we speak out, when we create action, we can create positive change in the world.\r\nThe tension betwee… [+2954 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "",
    title: "50th World Environment Day – in pictures",
    description:
      "Images from around the world taken on World Environment Day, an annual global event celebrated on 5 June to raise awareness, mobilise action and promote environmental sustainability Continue reading...",
    url: "https://www.theguardian.com/environment/gallery/2023/jun/06/50th-world-environment-day-in-pictures",
    urlToImage:
      "https://i.guim.co.uk/img/media/90608b4a78568ce4cf414519c75a993569599660/0_275_8256_4954/master/8256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1884794cc3afd9c03622fca4508d34b4",
    publishedAt: "2023-06-06T07:17:37Z",
    content:
      "Images from around the world taken on World Environment Day, an annual global event celebrated on 5 June to raise awareness, mobilise action and promote environmental sustainability",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Environment campaigners ask Norway court to halt three oil ... - Reuters",
    description:
      "Environment campaigners ask Norway court to halt three oil ...  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2Vudmlyb25tZW50L2Vudmlyb25tZW50LWNhbXBhaWduZXJzLWFzay1jb3VydC1oYWx0LTMtbm9yd2VnaWFuLW9pbC1kZXZlbG9wbWVudHMtMjAyMy0wNi0yOS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-06-29T05:02:14Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "London's expanding clean air zone sparks economy-vs-environment ... - Reuters",
    description:
      "London's expanding clean air zone sparks economy-vs-environment ...  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VrL2xvbmRvbnMtZXhwYW5kaW5nLWNsZWFuLWFpci16b25lLXNwYXJrcy1lY29ub215LXZzLWVudmlyb25tZW50LXJvdy0yMDIzLTA3LTAzL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-07-03T06:06:07Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Viaplay names new CEO, cuts outlook as business environment ... - Reuters.com",
    description:
      "Viaplay names new CEO, cuts outlook as business environment ...  Reuters.com",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL21lZGlhLXRlbGVjb20vdmlhcGxheS1uYW1lcy1uZXctY2VvLWN1dHMtb3V0bG9vay1idXNpbmVzcy1lbnZpcm9ubWVudC1kZXRlcmlvcmF0ZXMtMjAyMy0wNi0wNS_SAQA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-06-05T03:32:28Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Italy could abandon coal by 2024, environment minister says - Reuters",
    description:
      "Italy could abandon coal by 2024, environment minister says  Reuters",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS9pdGFseS1jb3VsZC1hYmFuZG9uLWNvYWwtYnktMjAyNC1lbnZpcm9ubWVudC1taW5pc3Rlci1zYXlzLTIwMjMtMDYtMDUv0gEA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-06-05T12:37:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: null,
      name: "The Guardian",
    },
    author: "PA Media",
    title:
      "Zac Goldsmith resigns accusing government of ‘apathy’ over environment",
    description:
      "Environment minister says Rishi Sunak is ‘uninterested’ and that has caused ‘paralysis’ through WhitehallThe UK environment minister, Zac Goldsmith, has announced his resignation, accusing the government of “apathy” over environmental issues.Lord Goldsmith, w…",
    url: "https://www.theguardian.com/politics/2023/jun/30/zac-goldsmith-resigns-accusing-government-of-apathy-over-environment",
    urlToImage:
      "https://i.guim.co.uk/img/media/b6cebde604526798614aa54d71a159ab571aff21/663_100_4264_2560/master/4264.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=39f89829c4cdde782bbfd1f5dbe1b464",
    publishedAt: "2023-06-30T08:23:15Z",
    content:
      "The UK environment minister, Zac Goldsmith, has announced his resignation, accusing the government of apathy over environmental issues.\r\nLord Goldsmith, who was censured by the privileges committee e… [+2057 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Special air quality statement in effect: Environment Canada - SooToday",
    description:
      "<ol><li>Special air quality statement in effect: Environment Canada  SooToday\r\n</li><li>Sudbury air quality among the worst on Earth today  Sudbury.com\r\n</li><li>Haze blankets Belleville  Quinte News\r\n</li><li>Ottawa smoke: Poor air quality forecast for Sunda…",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3LnNvb3RvZGF5LmNvbS9sb2NhbC1uZXdzL3NwZWNpYWwtYWlyLXF1YWxpdHktc3RhdGVtZW50LWluLWVmZmVjdC1lbnZpcm9ubWVudC1jYW5hZGEtNzE5NDQ3MdIBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-06-26T11:21:57Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "Smog warning for Montreal area: Environment Canada - CTV News Montreal",
    description:
      "<ol><li>Smog warning for Montreal area: Environment Canada  CTV News Montreal\r\n</li><li>Global National: June 28, 2023 | Wildfire smoke sparks air quality alerts for millions in Canada, US  Global News\r\n</li><li>Smelling plastic? Millions are in the path of t…",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vbW9udHJlYWwuY3R2bmV3cy5jYS93aWxkZmlyZS1zbW9nLXdhcm5pbmctaXNzdWVkLWZvci1tb250cmVhbC1hZ2Fpbi0xLjY0NjAxNTHSAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-06-28T20:13:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
  {
    source: {
      id: "google-news",
      name: "Google News",
    },
    author: null,
    title:
      "UN ship agency chief urges decisive action at environment talks - Reuters.com",
    description:
      "UN ship agency chief urges decisive action at environment talks  Reuters.com",
    url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2Vudmlyb25tZW50L3VuLXNoaXAtYWdlbmN5LWNoaWVmLXVyZ2VzLWRlY2lzaXZlLWFjdGlvbi1lbnZpcm9ubWVudC10YWxrcy0yMDIzLTA2LTI2L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
    urlToImage: null,
    publishedAt: "2023-06-26T14:41:00Z",
    content:
      "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
  },
];

export const news = [
  {
    pageId: nanoid(),
    page: "ESG",
    articles: [
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "EU proposes greater regulatory scrutiny of ESG ratings providers - Reuters.com",
        description:
          "EU proposes greater regulatory scrutiny of ESG ratings providers  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3N1c3RhaW5hYmlsaXR5L2V1LXByb3Bvc2VzLWdyZWF0ZXItcmVndWxhdG9yeS1zY3J1dGlueS1lc2ctcmF0aW5ncy1wcm92aWRlcnMtMjAyMy0wNi0xMy_SAQA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-13T13:25:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "'Anti-ESG' funds face slowing deposits, Morningstar says - Reuters",
        description:
          "'Anti-ESG' funds face slowing deposits, Morningstar says  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3N1c3RhaW5hYmlsaXR5L2FudGktZXNnLWZ1bmRzLWZhY2Utc2xvd2luZy1kZXBvc2l0cy1tb3JuaW5nc3Rhci1zYXlzLTIwMjMtMDYtMDgv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-08T19:26:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "JPMorgan launches sustainable data solutions to simplify ESG ... - Reuters.com",
        description:
          "JPMorgan launches sustainable data solutions to simplify ESG ...  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMigAFodHRwczovL3d3dy5yZXV0ZXJzLmNvbS9zdXN0YWluYWJpbGl0eS9lbWJhcmdvLWpwbW9yZ2FuLWxhdW5jaGVzLXN1c3RhaW5hYmxlLWRhdGEtc29sdXRpb25zLXNpbXBsaWZ5LWVzZy1pbnZlc3RtZW50cy0yMDIzLTA2LTEzL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-13T06:16:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Standardised ESG reporting could help solve mining's image issues - Reuters",
        description:
          "Standardised ESG reporting could help solve mining's image issues  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3N1c3RhaW5hYmlsaXR5L3N0YW5kYXJkaXNlZC1lc2ctcmVwb3J0aW5nLWNvdWxkLWhlbHAtc29sdmUtbWluaW5ncy1pbWFnZS1pc3N1ZXMtMjAyMy0wNi0xNS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-15T07:01:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "UK investors back money market funds in May, ditch ESG funds - Reuters",
        description:
          "UK investors back money market funds in May, ditch ESG funds  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdWstaW52ZXN0b3JzLWJhY2stbW9uZXktbWFya2V0LWZ1bmRzLW1heS1kaXRjaC1lc2ctZnVuZHMtMjAyMy0wNi0wNi_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-06T07:05:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Biden admin. moves to nix US states' challenge to ESG investing rule - Reuters",
        description:
          "Biden admin. moves to nix US states' challenge to ESG investing rule  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VzL2JpZGVuLWFkbWluLW1vdmVzLW5peC11cy1zdGF0ZXMtY2hhbGxlbmdlLWVzZy1pbnZlc3RpbmctcnVsZS0yMDIzLTA2LTA1L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-05T16:28:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Analysis: EU overhaul of ESG ratings industry rules has further to run - Reuters",
        description:
          "Analysis: EU overhaul of ESG ratings industry rules has further to run  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3N1c3RhaW5hYmlsaXR5L2V1LW92ZXJoYXVsLWVzZy1yYXRpbmdzLWluZHVzdHJ5LXJ1bGVzLWhhcy1mdXJ0aGVyLXJ1bi0yMDIzLTA2LTE1L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-15T16:57:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Tesla returns to S&P 500 ESG index with more environmental ... - Reuters.com",
        description:
          "Tesla returns to S&P 500 ESG index with more environmental ...  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3N1c3RhaW5hYmlsaXR5L3Rlc2xhLXJldHVybnMtc3AtNTAwLWVzZy1pbmRleC13aXRoLW1vcmUtZW52aXJvbm1lbnRhbC1kaXNjbG9zdXJlcy0yMDIzLTA2LTIxL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-21T13:03:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "George Glover",
        title:
          "Elon Musk says 'ESG is the devil' with tobacco firms trouncing Tesla in social-responsibility ratings",
        description:
          "The billionaire tech boss highlighted research showing that tobacco stocks tend to score more highly than Tesla in ESG ratings.",
        url: "https://markets.businessinsider.com/news/stocks/elon-musk-tesla-stock-price-esg-tobacco-green-investing-twitter-2023-6",
        urlToImage:
          "https://i.insider.com/615c159d47302d0019a51f0e?width=1200&format=jpeg",
        publishedAt: "2023-06-14T13:27:37Z",
        content:
          'Elon Musk slammed socially responsible investing Wednesday.Jae C. Hong/AP\r\n<ul>\n<li>Elon Musk called the framework that evaluates companies\' social and sustainability standards "the devil" on Wednesd… [+1832 chars]',
      },
      {
        source: {
          id: "time",
          name: "Time",
        },
        author: "Justin Worland",
        title: "Larry Fink Takes on ESG Backlash",
        description:
          "As the backlash to ESG grows, business leaders aren't abandoning their climate work. They've just changed the way they talk about it.",
        url: "https://time.com/6291317/larry-fink-esg-climate-action/",
        urlToImage:
          "https://api.time.com/wp-content/uploads/2023/06/larry-fink-blackrock-esg-climate-change.jpg?quality=85&w=1024&h=628&crop=1",
        publishedAt: "2023-06-29T17:45:09Z",
        content:
          "Larry Fink doesn’t want to use the term ESG anymore, and the longtime BlackRock CEO said he is “ashamed” to have been drawn into the political debate over the term. At a quick glance, those comments … [+3577 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jason Ma",
        title:
          "A German state refuses to buy Treasurys because the US doesn't meet its ESG standards",
        description:
          "The German state of Baden-Württemberg passed a sustainable-investing law earlier this year that affects its $18 billion in holdings.",
        url: "https://markets.businessinsider.com/news/bonds/us-treasurys-esg-standards-german-state-sustainable-investing-2023-6",
        urlToImage:
          "https://i.insider.com/647f3d0040bf000019fa52c9?width=1200&format=jpeg",
        publishedAt: "2023-06-06T17:44:01Z",
        content:
          "richcano/Getty Images\r\n<ul>\n<li>The German state of Baden-Württemberg is excluding US Treasurys from its holdings, Bloomberg reported.</li>\n<li>That's because the US government falls short of the sta… [+2043 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Rebecca Ungarino",
        title:
          "BlackRock is shaping next-generation leadership and hunting for deals. Here's the latest news on the largest money manager.",
        description:
          "BlackRock, which oversees $9.1 trillion, has faced scrutiny from lawmakers and investors over its sustainable investing strategies and size.",
        url: "https://www.businessinsider.com/blackrock-news-updates",
        urlToImage:
          "https://i.insider.com/633b29b36427060019ef1c67?width=1200&format=jpeg",
        publishedAt: "2023-06-19T12:02:05Z",
        content:
          "\"I'm not planning to leave BlackRock anytime soon,\" Larry Fink, the firm's CEO and cofounder, told investors this month.Spencer Platt/Getty Images\r\n<ul>\n<li>BlackRock is the largest asset management … [+7717 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Dharna Noor",
        title:
          "Rightwing war on ‘woke capitalism’ funded by deep-pocketed industry interests",
        description:
          "New report shows connections of business and rightwing thinktanks to laws aimed at environmental, social and corporate governanceThe American right wing’s widening fight against what it calls “woke capitalism” is partly driven by fossil fuel interests or indu…",
        url: "https://www.theguardian.com/us-news/2023/jun/22/rightwing-war-on-woke-capitalism-industry-interests",
        urlToImage:
          "https://i.guim.co.uk/img/media/3b551d06cc29168de17af074c804cae6372f0a53/0_335_3000_1802/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6314bbeba78b8d6f778f69d5fb79862b",
        publishedAt: "2023-06-22T11:00:07Z",
        content:
          "The American right wings widening fight against what it calls woke capitalism is partly driven by fossil fuel interests or industry allies, according to a new report published on Thursday.\r\nConservat… [+9698 chars]",
      },
      {
        source: {
          id: null,
          name: "Fast Company",
        },
        author: "Christopher Zara",
        title: "Let’s bring $1 billion back to journalism",
        description:
          "Advertising alone cannot fix the broken news business, but we can be part of the solution if we discard old myths about news content being unsafe for brands.\n\nThe news business is in trouble. This month, hundreds of the remaining journalists still employed by…",
        url: "https://www.fastcompany.com/90912217/news-business-broken-fix-advertisers-pledge-pov",
        urlToImage:
          "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2023/06/p-1-90912217-lets-bring-1-billion-back-to-journalism.jpg",
        publishedAt: "2023-06-20T15:01:00Z",
        content:
          "The news business is in trouble. This month, hundreds of the remaining journalists still employed by Gannett, the nation’s largest newspaper chain, walked out to protest further cuts to local newsroo… [+7579 chars]",
      },
      {
        source: {
          id: null,
          name: "heise online",
        },
        author: "Dennis Schirrmacher",
        title: "Cyber-Attacken: Admins müssen Barracuda ESG sofort erseztzen",
        description:
          "Der Hersteller von Email Security Gateway Appliances (ESG) Barracuda appelliert an Admins, angegriffene Geräte auszutauschen. Sie sollten umgehend handeln.",
        url: "https://www.heise.de/news/Cyberattacken-Admins-muessen-Barracuda-ESG-sofort-erseztzen-9181326.html",
        urlToImage:
          "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/5/2/2/1/3/shutterstock_1378498490-a4647d4fe8cd2430.jpg",
        publishedAt: "2023-06-08T11:13:00Z",
        content:
          "Derzeit haben Angreifer Barracudas Email Security Gateway Appliances (ESG) im Visier und machen sich durch Hintertüren auf Geräten breit. Der Hersteller hat zwar bereits automatisch ein Sicherheitsup… [+1061 chars]",
      },
      {
        source: {
          id: null,
          name: "Autoblog",
        },
        author: "Insider",
        title:
          "Elon Musk says 'ESG is the devil' as tobacco firms trounce Tesla in social-responsibility ratings",
        description:
          "Filed under:\n Design/Style\n Continue reading Elon Musk says 'ESG is the devil' as tobacco firms trounce Tesla in social-responsibility ratings\nElon Musk says 'ESG is the devil' as tobacco firms trounce Tesla in social-responsibility ratings originally appeare…",
        url: "https://www.autoblog.com/2023/06/14/elon-musk-says-esg-is-the-devil-as-tobacco-firms-trounce-tesla-in-social-responsibility-ratings/",
        urlToImage:
          "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://media.zenfs.com/en/insider_articles_922/dd690c14c9be135bda5c369572942cee",
        publishedAt: "2023-06-14T13:27:00Z",
        content:
          "Elon Musk slammed socially responsible investing Wednesday. \r\n Jae C. Hong/AP\r\nElon Musk slammed the framework that evaluates companies' environmental, social and governance standards, flagging that … [+1452 chars]",
      },
      {
        source: {
          id: "the-next-web",
          name: "The Next Web",
        },
        author: "Aoife Barry",
        title:
          "Job seekers: How can you tell if a company is serious about their sustainability claims?",
        description:
          "Being green can make a company look good––and who wouldn’t want to work for a business that says it’s doing a stellar job with sustainability?  But in a world of greenwashing (or even greencrowding, greenhushing and greenshifting), consumers and workers are a…",
        url: "https://thenextweb.com/news/job-seekers-how-can-you-tell-if-a-company-is-serious-about-their-sustainability-claims",
        urlToImage:
          "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F06%2Fgreenwashing1.jpg&signature=934014a5ff9319ca2dc8dbaeede2408e",
        publishedAt: "2023-06-27T10:53:06Z",
        content:
          "Being green can make a company look goodand who wouldnt want to work for a business that says its doing a stellar job with sustainability? \r\nBut in a world of greenwashing (or even greencrowding, gre… [+8291 chars]",
      },
      {
        source: {
          id: null,
          name: "Politicopro.com",
        },
        author: "Avery Ellfeldt, E&E News",
        title:
          "There's No Evidence for Claims That Environmentally Friendly Investments Are Bad for the Poor",
        description:
          "There is no evidence for Republican claims that considering&nbsp;the&nbsp;environmental impacts of&nbsp;investment is&nbsp;bad for the&nbsp;poor&mdash;part of the party&rsquo;s growing opposition to environmental, social and governance investments",
        url: "https://subscriber.politicopro.com/article/eenews/2023/06/15/esg-is-hurting-the-poor-critics-say-experts-dont-buy-it-00101837",
        urlToImage:
          "https://static.scientificamerican.com/sciam/cache/file/F44FBD24-8EB1-42A9-A93AF805598162A6.jpg",
        publishedAt: "2023-06-15T17:00:00Z",
        content:
          "CLIMATEWIRE | Conservatives are leveraging a new argument against ESG: It's hurting poor families.\r\nEnergy analysts say the criticism lacks any supporting evidence. But it builds on Republicans' inte… [+6589 chars]",
      },
      {
        source: {
          id: null,
          name: "VentureBeat",
        },
        author: "Francesco Ricciuti, Runa Capital",
        title:
          "How AI and advanced computing can pull us back from the brink of accelerated climate change",
        description:
          "Quantum, photonic and neuromorphic computing are some of the advanced computing alternatives to energy-gobbling artificial intelligence (AI).",
        url: "https://venturebeat.com/ai/how-ai-and-advanced-computing-can-pull-us-back-from-the-brink-of-accelerated-climate-change/",
        urlToImage:
          "https://venturebeat.com/wp-content/uploads/2023/06/annevb_artificial_intelligence_stopping_climate_change._Colorfu_db2d6071-ac8f-444e-be23-a70ed1f69585.png?w=1200&strip=all",
        publishedAt: "2023-06-17T16:10:00Z",
        content:
          "Join top executives in San Francisco on July 11-12, to hear how leaders are integrating and optimizing AI investments for success. Learn More\r\nBarely a week passes without another dramatic report abo… [+1056 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Pete Syme",
        title:
          "AI hype could end up like the dot-com bubble, veteran investor warns: 'I'd put much larger odds on it coming down'",
        description:
          "An investment boom in artificial intelligence technologies has been spurred by the rise of OpenAI's bot ChatGPT.",
        url: "https://www.businessinsider.com/ai-hype-could-end-up-like-dot-com-bubble-investor-2023-6",
        urlToImage:
          "https://i.insider.com/6488594a62d3f10019967213?width=1200&format=jpeg",
        publishedAt: "2023-06-13T12:36:00Z",
        content:
          "New estimates indicate that the generative AI market could be worth $1.3 trillion by 2032.Yuichiro Chino/Getty Images\r\n<ul>\n<li>Investors are loving AI right now, with chipmaker Nvidia sitting near a… [+1873 chars]",
      },
      {
        source: {
          id: null,
          name: "MarketWatch",
        },
        author: "Bill Peters",
        title:
          "Earnings Watch: Executives are talking less about their environmental and social-justice goals — and more about AI",
        description:
          "Earnings Watch: Oracle, Adobe report as AI potential overtakes tech-spending concerns; homebuilder Lennar also reports",
        url: "https://www.marketwatch.com/story/executives-are-talking-less-about-their-environmental-and-social-justice-goals-and-more-about-ai-ebf505ec",
        urlToImage: "https://images.mktw.net/im-798083/social",
        publishedAt: "2023-06-11T14:01:00Z",
        content:
          "With AI among the few things to truly captivate investors this year, more executives, from those at Nvidia Corp. to Walmart Inc. \r\n WMT,\r\n +0.60%\r\nto Stitch Fix Inc. \r\n SFIX,\r\n -8.57%\r\n,\r\n are talkin… [+3703 chars]",
      },
      {
        source: {
          id: null,
          name: "Hipertextual",
        },
        author: "Hipertextual (Redacción)",
        title:
          "¿Qué hacen las grandes empresas tecnológicas para cuidar el medio ambiente?",
        description:
          "La sostenibilidad y cuidado del medio ambiente es algo que cada vez preocupa más a las personas. De hecho, según una encuesta realizada por el CIS en el mes de marzo, la preocupación por factores como el cambio climático o la naturaleza están por encima de ot…",
        url: "http://hipertextual.com/2023/06/empresas-tecnologicas-medio-ambiente",
        urlToImage:
          "https://imgs.hipertextual.com/wp-content/uploads/2023/06/noah-buscher-x8ZStukS2PM-unsplash-scaled.jpg",
        publishedAt: "2023-06-29T12:32:44Z",
        content:
          "La sostenibilidad y cuidado del medio ambiente es algo que cada vez preocupa más a las personas. De hecho, según una encuesta realizada por el CIS en el mes de marzo, la preocupación por factores com… [+5770 chars]",
      },
      {
        source: {
          id: null,
          name: "Springwise.com",
        },
        author: "Hannah Hudson",
        title: "Turning rainforests into tangible ESG assets",
        description:
          "A new approach to valuing forested areas could help conserve tropical rainforests\nThe post Turning rainforests into tangible ESG assets appeared first on Springwise.",
        url: "https://www.springwise.com/innovation/sustainability/turning-rainforests-into-tangible-esg-assets/",
        urlToImage:
          "https://www.springwise.com/wp-content/uploads/2023/06/innovationsustainabilityturning-rainforests-into-tangible-ESG-assets.png",
        publishedAt: "2023-06-22T04:55:00Z",
        content:
          "Spotted: Since 1947, the total area of tropical rainforests has been reduced by more than half, with around 100 acres of rainforest cleared every minute for agricultural and industrial development. N… [+2213 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Kate Aronoff",
        title:
          "Climate risks are making California uninsurable. When will we wake up? | Kate Aronoff",
        description:
          "State Farm will almost entirely stop issuing new policies in California – with climate-exacerbated wildfires and bad public policy a large reason whyState Farm, the country’s largest property insurer, announced this week that it will almost entirely stop issu…",
        url: "https://www.theguardian.com/commentisfree/2023/jun/06/climate-risks-are-making-california-uninsurable-when-will-we-wake-up",
        urlToImage:
          "https://i.guim.co.uk/img/media/651ffbee89cd805bd6ffb796a2deb824d9b76df6/0_130_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=446f595c6678aa227629210f190acbeb",
        publishedAt: "2023-06-06T10:15:05Z",
        content:
          "State Farm, the countrys largest property insurer, announced this week that it will almost entirely stop issuing new policies in California, the countrys largest property insurance market. The reason… [+3603 chars]",
      },
      {
        source: {
          id: null,
          name: "Krebs on Security",
        },
        author: "BrianKrebs",
        title:
          "Barracuda Urges Replacing — Not Patching — Its Email Security Gateways",
        description:
          "It's not often that a zero-day vulnerability causes a network security vendor to urge customers to physically remove and decommission an entire line of affected hardware -- as opposed to just applying software updates. But experts say that is exactly what tra…",
        url: "https://krebsonsecurity.com/2023/06/barracuda-urges-replacing-not-patching-its-email-security-gateways/",
        urlToImage:
          "https://krebsonsecurity.com/wp-content/uploads/2023/06/barracuda.png",
        publishedAt: "2023-06-08T20:17:06Z",
        content:
          "It’s not often that a zero-day vulnerability causes a network security vendor to urge customers to physically remove and decommission an entire line of affected hardware — as opposed to just applying… [+3509 chars]",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "Sustainable",
    articles: [
      {
        source: {
          id: null,
          name: "Smashingmagazine.com",
        },
        author: "hello@smashingmagazine.com (Cosima Mielke & Geoff Graham)",
        title: "Sustainable Design Toolkits And Resources",
        description:
          "How can we create products and experiences that don’t cause harm to the planet and to the people who use them? What do we need to consider to make more sustainable design decisions and reduce the carbon footprint of our websites? In this post, we compiled val…",
        url: "https://www.smashingmagazine.com/2023/07/sustainable-design-toolkits-and-resources/",
        urlToImage:
          "https://files.smashing.media/articles/sustainable-design-toolkits/sustainability-innovation-framework-opt.png",
        publishedAt: "2023-07-04T09:00:00Z",
        content:
          "Sustainable design is a paradigm that emphasizes the impact that design practices and workflows have on the environment with the goal of reducing carbon emissions. The design decisions we make are re… [+19044 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Canada presents long-awaited sustainable jobs bill for green ... - Reuters.com",
        description:
          "Canada presents long-awaited sustainable jobs bill for green ...  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3N1c3RhaW5hYmlsaXR5L2NhbmFkYS1wcmVzZW50cy1sb25nLWF3YWl0ZWQtc3VzdGFpbmFibGUtam9icy1iaWxsLWdyZWVuLXRyYW5zaXRpb24tMjAyMy0wNi0xNS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-15T14:39:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "India's rating upgrade hinges on sustainable fiscal consolidation ... - Reuters",
        description:
          "India's rating upgrade hinges on sustainable fiscal consolidation ...  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvYXNpYS9pbmRpYXMtcmF0aW5nLXVwZ3JhZGUtaGluZ2VzLXN1c3RhaW5hYmxlLWZpc2NhbC1jb25zb2xpZGF0aW9uLWxvdy1pbmZsYXRpb24tc3AtMjAyMy0wNi0yOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-28T08:12:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "JPMorgan launches sustainable data solutions to simplify ESG ... - Reuters.com",
        description:
          "JPMorgan launches sustainable data solutions to simplify ESG ...  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMigAFodHRwczovL3d3dy5yZXV0ZXJzLmNvbS9zdXN0YWluYWJpbGl0eS9lbWJhcmdvLWpwbW9yZ2FuLWxhdW5jaGVzLXN1c3RhaW5hYmxlLWRhdGEtc29sdXRpb25zLXNpbXBsaWZ5LWVzZy1pbnZlc3RtZW50cy0yMDIzLTA2LTEzL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-13T06:16:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title: "Armani tests sustainable cotton production in Italy - Reuters",
        description:
          "Armani tests sustainable cotton production in Italy  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3N1c3RhaW5hYmlsaXR5L2FybWFuaS10ZXN0cy1zdXN0YWluYWJsZS1jb3R0b24tcHJvZHVjdGlvbi1pdGFseS0yMDIzLTA2LTA1L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-05T13:42:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "France's Macron vows to boost sustainable aviation fuel production - Reuters.com",
        description:
          "France's Macron vows to boost sustainable aviation fuel production  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3N1c3RhaW5hYmlsaXR5L2ZyYW5jZXMtbWFjcm9uLXZvd3MtYm9vc3Qtc3VzdGFpbmFibGUtYXZpYXRpb24tZnVlbC1wcm9kdWN0aW9uLTIwMjMtMDYtMTYv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-16T09:36:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Brazil's Gerdau to invest $667 mln in sustainable mining platform - Reuters",
        description:
          "Brazil's Gerdau to invest $667 mln in sustainable mining platform  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3N1c3RhaW5hYmlsaXR5L2JyYXppbHMtZ2VyZGF1LWludmVzdC02NjctbWxuLXN1c3RhaW5hYmxlLW1pbmluZy1wbGF0Zm9ybS0yMDIzLTA2LTE1L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-15T20:56:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Kevin Hurler",
        title:
          "King Charles Unveils Jony Ive-Designed Seal for ‘Astra Carta’ Space Sustainability Initiative",
        description:
          "The U.K.’s King Charles III is really serious about keeping space clean, so much so that he unveiled the Astra Carta framework’s seal at Buckingham Palace yesterday.Read more...",
        url: "https://gizmodo.com/king-charles-unveils-jony-ive-designed-seal-for-astra-1850590654",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0f1eae198645f0cba05516e46b7f0310.png",
        publishedAt: "2023-06-29T15:45:00Z",
        content:
          "The U.K.s King Charles III is really serious about keeping space clean, so much so that he unveiled the Astra Carta frameworks seal at Buckingham Palace yesterday.\r\nThe Astra Carta framework is a Sus… [+2833 chars]",
      },
      {
        source: {
          id: "ars-technica",
          name: "Ars Technica",
        },
        author: "Eric Berger",
        title:
          "With 7,000+ satellites and growing, is space sustainable? An Ars Frontiers recap",
        description:
          '"We\'ve been using space as our own personal operating dumping ground."',
        url: "https://arstechnica.com/space/2023/06/with-7000-satellites-and-growing-is-space-sustainable-an-ars-frontiers-recap/",
        urlToImage:
          "https://cdn.arstechnica.net/wp-content/uploads/2023/06/Ars-Frontiers-2023-Livestream-1-20-33-screenshot-760x380.png",
        publishedAt: "2023-06-06T16:57:38Z",
        content:
          "Enlarge/ Eric Berger (upper left) moderated a panel featuring (clockwise) Alex Fielding, Charity Weeden, and Bhavya Lal on the topic of satellites and low-Earth orbit.\r\n9 with \r\nThe space industry ha… [+4233 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Bianca Giacobone",
        title:
          "Airbus has unveiled the aircraft cabin of the future. Take a look at Airspace Cabin Vision 2035+.",
        description:
          "Airbus' vision for more sustainable aircraft cabins includes lighter, recyclable materials, new catering concepts, and a focus on transparency.",
        url: "https://www.businessinsider.com/airbus-airspace-cabin-vision-2035-sustainable-aircraft-materials-unveiled-future-2023-6",
        urlToImage:
          "https://i.insider.com/647e23f1a52c4b001936a677?width=1200&format=jpeg",
        publishedAt: "2023-06-06T09:00:06Z",
        content:
          "The cabin can contribute between 10-20% to the aircraft’s overall environmental impact during its lifecycle, according to Airbus.Courtesy of Airbus\r\n<ul>\n<li>Airbus has unveiled its Airspace Cabin Vi… [+3003 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Rebecca Ungarino",
        title:
          "BlackRock is shaping next-generation leadership and hunting for deals. Here's the latest news on the largest money manager.",
        description:
          "BlackRock, which oversees $9.1 trillion, has faced scrutiny from lawmakers and investors over its sustainable investing strategies and size.",
        url: "https://www.businessinsider.com/blackrock-news-updates",
        urlToImage:
          "https://i.insider.com/633b29b36427060019ef1c67?width=1200&format=jpeg",
        publishedAt: "2023-06-19T12:02:05Z",
        content:
          "\"I'm not planning to leave BlackRock anytime soon,\" Larry Fink, the firm's CEO and cofounder, told investors this month.Spencer Platt/Getty Images\r\n<ul>\n<li>BlackRock is the largest asset management … [+7717 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Joanna Partridge",
        title:
          "‘I want to do something significant’: ex-F1 champion Nico Rosberg on his sustainable entrepreneurship",
        description:
          "The former elite driver has changed lanes from fossil-fuel-guzzling track cars to green investing and environmentally friendly racingIn a parallel world, former Formula One world champion Nico Rosberg could be sitting at home in Monaco with his feet up, havin…",
        url: "https://www.theguardian.com/business/2023/jun/13/i-want-to-do-something-significant-ex-f1-champion-nico-rosberg-on-his-sustainable-entrepreneurship",
        urlToImage:
          "https://i.guim.co.uk/img/media/50b35e77a25eda4b12e524a01dabcad917178feb/0_224_6720_4032/master/6720.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=e3f8051708f2388ad79928b871e07278",
        publishedAt: "2023-06-13T13:00:35Z",
        content:
          "In a parallel world, former Formula One world champion Nico Rosberg could be sitting at home in Monaco with his feet up, having set himself up for life, all before the tender age of 32.\r\nAfter clinch… [+6302 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author:
          "Written by Hettie O'Brien and read by Kate Okello. Produced by Nicola Alexandrou. The executive producer was Ellie Bury.",
        title:
          "The planet’s economist: has Kate Raworth found a model for sustainable living? – podcast",
        description:
          "Her hit book Doughnut Economics laid out a path to a greener, more equal society. But can she turn her ideas into meaningful change? Continue reading...",
        url: "https://www.theguardian.com/news/audio/2023/jul/03/the-planets-economist-has-kate-raworth-found-a-model-for-sustainable-living-podcast",
        urlToImage:
          "https://i.guim.co.uk/img/media/c9c43d61ca4b86950ccc365c19bb4515481a5125/0_0_8192_4915/master/8192.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c27e040911046b1345c08c4f106f912a",
        publishedAt: "2023-07-03T04:00:02Z",
        content:
          "Her hit book Doughnut Economics laid out a path to a greener, more equal society. But can she turn her ideas into meaningful change?\r\nHow to listen to podcasts: everything you need to know",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jason Ma",
        title:
          "A German state refuses to buy Treasurys because the US doesn't meet its ESG standards",
        description:
          "The German state of Baden-Württemberg passed a sustainable-investing law earlier this year that affects its $18 billion in holdings.",
        url: "https://markets.businessinsider.com/news/bonds/us-treasurys-esg-standards-german-state-sustainable-investing-2023-6",
        urlToImage:
          "https://i.insider.com/647f3d0040bf000019fa52c9?width=1200&format=jpeg",
        publishedAt: "2023-06-06T17:44:01Z",
        content:
          "richcano/Getty Images\r\n<ul>\n<li>The German state of Baden-Württemberg is excluding US Treasurys from its holdings, Bloomberg reported.</li>\n<li>That's because the US government falls short of the sta… [+2043 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Hettie O'Brien",
        title:
          "The planet’s economist: has Kate Raworth found a model for sustainable living?",
        description:
          "Her hit book Doughnut Economics laid out a path to a greener, more equal society. But can she turn her ideas into meaningful change?Consider the electric car. Sleek and nearly silent, it is a good example of how far the world has progressed in fighting the cl…",
        url: "https://www.theguardian.com/environment/2023/jun/08/the-planets-economist-has-kate-raworth-found-a-model-for-sustainable-living",
        urlToImage:
          "https://i.guim.co.uk/img/media/0c89a8df21a9cab4a051c4a8191fa7263360776c/0_339_7270_4362/master/7270.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0bf0f1004fc6ea05c3bd189cb1f52de6",
        publishedAt: "2023-06-08T05:00:05Z",
        content:
          "Consider the electric car. Sleek and nearly silent, it is a good example of how far the world has progressed in fighting the climate crisis. Its carbon footprint is around three times smaller than it… [+30017 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Ottawa unveils sustainable jobs plan for energy sector, says it thinks it can get Alberta to buy in - CBC News",
        description:
          "Ottawa unveils sustainable jobs plan for energy sector, says it thinks it can get Alberta to buy in  CBC NewsView Full Coverage on Google News",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiSGh0dHBzOi8vd3d3LmNiYy5jYS9uZXdzL3BvbGl0aWNzL2ZlZHMtc3VzdGFpbmFibGUtam9icy1hbGJlcnRhLTEuNjg3NzQ5M9IBIGh0dHBzOi8vd3d3LmNiYy5jYS9hbXAvMS42ODc3NDkz?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-15T18:09:04Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: null,
          name: "Design-milk.com",
        },
        author: "Caroline Williamson",
        title: "MIO Launches New Quilted Acoustic Designs for Sound Control",
        description:
          "MIO launches QuiltForms collection of sustainable acoustic products available in 12 modular shapes, 11 vibrant colors, and 6 stitch patterns for design-forward sound control solutions.",
        url: "https://design-milk.com/?p=511948",
        urlToImage:
          "https://design-milk.com/images/2023/06/MIO-Culture-QuiltForms-MIO-Acoustic-Material-NeoCon-1.jpg",
        publishedAt: "2023-06-14T15:00:50Z",
        content:
          "Just in time for NeoCon 2023, MIO has launched a collection of sustainable acoustic design products made from their new acoustic material technology. QuiltForms comprises ceiling baffles, modular wal… [+2304 chars]",
      },
      {
        source: {
          id: null,
          name: "ReadWrite",
        },
        author: "Deanna Ritchie",
        title: "The Rise of Hydro-tech Farms: Revolutionizing Agriculture",
        description:
          "Growing attention has been paid in recent years to the need for sustainable and novel approaches to agriculture’s age-old problems. Hydro-tech farms are one approach that is gaining popularity as a means to this problem. These farms use state-of-the-art hydro…",
        url: "https://readwrite.com/the-rise-of-hydro-tech-farms-revolutionizing-agriculture/",
        urlToImage:
          "https://images.readwrite.com/wp-content/uploads/2023/06/Untitled-design-2023-06-22T101434.211.jpg",
        publishedAt: "2023-06-23T17:14:54Z",
        content:
          "Growing attention has been paid in recent years to the need for sustainable and novel approaches to agriculture’s age-old problems. Hydro-tech farms are one approach that is gaining popularity as a m… [+4842 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Guardian staff reporter",
        title:
          "Stop the spadework! How no-dig gardening helps the planet – and your back",
        description:
          "It is a sustainable, no-effort technique for cultivating a great green space. Just spread some soil, sit down and let the worms do all the workName: No-dig gardening.Age: Its roots extend back to the midpoint of the 20th century, with adherents in Britain, Ja…",
        url: "https://www.theguardian.com/lifeandstyle/2023/jun/12/stop-the-spadework-how-no-dig-gardening-helps-the-planet-and-your-back",
        urlToImage:
          "https://i.guim.co.uk/img/media/84c88c725efc6354b598ad7c6cd2e6fb184dcc78/0_182_5472_3283/master/5472.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7944780f6584c1dcd1b776ebe90b217e",
        publishedAt: "2023-06-12T15:49:34Z",
        content:
          "Name: No-dig gardening.\r\nAge: Its roots extend back to the midpoint of the 20th century, with adherents in Britain, Japan and Australia.\r\nAppearance: People just doing nothing.\r\nI understand. I dont … [+2261 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Ravinder Bhogal",
        title: "Ravinder Bhogal’s recipes for cooking with fresh sardines",
        description:
          "Sardines are cheap, sustainable and cook in no time, so throw them on the barbecue or griddle pan, turn them into pakoras or slap them on top of Italian tomato bread in these easy summer recipesThere is more to sardines than just toast. While the ones crammed…",
        url: "https://www.theguardian.com/food/2023/jun/10/fresh-sardines-pakora-raita-bruschetta-tomatoes-basil-onion-salad-barbecued-fennel-pickle-zhoug-recipes-ravinder-bhogal",
        urlToImage:
          "https://i.guim.co.uk/img/media/ab2baa77f0263b2432b026240130d230d4eaa5f5/0_734_7469_4481/master/7469.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d9a36461c8ae7e6f833ec95bbb204c9c",
        publishedAt: "2023-06-10T13:00:22Z",
        content:
          "There is more to sardines than just toast. While the ones crammed into tins are an indispensable, store-cupboard ingredient, theres so much to love about fresh sardines, too. They are cheap, sustaina… [+4973 chars]",
      },
      {
        source: {
          id: "abc-news",
          name: "ABC News",
        },
        author: "Ginger Zee, Ivan Pereira",
        title: "College program provides a sustainable move-out option",
        description:
          "A program at Barnard College has collected over 20,000 pounds of discarded dorm items. such as pillows and microwaves, and taken them away from landfills.",
        url: "https://abcnews.go.com/US/college-green-program-shows-give-discarded-items-new/story?id=100231782",
        urlToImage:
          "https://s.abcnews.com/images/US/barnard-college-1-abc-gmh-230620_1687278269039_hpMain_16x9_992.jpg",
        publishedAt: "2023-06-21T00:56:50Z",
        content:
          "As college students leave their campuses behind for a much-needed summer rest, some tend to leave behind the remnants of their dorm life.\r\nBut those used and worn-out pillowcases, lamps and other tri… [+2202 chars]",
      },
      {
        source: {
          id: null,
          name: "Cool Hunting",
        },
        author: "Josh Rubin",
        title: "Vollebak and Bjarke Ingels’ Sustainable Island of the Future",
        description:
          "This off-grid compound is proof-of-concept for how we can live with climate change London-based brand Vollebak conceives of future-forward clothing—like a graphene-based jacket, an invisibility cloak and shirts that can endure for …",
        url: "http://www.coolhunting.com/design/vollebak-and-bjarke-ingels-sustainable-island-of-the-future/",
        urlToImage:
          "https://i0.wp.com/www.coolhunting.com/wp-content/uploads/2023/06/BIG_Adventure_Island_HelloSummerWentOutKayak_www.mir_.no_6c2a4fe3-a304-4bc2-b2aa-1470a07765a9.jpeg?fit=1200%2C675&ssl=1",
        publishedAt: "2023-06-27T01:03:02Z",
        content:
          "This off-grid compound is proof-of-concept for how we can live with climate change\n\n\nRead\nDesign\r\n\n\n\n\n\nVollebak and Bjarke Ingels’ Sustainable Island of the Future\r\n\n\n\nThis off-grid compound is proof… [+5096 chars]",
      },
      {
        source: {
          id: null,
          name: "Cool Hunting",
        },
        author: "Josh Rubin",
        title: "Vollebak and Bjarke Ingels’ Sustainable Island of the Future",
        description:
          "This off-grid compound is proof-of-concept for how we can live with climate change London-based brand Vollebak conceives of future-forward clothing—like a graphene-based jacket, an invisibility cloak and shirts that can endure for 100 years—and now, they’ve d…",
        url: "http://coolhunting.com/design/vollebak-and-bjarke-ingels-sustainable-island-of-the-future/",
        urlToImage:
          "https://i0.wp.com/coolhunting.com/wp-content/uploads/2023/06/BIG_Adventure_Island_HelloSummerWentOutKayak_www.mir_.no_6c2a4fe3-a304-4bc2-b2aa-1470a07765a9.jpeg?fit=1200%2C675&ssl=1",
        publishedAt: "2023-06-21T22:45:39Z",
        content:
          "This off-grid compound is proof-of-concept for how we can live with climate change\nLondon-based brand Vollebak conceives of future-forward clothing—like a graphene-based jacket, an invisibility cloak… [+4884 chars]",
      },
      {
        source: {
          id: null,
          name: "Mystagingwebsite.com",
        },
        author: "Josh Rubin",
        title: "Vollebak and Bjarke Ingels’ Sustainable Island of the Future",
        description:
          "This off-grid compound is proof-of-concept for how we can live with climate change London-based brand Vollebak conceives of future-forward clothing—like a graphene-based jacket, an invisibility cloak and shirts that can endure for 100 years—and now, they’ve d…",
        url: "http://coolhunting.mystagingwebsite.com/design/vollebak-and-bjarke-ingels-sustainable-island-of-the-future/",
        urlToImage:
          "https://i0.wp.com/coolhunting.mystagingwebsite.com/wp-content/uploads/2023/06/BIG_Adventure_Island_HelloSummerWentOutKayak_www.mir_.no_6c2a4fe3-a304-4bc2-b2aa-1470a07765a9.jpeg?fit=1200%2C675&ssl=1",
        publishedAt: "2023-06-21T22:45:39Z",
        content:
          "This off-grid compound is proof-of-concept for how we can live with climate change\nLondon-based brand Vollebak conceives of future-forward clothing—like a graphene-based jacket, an invisibility cloak… [+4884 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Chloë Hamilton",
        title: "Child’s play: how to cut the cost of buying toys in the UK",
        description:
          "From old favourites such as charity shops to borrowing or renting, there are ways to save moneyThe cost of living crisis is putting pressure on every aspect of household finances but children still need toys to play with. However, rather than buying new play …",
        url: "https://www.theguardian.com/money/2023/jun/25/childs-play-how-to-cut-the-cost-of-buying-toys-in-the-uk",
        urlToImage:
          "https://i.guim.co.uk/img/media/23ae35b67d45ad0c4b466eaa4536026f2fd0447e/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ca7cc88f9895ee5d6806b0aed41fbfde",
        publishedAt: "2023-06-25T09:00:32Z",
        content:
          "The cost of living crisis is putting pressure on every aspect of household finances but children still need toys to play with. However, rather than buying new play sets and games, more and more paren… [+5648 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Stephanie McNeal",
        title: "The End of Influencing on Instagram",
        description:
          "Creators are tired of being at the mercy of platforms. What would it take to own their relationship with their audience?",
        url: "https://www.wired.com/story/the-end-of-influencers-on-instagram/",
        urlToImage:
          "https://media.wired.com/photos/64812628da92561daff93b0f/191:100/w_1280,c_limit/ideas_influencers_instagram.jpg",
        publishedAt: "2023-06-08T13:00:00Z",
        content:
          "One put it simply: I think were all getting a little tired of being at the mercy of social media algorithms and want to take control of our content and livelihoods.\r\nTheres someone who agrees with th… [+3150 chars]",
      },
      {
        source: {
          id: null,
          name: "Boing Boing",
        },
        author: "Boing Boing's Shop",
        title:
          "Ahead of Prime Day, get free shipping on this long-range eBike price dropped to under $900",
        description:
          "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\n\n\n\nTL;DR: If you're looking for a more sustainable way to get around town, we have just the solution: an electric bike. …",
        url: "https://boingboing.net/2023/06/30/ahead-of-prime-day-get-free-shipping-on-this-long-range-ebike-price-dropped-to-under-900.html",
        urlToImage:
          "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/06/sale_319291_article_image.jpg?fit=1200%2C800&ssl=1",
        publishedAt: "2023-06-30T15:00:00Z",
        content:
          "We thank our sponsor for making this content possible; it is not written by the editorial staff nor does it necessarily reflect its views.\r\nTL;DR: If you're looking for a more sustainable way to get … [+2274 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Jack McGovan",
        title: "Open-Source Your Blender to Fight Electronic Waste",
        description:
          "Berlin-based Open Funk is tackling throwaway culture with a blender that's as easy to fix as to replace.",
        url: "https://www.wired.com/story/open-source-your-blender-to-fight-electronic-waste/",
        urlToImage:
          "https://media.wired.com/photos/64a3018bc30f50376ee87600/191:100/w_1280,c_limit/Open-Source-Your-Blender-1_reMix%20your%20lifestyle-Business.jpg",
        publishedAt: "2023-07-04T06:00:00Z",
        content:
          "For Paul Anca, repair has always seemed like the obvious and only option. He grew up in Romania in the 1990s and fondly remembers his grandfathers workshopa sort of hospital for saving inanimate obje… [+2782 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Yotam Ottolenghi",
        title:
          "Sea bream and salsa, courgette salad and spiced watermelon: Yotam Ottolenghi’s meal for a sunny day – recipes",
        description:
          "Baked sea bream with red pepper bulgur and coriander salsa, roast courgettes with harissa and yoghurt, and refreshing watermelon with a tangy lime syrup It’s a time of year when I want all my meals to look like a colour wheel. Red and yellow peppers, raw and …",
        url: "https://www.theguardian.com/food/2023/jul/01/summer-recipes-yotam-ottolenghi-sea-bream-salsa-salty-spiced-watermelon-roast-courgettes",
        urlToImage:
          "https://i.guim.co.uk/img/media/bdc5282dd9145f43c4498d08a893df8c91f12f41/150_1575_3805_2281/master/3805.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6d8eaad062037818aadadac6124311c4",
        publishedAt: "2023-07-01T07:00:07Z",
        content:
          "Its a time of year when I want all my meals to look like a colour wheel. Red and yellow peppers, raw and sweet, or meltingly slippery from roasting. Buttery courgettes doused in hot harissa and cooli… [+6237 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Anya Ryan",
        title:
          "Hot in Here review – bike-powered show tells the haunting human stories behind the climate crisis",
        description:
          "Gate theatre, LondonRaw, current and fresh, this three-woman play about the unfair impact of global emissions leaves you fired up and outragedIf we’re judging on ambition alone, then Hot in Here has it all. Bicycle power? Yep. Springy trampolines that the aud…",
        url: "https://www.theguardian.com/stage/2023/jun/11/hot-in-here-review-pigfoot-hetty-hodgson-gate-theatre-london",
        urlToImage:
          "https://i.guim.co.uk/img/media/a4ad61970407ebdb2cadc4da29ebda9cbc7e58af/889_243_5032_3019/master/5032.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctcmV2aWV3LTMucG5n&enable=upscale&s=9a609a5ea0d08a4fa5493098867595ee",
        publishedAt: "2023-06-11T16:05:09Z",
        content:
          "If were judging on ambition alone, then Hot in Here has it all. Bicycle power? Yep. Springy trampolines that the audience can jump on? Yep. Even an energy-generating dancefloor? You bet. This is sust… [+1936 chars]",
      },
      {
        source: {
          id: null,
          name: "ReadWrite",
        },
        author: "Jordan Durham",
        title: "Meet Alma, the AI Assistant for Real Estate Investors",
        description:
          "According to a 2023 PwC report on Emerging Trends in Real Estate, real estate professionals are cautiously optimistic about current market trends, where certain aspects of the industry appear to be returning to pre-pandemic derives. As a result, real estate p…",
        url: "https://readwrite.com/meet-alma-the-ai-assistant-for-real-estate-investors/",
        urlToImage:
          "https://readwrite.com/wp-content/uploads/2023/06/AI-Pillar-Page-Header-v4-1-1.jpg",
        publishedAt: "2023-06-13T19:00:21Z",
        content:
          "According to a 2023 PwC report onEmerging Trends in Real Estate, real estate professionals are cautiously optimistic about current market trends, where certain aspects of the industry appear to be re… [+9007 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Grace Dean",
        title:
          "Dara Khosrowshahi says Uber wants to make it 'absolutely effortless' for drivers – and passengers – to go green",
        description:
          'Uber will give drivers real-time recommendations for when to plug in their EVs based on charge levels and expected demand to beat "charging anxiety."',
        url: "https://www.businessinsider.com/uber-electric-vehicles-evs-sustainability-charging-anxiety-dara-khosrowshahi-2023-6",
        urlToImage:
          "https://i.insider.com/64831b40a460da0019242ebf?width=1200&format=jpeg",
        publishedAt: "2023-06-10T12:17:47Z",
        content:
          "Uber CEO Dara Khosrowshahi.Aaron Chown/Getty Images\r\n<ul>\n<li>Uber unveiled a series of new sustainability measures on Thursday.</li>\n<li>They include giving drivers in-app guidance on when and where… [+4447 chars]",
      },
      {
        source: {
          id: null,
          name: "Blogspot.com",
        },
        author: null,
        title: "Why Nobody Will Do Anything Until It's Too Late",
        description:
          "I like a rousing story as much as anyone else, but systems aren't stories, and confusing the two won't actually fix what's not sustainable ...",
        url: "http://charleshughsmith.blogspot.com/2023/06/this-is-why-nobody-will-do-anything.html",
        urlToImage:
          "https://lh3.googleusercontent.com/blogger_img_proxy/AByxGDSpJQjJfFSCbu_IGVGKj946_xkl2EzU_ywMk2jAwnYucni8xqO2suZS0W8B1p7kIVPolmtLIwQLZNfeRWDAXiV8dUG6XEZd9f63CLYbglG4gogxFJn_zmQ=w1200-h630-p-k-no-nu",
        publishedAt: "2023-06-14T20:25:36Z",
        content:
          "I like a rousing story as much as anyone else, but systems aren't stories, and confusing the two won't actually fix what's not sustainable in the current system's configuration.\r\nOK, I get it: we all… [+13274 chars]",
      },
      {
        source: {
          id: null,
          name: "Android Central",
        },
        author: "tips@androidcentral.com (Vishnu Sarangapurkar)",
        title: "Leaked Fairphone 5 renders showcase a modern design",
        description:
          "Fairphone has been long overdue when it comes to releasing the next iteration of the Fairphone 4, launched two years ago, and we might finally see the successor this year.",
        url: "https://www.androidcentral.com/phones/fairphone-5-renders-leak",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/Z5QzHrBL8QbVNGfRZc4FGM-1200-80.jpg",
        publishedAt: "2023-06-17T17:40:01Z",
        content:
          "<ul><li>Renders of the Fairphone 5 renders show up online, revealing its design.</li><li>The design looks more modern than its predecessor, thanks to the new display.</li><li>We might see a fresh blu… [+2354 chars]",
      },
      {
        source: {
          id: null,
          name: "Yanko Design",
        },
        author: "Srishti Mitra",
        title: "Top 10 sustainable furniture designs to add to your home",
        description:
          "Top 10 sustainable furniture designs to add to your home2020 was a life-altering and drastic year, and 2023 is the year we get to redeem all our careless mistakes of the past and start...",
        url: "https://www.yankodesign.com/2023/06/25/top-10-sustainable-furniture-designs-to-add-to-your-home/",
        urlToImage:
          "https://www.yankodesign.com/images/design_news/2023/06/top-10-sustainable-furniture-designs-to-add-to-your-home/top_10_sustainable_furniture_designs_yanko_design_hero.jpg",
        publishedAt: "2023-06-25T12:10:44Z",
        content:
          "2020 was a life-altering and drastic year, and 2023 is the year we get to redeem all our careless mistakes of the past and start living more consciously and sustainably. We cannot ignore the needs of… [+8957 chars]",
      },
      {
        source: {
          id: null,
          name: "PSFK",
        },
        author: "Piers Fawkes, PSFK",
        title: "Regenerative Eco-Systems Case Study: Patagonia",
        description:
          "Patagonia is a great example of a brand that has embraced regenerative agriculture and other sustainable practices. The company has been a leader in sustainable fashion for years, and has made a commitment to using regenerative agriculture in its supply chain…",
        url: "https://www.psfk.com/2023/06/regenerative-eco-systems-case-study-patagonia.html",
        urlToImage: null,
        publishedAt: "2023-06-07T03:46:56Z",
        content:
          "If you are new to iQ you can schedule a demo and learn more about this opportunity. \r\n PSFK iQ - Where Innovators Turn for Research. Our professional-grade research platform is designed specifically … [+223 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Andrew Liszewski",
        title:
          "Forget Boxes, Ikea’s Experimental Designers Created a Couch That Fits in an Envelope",
        description:
          "Ikea has turned stuffing big things into small packages into an art form with its flat-packed, easy-to-transport furniture. But how far can the company take its obsession with deconstructing furniture? How about a couch that can be carried home from an Ikea s…",
        url: "https://gizmodo.com/ikea-couch-fits-into-envelope-ai-design-1850533663",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/7647962a8535962f1a61093cdb72b3db.jpg",
        publishedAt: "2023-06-13T20:55:02Z",
        content:
          "Ikea has turned stuffing big things into small packages into an art form with its flat-packed, easy-to-transport furniture. But how far can the company take its obsession with deconstructing furnitur… [+2530 chars]",
      },
      {
        source: {
          id: null,
          name: "MarketWatch",
        },
        author: "Willem H. Buiter",
        title: "Project Syndicate: Why U.S. taxes must increase",
        description:
          "Higher taxes rather than lower public spending can put U.S. debt on a safer, more sustainable path",
        url: "https://www.marketwatch.com/story/why-u-s-taxes-must-increase-352b08d1",
        urlToImage: "https://images.mktw.net/im-603898/social",
        publishedAt: "2023-06-29T19:59:00Z",
        content:
          "Now that the brinkmanship over the U.S. federal debt limit has been suspended until January 1, 2025, two major, interdependent fiscal-policy challenges demand attention. First, Americas public debt m… [+6242 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author:
          "Emmanuel Macron, Mia Mottley, Luiz Inácio Lula da Silva, Ursula von der Leyen, Charles Michel, Olaf Scholz, Fumio Kishida, William Ruto, Macky Sall, Cyril Ramaphosa, Mohamed bin Zayed Al Nahyan, Rishi Sunak and Joe Biden",
        title:
          "‘A green transition that leaves no one behind’: world leaders release open letter",
        description:
          "Rishi Sunak, Joe Biden, Emmanuel Macron and other international leaders address development needsWe are urgently working to deliver more for people and the planet. Multiple, overlapping shocks have strained countries’ ability to address hunger, poverty, and i…",
        url: "https://www.theguardian.com/environment/2023/jun/21/a-green-transition-that-leaves-no-one-behind-world-leaders-release-open-letter",
        urlToImage:
          "https://i.guim.co.uk/img/media/da3a2e966c63537aa017958bf563b83cbeed6911/83_498_4606_2764/master/4606.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=f172fb24e6cb1ac33e478148e784b9ea",
        publishedAt: "2023-06-20T23:01:47Z",
        content:
          "We are urgently working to deliver more for people and the planet. Multiple, overlapping shocks have strained countries ability to address hunger, poverty, and inequality, build resilience and invest… [+13224 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Zoe Williams",
        title:
          "Can you wear sweaty gym clothes twice? How to join the no-wash revolution",
        description:
          "If you’re tempted by the thought of doing less laundry, here is everything you need to know, from spot-cleaning to moths to staying odour-freeThere are some great reasons to wash your clothes less frequently – they’ll last longer, it’s good for the environmen…",
        url: "https://www.theguardian.com/lifeandstyle/2023/jun/21/can-you-wear-sweaty-gym-clothes-twice-how-to-join-the-no-wash-revolution",
        urlToImage:
          "https://i.guim.co.uk/img/media/b935c7ec5872a8a23276619d8a27372d34938b56/0_200_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bf7a7915afb6d57fc90158d10a850cde",
        publishedAt: "2023-06-21T09:00:01Z",
        content:
          "There are some great reasons to wash your clothes less frequently theyll last longer, its good for the environment, using a washing machine can be expensive but the main appeal to my mind is that, if… [+10858 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Anna Bisazza",
        title: "Ready to soar: inside a dramatic eco home in Mexico",
        description:
          "With its recycled vaulted steel roof, and reuse of old wooden packing cases, this stunning Mexican home offers lessons in sustainable chicDeep in the Mexican countryside of Valle de Bravo – a lush escape about two hours’ drive from Mexico City – Emiliano Garc…",
        url: "https://www.theguardian.com/lifeandstyle/2023/jun/25/ready-to-soar-inside-a-dramatic-eco-home-in-mexico",
        urlToImage:
          "https://i.guim.co.uk/img/media/6daa9c2db054383dd2c28718960e4a496a17bbc1/125_234_6919_4154/master/6919.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=e42ee862f1ce7b4549f1737d47303e31",
        publishedAt: "2023-06-25T10:00:33Z",
        content:
          "Deep in the Mexican countryside of Valle de Bravo a lush escape about two hours drive from Mexico City Emiliano Garcia and Helene Carlo found the perfect spot to build an eco home. Partners in life a… [+5008 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Ashley Kirk, Pamela Duncan and Pablo Gutiérrez",
        title: "Find out where you can afford to buy or rent in Great Britain",
        description:
          "In nearly half of postcode districts the typical household cannot afford to buy a home, while in others a sustainable rent is out of reach. Use the map below to see where is affordable for you‘This is just ruinous’: the Britons unable to afford their homesMil…",
        url: "https://www.theguardian.com/society/ng-interactive/2023/jun/12/interactive-tool-that-shows-where-you-can-afford-to-buy-or-rent-home-great-britain",
        urlToImage:
          "https://i.guim.co.uk/img/media/f920ede96247ef10c3403f724f87bac6dbb6fddf/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=292439b5802371d003d97dece79d0e58",
        publishedAt: "2023-06-12T06:00:13Z",
        content:
          "Millions of Britons are living in areas where they are either unable to afford a mid-priced property, face a disproportionately high rent, or both, a Guardian analysis reveals.\r\nThe analysis, which i… [+10549 chars]",
      },
      {
        source: {
          id: "the-next-web",
          name: "The Next Web",
        },
        author: "Ioanna Lykiardopoulou",
        title: "8 unmissable highlights of TNW Conference 2023: Day 1",
        description:
          "Drumroll, please! The moment we’ve been waiting for has finally arrived: TNW Conference 2023 is taking place this week, on June 15&16 — and you’re all invited. This year we’re not only going to discover what’s next in tech, but also reclaim the future and joi…",
        url: "https://thenextweb.com/news/8-unmissable-highlights-tnw-conference-2023-day-1",
        urlToImage:
          "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F06%2FUntitled-design-3-6.jpg&signature=87534c2cd8a613794cd307cbd26bb63a",
        publishedAt: "2023-06-12T12:03:31Z",
        content:
          "Drumroll, please! The moment weve been waiting for has finally arrived: TNW Conference 2023 is taking place this week, on June 15&amp;16 and youre all invited.\r\nThis year were not only going to disco… [+5628 chars]",
      },
      {
        source: {
          id: null,
          name: "PSFK",
        },
        author: "Piers Fawkes, PSFK",
        title: "Influencers Get Credible Case Study: Deinfluencers",
        description:
          'The rise of "deinfluencers" is a response to the overconsumption promoted by some influencers and is leading to a more sustainable consumer culture.',
        url: "https://www.psfk.com/2023/06/influencers-get-credible-case-study-deinfluencers.html",
        urlToImage: null,
        publishedAt: "2023-06-07T03:53:07Z",
        content:
          "If you are new to iQ you can schedule a demo and learn more about this opportunity. \r\n PSFK iQ - Where Innovators Turn for Research. Our professional-grade research platform is designed specifically … [+223 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Fiona Harvey Environment editor",
        title:
          "Paris talks to focus on funding poor countries to tackle climate crisis",
        description:
          "World leaders will meet next week to discuss climate finance, green growth, debt and private investmentTalks on a global financial pact that will give poor countries access to funds to help them tackle the climate crisis and develop their economies in environ…",
        url: "https://www.theguardian.com/environment/2023/jun/17/paris-talks-focus-funding-poor-countries-tackle-climate-crisis",
        urlToImage:
          "https://i.guim.co.uk/img/media/fe8e3033432f75ff718eb9454a0a5b5b1573e34a/1994_782_3110_1866/master/3110.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8ee302e81cdc18d00070c71eb11c80ca",
        publishedAt: "2023-06-17T06:00:07Z",
        content:
          "Talks on a global financial pact that will give poor countries access to funds to help them tackle the climate crisis and develop their economies in environmentally sustainable and socially equitable… [+9439 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Diwash Gahatraj",
        title:
          "How India’s ‘millet ambassador’ preserves ancient grains – and helps promote food security",
        description:
          "Laheri Bai’s seed bank ensures traditional grains are kept alive amid a wider effort to promote millet’s suitability for cultivation in challenging climate conditionsCollecting seeds in her mud-walled farmhouse home in central India has pushed Laheri Bai to b…",
        url: "https://www.theguardian.com/global-development/2023/jun/23/india-millet-laheri-bai-ambassador-preserves-ancient-grains-helps-promote-food-security",
        urlToImage:
          "https://i.guim.co.uk/img/media/e46b204903719a0202ff8f4739dba2c253afd7fd/0_400_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ff9526b9a243c12a54714d29f9adabd8",
        publishedAt: "2023-06-23T07:00:31Z",
        content:
          "Collecting seeds in her mud-walled farmhouse home in central India has pushed Laheri Bai to become a farming celebrity. Earlier this year, after Narendra Modi, the prime minister, tweeted he was prou… [+10457 chars]",
      },
      {
        source: {
          id: "the-next-web",
          name: "The Next Web",
        },
        author: "Marris Adikwu",
        title:
          "5 out-of-the-box sustainability ideas: From gelatinized marine waste to seaweed straws",
        description:
          "A new generation of talented and sustainability-focused tech entrepreneurs are already dreaming up innovative ideas to shift our daily habits and tackle climate change. Over the past five years, the Battle of the Minds competition has called on students and r…",
        url: "https://thenextweb.com/news/5-out-of-the-box-sustainability-ideas-from-gelatinized-marine-waste-to-seaweed-straws",
        urlToImage:
          "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F06%2FAdd-a-heading-1.jpg&signature=a468629e773640dd23ab533f84643d5f",
        publishedAt: "2023-06-16T07:37:57Z",
        content:
          "A new generation of talented and sustainability-focused tech entrepreneurs are already dreaming up innovative ideas to shift our daily habits and tackle climate change.\r\nOver the past five years, the… [+4481 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Adam Morton Climate and environment editor",
        title:
          "‘How dare they?’ Swift parrot slowly losing critical habitat as Tasmania logs native forest",
        description:
          "Photographer arrested for trespassing after trying to block felling of gum trees where the rare birds had been seen feeding<ul><li>Get our morning and afternoon news emails, free app or daily news podcast</li></ul>Rob Blakers has been a landscape and wildlife…",
        url: "https://www.theguardian.com/environment/2023/jun/27/how-dare-they-swift-parrot-slowly-losing-critical-habitat-as-tasmania-logs-native-forest",
        urlToImage:
          "https://i.guim.co.uk/img/media/db86251b1bb7f6e145c3d9807ebcd5353861533b/0_52_2048_1229/master/2048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e87558b4b71fdc2da6725a0b400fa7a1",
        publishedAt: "2023-06-27T15:00:39Z",
        content:
          "Rob Blakers has been a landscape and wildlife photographer in Tasmania for more than four decades. He specialises in taking the time to capture images deep within the states wilderness that others wo… [+3783 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Meara Isenberg",
        title:
          "Microsoft Now Lets You Buy Surface Replacement Parts in Its Store - CNET",
        description: "It just got easier to repair Surface devices yourself.",
        url: "https://www.cnet.com/tech/microsoft-now-lets-you-buy-surface-replacement-parts-in-its-store/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/c09830015905fe8ecef6538bb4adff5307235fd6/hub/2023/03/07/a13a21f9-ed0a-4afb-9f52-ebd5e30d9450/microsoft-surface-pro-9.png?auto=webp&fit=crop&height=675&precrop=1499,842,x101,y20&width=1200",
        publishedAt: "2023-06-15T16:26:00Z",
        content:
          'You can now buy replacement components for Microsoft Surface devices in the Microsoft Store. Microsoft said in a blog post Wednesday the move is part of its larger initiative to "expand the options f… [+1162 chars]',
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Phillip Inman",
        title:
          "Macron and world leaders call on private finance to help reduce global poverty",
        description:
          "In lead up to Paris meeting on Thursday, open letter states that government loans and grants not enough to spur development<ul><li>‘A green transition that leaves no one behind’: world leaders release open letter</li></ul>Private finance needs to play a signi…",
        url: "https://www.theguardian.com/world/2023/jun/21/macron-and-world-leaders-call-on-private-finance-to-help-reduce-global-poverty",
        urlToImage:
          "https://i.guim.co.uk/img/media/3d47b5c748491165c0e0b1cc613d5c57053c2e9b/0_85_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=608e0da3097254afb5b53d9d71388d5b",
        publishedAt: "2023-06-20T23:01:46Z",
        content:
          "Private finance needs to play a significant role in supporting global development and reducing poverty by offering cheaper and more flexible loans, according to French president, Emmanuel Macron, and… [+3446 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Nadia Khomami Arts and culture correspondent",
        title:
          "Liverpool demands ‘level playing field’ in race to become ENO’s new home",
        description:
          "City writes to arts secretary amid reports ministers backing Manchester and Birmingham to host English National OperaLiverpool leaders have written to the arts minister, Stephen Parkinson, asking for assurances that the race for the English National Opera’s n…",
        url: "https://www.theguardian.com/music/2023/jun/14/liverpool-demands-level-playing-field-in-race-to-become-english-national-opera-new-home",
        urlToImage:
          "https://i.guim.co.uk/img/media/cfb637cb6b2eb625f36ed25f93600bbffefbca33/0_0_1600_960/master/1600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fa6b3409df7dd1b4916e748f9885cc76",
        publishedAt: "2023-06-14T12:20:51Z",
        content:
          "Liverpool leaders have written to the arts minister, Stephen Parkinson, asking for assurances that the race for the English National Operas next home is a level playing field.\r\nIt comes after reports… [+3484 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Phoebe Weston",
        title:
          "Insect decline a threat to fruit crops and food security, scientists warn MPs",
        description:
          "Poor pollination caused by destructive farming methods leads to loss of biodiversity and is a threat to food production, inquiry toldFruit growers in the UK are already seeing less yield and lower-quality produce because of the loss of insects, scientists hav…",
        url: "https://www.theguardian.com/environment/2023/jun/07/insect-decline-a-threat-to-fruit-crops-and-food-security-scientists-warn-mps-aoe",
        urlToImage:
          "https://i.guim.co.uk/img/media/ff3e5126d6fec2fbba40259b2fa02e8d8aee54cc/0_370_4394_2635/master/4394.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ffaae207b4af171a593817737c236091",
        publishedAt: "2023-06-07T14:45:27Z",
        content:
          "Fruit growers in the UK are already seeing less yield and lower-quality produce because of the loss of insects, scientists have told MPs, warning that a further loss of pollinators could have signifi… [+3515 chars]",
      },
      {
        source: {
          id: null,
          name: "ReadWrite",
        },
        author: "Aaron Heienickle",
        title:
          "The Rise of Walmart Tech: Revolutionizing the Future of Farming",
        description:
          "The landscape of farming is changing rapidly, thanks to advancements in technology. One such company at the forefront of this revolution is Walmart, which has been investing heavily in vertical farming. Walmart’s partnership with the San Francisco-based tech …",
        url: "https://readwrite.com/the-rise-of-walmart-tech-revolutionizing-the-future-of-farming/",
        urlToImage:
          "https://images.readwrite.com/wp-content/uploads/2023/06/Screenshot-2023-06-21-at-10.52.09-AM.jpg",
        publishedAt: "2023-06-22T16:01:30Z",
        content:
          "The landscape of farming is changing rapidly, thanks to advancements in technology. One such company at the forefront of this revolution is Walmart, which has been investing heavily in vertical farmi… [+5508 chars]",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "msmash",
        title: "Intel To Spend $33 Billion in Germany in Landmark Expansion",
        description:
          "Intel will invest more than 30 billion euros ($33 billion) in Germany as part of its expansion push in Europe, the U.S. company said on Monday, marking the biggest investment by a foreign company in Europe's top economy. From a report: The deal to build two l…",
        url: "https://slashdot.org/story/23/06/19/1530256/intel-to-spend-33-billion-in-germany-in-landmark-expansion",
        urlToImage: "https://a.fsdn.com/sd/topics/intel_64.png",
        publishedAt: "2023-06-19T16:00:00Z",
        content:
          "If it's working, the diagnostics say it's fine.\r\nIf it's not working, the diagnostics say it's fine.\r\n- A proposed addition to rules for realtime programming",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Sabina Graves",
        title:
          "Here's a Breakdown of the Ongoing Disney Vs. DeSantis Battle—and the Latest Updates",
        description:
          "As the battle between Disney and Florida Governor Ron DeSantis continues to notch regular updates, anyone who hasn’t been following from the beginning might be a bit confused. Why is this Republican presidential hopeful openly fighting with his state’s bigges…",
        url: "https://gizmodo.com/disney-vs-desantis-florida-feud-background-latest-news-1850583220",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/95b5bccc4a8480a1cd2edeb77ac8cf45.jpg",
        publishedAt: "2023-06-27T23:00:00Z",
        content:
          "As the battle between Disney and Florida Governor Ron DeSantis continues to notch regular updates, anyone who hasnt been following from the beginning might be a bit confused. Why is this Republican p… [+10298 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Perri Ormont Blumberg",
        title:
          "I built a thriving side business without ever having a viral moment. Here’s how I grew my following and secured partnerships with brands like 1-800-Flowers.",
        description:
          "Christopher Griffin is known as Plant Kween to 400,000 followers on Instagram. They've collaborated with Kimpton Hotels, Mrs. Meyers, and Saks Off Fifth.",
        url: "https://www.businessinsider.com/built-side-business-plant-kween-social-media-heres-how-2023-6",
        urlToImage:
          "https://i.insider.com/64920a0865b9ce0018a43a09?width=1200&format=jpeg",
        publishedAt: "2023-06-21T15:00:07Z",
        content:
          "Christopher Griffin.1-800-Flowers.com\r\n<ul>\n<li>Christopher Griffin is known as Plant Kween to more than 400,000 followers on social media.</li>\n<li>Griffin's grandmother inspired them on their plant… [+5451 chars]",
      },
      {
        source: {
          id: null,
          name: "The A.V. Club",
        },
        author: "William Hughes",
        title:
          'Artists say Spider-Verse working conditions are "not sustainable"',
        description:
          "A new report out of Vulture today—featuring anonymous interviews with four animators who worked on, and then departed, Sony’s Spider-Man: Across The Spider-Verse over the last few years of production—alleges that working conditions on the celebrated animated …",
        url: "https://www.avclub.com/artists-say-spider-verse-working-conditions-are-not-su-1850572775",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d74508b088d8e1ac4d7ee84a7fc30cc8.png",
        publishedAt: "2023-06-24T00:46:00Z",
        content:
          "A new report out of Vulture todayfeaturing anonymous interviews with four animators who worked on, and then departed, Sonys Spider-Man: Across The Spider-Verseover the last few years of productionall… [+3900 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Pete Syme",
        title:
          "I'm a private jet broker who arranges $500,000 honeymoon flights and $60,000 pet rescues",
        description:
          "Dan Cook is sales director for private jet charter company Victor. It arranges flights for celebs and royals, but some go private for other reasons.",
        url: "https://www.businessinsider.com/private-jet-broker-arranges-500k-honeymoon-flights-60k-pet-rescues-2023-6",
        urlToImage:
          "https://i.insider.com/6479f39b06699900194c888e?width=1200&format=jpeg",
        publishedAt: "2023-06-04T12:45:20Z",
        content:
          "A Gulfstream jet and Dan Cook, director of sales at Victor.RyanFletcher/Getty Images; Victor\r\n<ul>\n<li>Dan Cook is the director of sales at Victor, a private jet charter company.</li>\n<li>He's arrang… [+5291 chars]",
      },
      {
        source: {
          id: null,
          name: "Yanko Design",
        },
        author: "Ida Torres",
        title:
          "Three-sided coin gets people thinking about ethical and sustainable banking",
        description:
          "Three-sided coin gets people thinking about ethical and sustainable bankingSometimes, a coin is just a coin, something that you need to pay for things and to actually live. Sometimes, it can also be something...",
        url: "https://www.yankodesign.com/2023/06/26/three-sided-coin-gets-people-thinking-about-ethical-and-sustainable-banking/",
        urlToImage:
          "https://www.yankodesign.com/images/design_news/2023/06/three-sided-coin-gets-people-thinking-about-ethical-and-sustainable-banking/1.jpg",
        publishedAt: "2023-06-26T16:20:06Z",
        content:
          "Sometimes, a coin is just a coin, something that you need to pay for things and to actually live. Sometimes, it can also be something that can make you think about other things, like how that item yo… [+1736 chars]",
      },
      {
        source: {
          id: null,
          name: "Yanko Design",
        },
        author: "JC Torres",
        title:
          "How this personal air conditioner brings comfortable and sustainable ways to keep you cool",
        description:
          "How this personal air conditioner brings comfortable and sustainable ways to keep you coolOur summers seem to get hotter by the year, so it’s not surprising to see the desire for more efficient cooling solutions to also heat...",
        url: "https://www.yankodesign.com/2023/06/24/how-this-personal-air-conditioner-brings-comfortable-and-sustainable-ways-to-keep-you-cool/",
        urlToImage:
          "https://www.yankodesign.com/images/design_news/2023/06/this_personal_air_conditioner_keeps_you_cool_hero.jpg",
        publishedAt: "2023-06-25T00:45:57Z",
        content:
          "Our summers seem to get hotter by the year, so it’s not surprising to see the desire for more efficient cooling solutions to also heat up. Typical air conditioning units can keep a whole room cool, b… [+3137 chars]",
      },
      {
        source: {
          id: null,
          name: "Yanko Design",
        },
        author: "Srishti Mitra",
        title:
          "Colorful + sustainable pieces of furniture can be used as coffee tables, side tables and stools",
        description:
          "Colorful + sustainable pieces of furniture can be used as coffee tables, side tables and stoolsI believe that the secret to a great living room is an excellent coffee table. Coffee tables function as the centerpiece of a living room,...",
        url: "https://www.yankodesign.com/2023/06/29/colorful-sustainable-pieces-of-furniture-can-be-used-as-coffee-tables-side-tables-and-stools/",
        urlToImage:
          "https://www.yankodesign.com/images/design_news/2023/06/superpop-tables/superpop_tables_yanko_design_01.jpg",
        publishedAt: "2023-06-29T19:15:39Z",
        content:
          "I believe that the secret to a great living room is an excellent coffee table. Coffee tables function as the centerpiece of a living room, hence you need to pick one that truly livens it up, and sets… [+1999 chars]",
      },
      {
        source: {
          id: null,
          name: "Yanko Design",
        },
        author: "Tanvi Joshi",
        title:
          "How this sensorial playpad focuses on sustainable design to adapt with your growing child",
        description:
          "How this sensorial playpad focuses on sustainable design to adapt with your growing childFor all the parents and caregivers out there, if you’re looking for a game-changer in the world of play mats, then you’re in for a...",
        url: "https://www.yankodesign.com/2023/07/02/how-this-sensorial-playpad-focuses-on-sustainable-design-to-adapt-with-your-growing-child/",
        urlToImage:
          "https://www.yankodesign.com/images/design_news/2023/05/spend-some-shared-play-moments-with-your-kids-with-this-sensorial-playpad/StokkePlayPad_productdesign_kids_10.jpg",
        publishedAt: "2023-07-02T20:45:27Z",
        content:
          "For all the parents and caregivers out there, if you’re looking for a game-changer in the world of play mats, then you’re in for a treat. Let’s dive into the wonderful world of the Stokke PlayPad, a … [+3874 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "jma@insider.com (Jason Ma)",
        title:
          "Nvidia is the top AI pick and the stock could jump 15% as demand has picked up since the chip maker's blockbuster earnings report, Morgan Stanley says",
        description:
          '"While we have been positive since upgrading the stock earlier in the year, we were nowhere near as optimistic as we should have been."',
        url: "https://markets.businessinsider.com/news/stocks/nvidia-stock-price-outlook-artificial-intelligence-ai-investing-nvda-amd-2023-6",
        urlToImage:
          "https://i.insider.com/648c82b020f78100189fc8db?width=1200&format=jpeg",
        publishedAt: "2023-06-16T16:18:27Z",
        content:
          "Nvidia stock has more room to climb as demand has only picked up since the chipmaker's blockbuster earnings report last month, Morgan Stanley said.\r\nAnalysts raised their price target on Nvidia, whic… [+1896 chars]",
      },
      {
        source: {
          id: "new-scientist",
          name: "New Scientist",
        },
        author: "Chen Ly",
        title:
          "Solar-powered fuel cell recycles plastic waste and carbon dioxide",
        description:
          "By combining a solar fuel cell that converts carbon dioxide into fuel with a plastic recycling system, researchers can create sustainable fuels and useful chemicals",
        url: "https://www.newscientist.com/article/2378863-solar-powered-fuel-cell-recycles-plastic-waste-and-carbon-dioxide/",
        urlToImage:
          "https://images.newscientist.com/wp-content/uploads/2023/06/19132015/SEI_160850137.jpg",
        publishedAt: "2023-06-19T16:00:06Z",
        content:
          "The device captures carbon from air and recycles waste plastic\r\nAriffin Mohamad Annuar\r\nA solar-powered device could help remove carbon dioxide from the air and convert plastic waste into sustainable… [+2497 chars]",
      },
      {
        source: {
          id: null,
          name: "Worldsensorium.com",
        },
        author: null,
        title: "Exploring the Vibrant World of Indigo",
        description:
          "Indigo (Indigofera tinctoria) flowers and leaves. Pancrat, CC BY-SA 3.0 , via Wikimedia Commons Exploring the Vibrant World of Indigo: History, Controversies, and Sustainable Solutions By Karen Bauer Sign up for our monthly newsletter! Colors influence our fe…",
        url: "https://worldsensorium.com/exploring-the-vibrant-world-of-indigo-history-controversies-and-sustainable-solutions/",
        urlToImage: "http://img.youtube.com/vi/sDQ6p9M9gdU/maxresdefault.jpg",
        publishedAt: "2023-07-02T12:32:30Z",
        content:
          "Earliest surviving piece of fabric with indigo dye was found in 2007 in Huaca Prieta, now Peru.\r\nIndus Valley now India and Pakistan-Indigo called nila, meaning dark blue.\r\nTextiles pigmented using i… [+18520 chars]",
      },
      {
        source: {
          id: null,
          name: "Yanko Design",
        },
        author: "Ida Torres",
        title:
          "Absolut Vodka goes green with a test-run for recyclable paper-based bottles",
        description:
          "Absolut Vodka goes green with a test-run for recyclable paper-based bottlesWe’re seeing a lot of brands and products experiment with their packaging. To become more eco-friendly and sustainable, a lot of product designers have been...",
        url: "https://www.yankodesign.com/2023/06/15/absolut-vodka-goes-green-with-a-test-run-for-recyclable-paper-based-bottles/",
        urlToImage:
          "https://www.yankodesign.com/images/design_news/2023/06/absolut-vodka-goes-green-with-a-test-run-for-paper-based-bottles/Absolute-vodka_paper_eco-friendly_hero.jpg",
        publishedAt: "2023-06-15T11:40:40Z",
        content:
          "We’re seeing a lot of brands and products experiment with their packaging. To become more eco-friendly and sustainable, a lot of product designers have been using materials that can be recycled and c… [+1699 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Ryan Hogg",
        title:
          "Jack Ma appears at an Alibaba event in China days after an executive says he's 'alive' and 'happy'",
        description:
          "The Alibaba founder appeared at a math contest in Hangzhou, where the company is based, after starting his university teaching role last week.",
        url: "https://www.businessinsider.com/jack-ma-appears-alibaba-event-exec-says-hes-alive-happy-2023-6",
        urlToImage:
          "https://i.insider.com/648ed1fe51ea980019d6c301?width=1200&format=jpeg",
        publishedAt: "2023-06-18T11:20:14Z",
        content:
          "Jack Ma founded Alibaba.Yuya Shino/Reuters\r\n<ul>\n<li>Jack Ma resurfaced at a math competition sponsored by Alibaba, Bloomberg reported.</li>\n<li>He withdrew from public life in 2020 after criticizing… [+1551 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Beatrice Nolan",
        title:
          "Canada is launching a remote-work scheme to lure digital nomads to the country",
        description:
          "Under current Canadian immigration rules, digital nomads can stay in the country for up to six months under a visitor status.",
        url: "https://www.businessinsider.com/digital-nomad-canada-remote-work-scheme-2023-6",
        urlToImage:
          "https://i.insider.com/649eb894fd8a3e001912112a?width=1200&format=jpeg",
        publishedAt: "2023-06-30T12:18:02Z",
        content:
          "Canada is developing a scheme to attract digital nomads to the country.Walter Bibikow/Getty Images\r\n<ul>\n<li>Canada is developing a scheme to attract digital nomads to the country.</li>\n<li>Under cur… [+1820 chars]",
      },
      {
        source: {
          id: null,
          name: "Boing Boing",
        },
        author: "Rob Beschizza",
        title:
          "Facebook blocks links to Canadian media after law passed requiring them to pay",
        description:
          "After Canada's Senate passed a law mandating that social media sites pay news sources a license fee whenever links to articles are posted there, Facebook has blocked users from doing so. The block, covering various Canadian news media, extends to Instagram. —…",
        url: "https://boingboing.net/2023/06/24/facebook-blocks-links-to-canadian-media-after-law-passed-requiring-them-to-pay.html",
        urlToImage:
          "https://i0.wp.com/boingboing.net/wp-content/uploads/2018/02/canada_flag_country_canadian_red_photo_free_image_royalty_free-634249.jpg?fit=640%2C480&ssl=1",
        publishedAt: "2023-06-24T17:05:56Z",
        content:
          "After Canada's Senate passed a law mandating that social media sites pay news sources a license fee whenever links to articles are posted there, Facebook has blocked users from doing so. The block, c… [+954 chars]",
      },
      {
        source: {
          id: null,
          name: "VentureBeat",
        },
        author: "Ofer Familier, GlossAi",
        title:
          "The moat paradox: Rediscovering competitive advantage for AI success",
        description:
          "With the right vision, agility and execution, businesses can build rich AI offerings and compete head-to-head with market leaders.",
        url: "https://venturebeat.com/ai/the-moat-paradox-rediscovering-competitive-advantage-for-ai-success/",
        urlToImage:
          "https://venturebeat.com/wp-content/uploads/2023/06/annevb_a_moat_around_a_unicorn_growing_up_from_swirling_lights__a65a8241-7964-4374-b5cd-f7cd52fe76b7.png?w=1200&strip=all",
        publishedAt: "2023-06-24T16:10:00Z",
        content:
          "Join top executives in San Francisco on July 11-12, to hear how leaders are integrating and optimizing AI investments for success. Learn More\r\nBuilding a pure technology moat has become challenging s… [+1343 chars]",
      },
      {
        source: {
          id: null,
          name: "Springwise.com",
        },
        author: "Hannah Hudson",
        title: "A marketplace for sustainable video content",
        description:
          "A new video advertising platform focuses on supporting sustainable content\nThe post A marketplace for sustainable video content appeared first on Springwise.",
        url: "https://www.springwise.com/innovation/advertising-marketing/a-marketplace-for-sustainable-video-content/",
        urlToImage:
          "https://www.springwise.com/wp-content/uploads/2023/06/innovationadvertising-marketinga-marketplace-for-sustainable-video-content.png",
        publishedAt: "2023-06-19T04:55:00Z",
        content:
          "Spotted: We dont tend to think of video as emitting carbon, but the reality is that every hour of streaming video emits around 55 grammes of CO2 equivalent, according to Carbon Trust. That may not se… [+1590 chars]",
      },
      {
        source: {
          id: "time",
          name: "Time",
        },
        author: "TIME PR",
        title:
          "TIME CO2 Announces Strategic Advisory Council of Global Climate Experts and Sustainability Leaders",
        description:
          "TIME CO2 announced a new advisory council of climate experts and sustainability leaders to help guide companies on their climate journeys.",
        url: "https://time.com/6286956/time-co2-announces-strategic-advisory-council/",
        urlToImage:
          "https://api.time.com/wp-content/uploads/2023/04/2023-TIMECO2-Hero-RGB-Mono.png?w=1200&h=628&crop=1",
        publishedAt: "2023-06-14T13:00:39Z",
        content:
          "(New York, NY – June 14, 2023) Today, TIME CO2, the climate action platform and sustainability division of TIME, announced a new advisory council of prominent climate experts and sustainability leade… [+4923 chars]",
      },
      {
        source: {
          id: null,
          name: "Springwise.com",
        },
        author: "Lisa Magloff",
        title: "Sunlight turns CO2 directly into sustainable chemicals",
        description:
          "A scalable process uses microbes as mini factories to produce chemicals without fossil fuels\nThe post Sunlight turns CO2 directly into sustainable chemicals appeared first on Springwise.",
        url: "https://www.springwise.com/innovation/manufacturing/sunlight-turns-co2-directly-into-sustainable-chemicals/",
        urlToImage:
          "https://www.springwise.com/wp-content/uploads/2023/06/innovationmanufacturingsunlight-turns-CO2-directly-into-sustainable-chemicals.png",
        publishedAt: "2023-06-05T04:55:00Z",
        content:
          "Spotted: According to the International Energy Agency (IEA), the chemical sector is one of the largest industry subsectors in terms of direct CO2 emissions. These emissions largely come from fuel tha… [+1350 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Fiona Harvey Environment editor",
        title:
          "Climate crisis-hit poor countries should have debt relief, says IMF chief",
        description:
          "Exclusive: Kristalina Georgieva calls for ‘debt for climate swaps’ and more finance for poor countriesPoor countries hit by climate disaster should not be forced to struggle with crippling debt payments, the head of the International Monetary Fund has urged b…",
        url: "https://www.theguardian.com/environment/2023/jun/20/climate-crisis-hit-poor-countries-should-have-debt-relief-says-imf-chief",
        urlToImage:
          "https://i.guim.co.uk/img/media/0661f22fe3cf9a98ccf71c323608d45abffe9315/0_186_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=fc6d2cfd94e319986f75489dad4973b4",
        publishedAt: "2023-06-20T11:06:35Z",
        content:
          "Poor countries hit by climate disaster should not be forced to struggle with crippling debt payments, the head of the International Monetary Fund has urged before a global summit on climate finance.\r… [+4829 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Senay Boztas in Barneveld",
        title:
          "Farmers on frontline as Dutch divided by war on nitrogen pollution",
        description:
          "Government’s buyout scheme is meeting fierce resistance from farmers in NetherlandsVeal farmer Wim Brouwer sits on his terrace, an “emergency” red flag flying outside and his laptop open on a page revealing he is one of the Netherlands’ peak polluters, due to…",
        url: "https://www.theguardian.com/environment/2023/jun/25/farmers-on-frontline-as-dutch-divided-by-war-on-nitrogen-pollution",
        urlToImage:
          "https://i.guim.co.uk/img/media/ed8aa1133e6040f82479297cdbd7500a33bb1229/0_470_6312_3787/master/6312.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=84a3af3e5c99ee9de8e5f699a298321f",
        publishedAt: "2023-06-25T09:21:56Z",
        content:
          "Veal farmer Wim Brouwer sits on his terrace, an emergency red flag flying outside and his laptop open on a page revealing he is one of the Netherlands peak polluters, due to the nitrogen excreted eac… [+5630 chars]",
      },
      {
        source: {
          id: null,
          name: "XDA Developers",
        },
        author: "Joe Rice-Jones",
        title: "Framework Laptop (2023) vs Dell XPS 13 Plus: Rough or ready?",
        description:
          "Framework has one of the most sustainable laptops around, while the XPS 13 Plus has years of refinement. Which one appeals to you?",
        url: "https://www.xda-developers.com/framework-laptop-2023-vs-dell-xps-13-plus/",
        urlToImage:
          "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/04/new_project__2___1_-removebg-preview-1.png",
        publishedAt: "2023-07-03T23:00:20Z",
        content:
          "<ul><li> Framework Laptop 13 \r\nThe Framework Laptop 13 is one of the most modular laptops you can buy in 2023. You can swap out all the components right down to the mainboard. New on this year's mode… [+10107 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Tom Phillips and Ana Ionova in Belém",
        title:
          "Amazon facing ‘urgent’ drug crisis after gutting of protections, says narcotics chief",
        description:
          "Brazilian government warning comes as UN report says that flourishing organized crime groups are driving a boom in environmental devastation The Brazilian government’s drug policy chief has admitted that the rapid advance of drug factions into the Amazon rain…",
        url: "https://www.theguardian.com/world/2023/jun/28/organized-crime-drives-environmental-amazon-devastation",
        urlToImage:
          "https://i.guim.co.uk/img/media/e75fe7094d168e8a3fcc8f929b4222f6efb809a3/0_18_3375_2025/master/3375.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5cfda4cee14508debceb1ad367e2ca63",
        publishedAt: "2023-06-28T09:30:01Z",
        content:
          "The Brazilian governments drug policy chief has admitted that the rapid advance of drug factions into the Amazon rainforest has produced a a very difficult situation in the region, as a UN report war… [+5773 chars]",
      },
      {
        source: {
          id: null,
          name: "CNET",
        },
        author: "Katie Collins",
        title:
          "How Uber Plans to Slash the Carbon Footprint of Your Food Deliveries and Rides - CNET",
        description: "Cleaner rides, greener eats, a happier planet.",
        url: "https://www.cnet.com/tech/services-and-software/how-uber-plans-to-slash-the-carbon-footprint-of-your-food-deliveries-and-rides/",
        urlToImage:
          "https://www.cnet.com/a/img/resize/20e3380deb36e36ec4bdd62c8e0b5f1aa21dd299/hub/2023/06/08/cd1cd9ee-a48d-467b-a889-029604dfda6d/gettyimages-1250111172.jpg?auto=webp&fit=crop&height=675&width=1200",
        publishedAt: "2023-06-08T15:22:00Z",
        content:
          "Your Friday post-work Uber Eats order is going to get a whole lot greener and we don't necessarily mean in the healthy food sense. Uber on Thursday announced a slew of product updates, all designed t… [+5489 chars]",
      },
      {
        source: {
          id: null,
          name: "Space.com",
        },
        author: "Robert Lea",
        title:
          "NASA, US Air Force unveil new X-plane — the X-66A — to test wild wing design for fuel-efficient flight",
        description:
          "NASA and Boeing's sustainable single-aisled plane has received an X-plane designation as it prepares to test technology that could reduce fuel consumption and greenhouse emissions.",
        url: "https://www.space.com/nasa-us-air-force-new-x-plane-x66a-named",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/F55ZzuUjBKSCHqethkdHHn-1200-80.jpg",
        publishedAt: "2023-06-13T10:00:00Z",
        content:
          "NASA's latest experimental X-plane has received a name. \r\nThe United States Air Force has designated the plane, designed in conjunction with Boeing through NASA's Sustainable Flight Demonstrator proj… [+3975 chars]",
      },
      {
        source: {
          id: null,
          name: "Space.com",
        },
        author: "brett.tingley@futurenet.com (Brett Tingley)",
        title:
          "India and Ecuador sign Artemis Accords for peaceful moon exploration",
        description:
          "India and Ecuador both signed the Artemis Accords this week, bringing the total number of countries that have agreed to sustainable and peaceful space exploration to 27.",
        url: "https://www.space.com/artemis-accords-india-ecuador-peaceful-moon-exploration",
        urlToImage:
          "https://cdn.mos.cms.futurecdn.net/LVSn5tWQQqK3u6JNjwc7dY-1200-80.jpg",
        publishedAt: "2023-06-23T10:00:01Z",
        content:
          "India and Ecuador both signed the Artemis Accords this week, bringing the total number of countries that have agreed to sustainable and peaceful space exploration to 27.\r\nThe Artemis Accords\r\n, which… [+3516 chars]",
      },
      {
        source: {
          id: null,
          name: "PSFK",
        },
        author: "Piers Fawkes, PSFK",
        title: "Purposeful Fashion Case Study: H&M Group",
        description:
          "H&M Group’s launch of Untitled Lab is a case study that exemplifies purposeful fashion, as the brand development studio focuses on helping fashion brands embrace a holistic approach to talent branding centered around purpose. Untitled Lab celebrates purpose-d…",
        url: "https://www.psfk.com/2023/06/purposeful-fashion-case-study-hm-group.html",
        urlToImage: null,
        publishedAt: "2023-06-07T14:09:14Z",
        content:
          "If you are new to iQ you can schedule a demo and learn more about this opportunity. \r\n PSFK iQ - Where Innovators Turn for Research. Our professional-grade research platform is designed specifically … [+223 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Mathew Lawrence",
        title:
          "The wretched state of Thames Water is one of the best arguments for public ownership we have | Adrienne Buller",
        description:
          "Water privatisation in England and Wales has achieved just one thing: the enrichment of executives and overseas shareholdersThames Water is on the brink of collapse, with emergency plans being drawn up to take the company into temporary public ownership. It’s…",
        url: "https://www.theguardian.com/commentisfree/2023/jun/28/thames-water-public-ownership-water-privatisation-england-and-wales-executives-shareholders",
        urlToImage:
          "https://i.guim.co.uk/img/media/277fa50247d2f4d64a1b9393ca8aa40cc0b14480/0_0_4800_2880/master/4800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=5744b206f302c144b4c9e08ed6c17011",
        publishedAt: "2023-06-28T16:05:55Z",
        content:
          "Thames Water is on the brink of collapse, with emergency plans being drawn up to take the company into temporary public ownership. Its an extraordinary state of affairs: how could a business with a r… [+4167 chars]",
      },
      {
        source: {
          id: null,
          name: "AppleInsider",
        },
        author: "news@appleinsider.com (William Gallagher)",
        title:
          "Jony Ive's latest gig is the seal for King Charles's space project",
        description:
          "An \"Astra Carta\" seal has been designed by Jony Ive's LoveFrom firm for the UK's King Charles, and aimed at being a call to action for private firms in space-related industries.Source: Sustainable Markets InitiativeIve previously designed the royal emblem for…",
        url: "https://appleinsider.com/articles/23/06/28/jony-ives-latest-gig-is-the-seal-for-king-charless-space-project",
        urlToImage:
          "https://photos5.appleinsider.com/gallery/55144-111948-000-lead-Astra-Carta-xl.jpg",
        publishedAt: "2023-06-28T13:56:11Z",
        content:
          "Source: Sustainable Markets Initiative\r\nAn \"Astra Carta\" seal has been designed by Jony Ive's LoveFrom firm for the UK's King Charles, and aimed at being a call to action for private firms in space-r… [+1638 chars]",
      },
      {
        source: {
          id: null,
          name: "Golem.de",
        },
        author: "Golem Karrierewelt",
        title: "Anzeige: Green IT im Unternehmen - Webinar zum Nachschauen",
        description:
          "Sustainable-IT-Experte Yannick Hirt diskutiert Aspekte, die bei der Einführung von Green-IT-Initiativen im Unternehmen wichtig sind. Und: Green IT-Kurs mit 25 Prozent Rabatt! (Golem Karrierewelt, GreenIT)",
        url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fanzeige-green-it-im-unternehmen-webinar-zum-nachschauen-2306-174815.html&referer=https%3A%2F%2Ft.co%2F011d0775a9",
        urlToImage: null,
        publishedAt: "2023-06-09T14:00:02Z",
        content:
          "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
      },
      {
        source: {
          id: null,
          name: "HYPEBEAST",
        },
        author: "info@hypebeast.com (Hypebeast)",
        title:
          'young n sang Collaborates With Kering on Sustainable Handwoven "Album" Collection',
        description:
          'Following its "PERMAFROST" collection inspired by the indigenous people of the Arctic, young n sang has now returned with its latest sustainable handwoven collection. Collaborating with Kering group and shown in Pitti, Italy, the "Album" collection saw mentor…',
        url: "https://hypebeast.com/2023/6/young-n-sang-sustainable-handwoven-album-collection-kering-info",
        urlToImage:
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Fyoung-n-sang-sustainable-handwoven-collection-kering-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
        publishedAt: "2023-06-21T06:42:19Z",
        content:
          "Following its “PERMAFROST” collection inspired by the indigenous people of the Arctic, young n sang has now returned with its latest sustainable handwoven collection. Collaborating with Kering\r\n grou… [+1351 chars]",
      },
      {
        source: {
          id: null,
          name: "VentureBeat",
        },
        author: "Florian Douetteau, Dataiku",
        title:
          "How businesses can break through the ChatGPT hype with ‘workable AI’",
        description:
          "Creating AI applications that provide a step-change in user experience and business performance will be essential for Workable AI.",
        url: "https://venturebeat.com/ai/how-businesses-can-break-through-the-chatgpt-hype-with-workable-ai/",
        urlToImage:
          "https://venturebeat.com/wp-content/uploads/2023/07/annevb_turning_data_into_products._Colorful_futuristic_tech_730862fd-2fe6-442c-8509-f73523c48d0e.png?w=1200&strip=all",
        publishedAt: "2023-07-01T16:10:00Z",
        content:
          "Join top executives in San Francisco on July 11-12 and learn how business leaders are getting ahead of the generative AI revolution. Learn More\r\nNew products like ChatGPT have captivated the public, … [+1374 chars]",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "BeauHD",
        title: "Niantic Lays Off 230 Employees, Cancels NBA and Marvel Games",
        description:
          "An anonymous reader quotes a report from TechCrunch: Pokemon GO maker Niantic laid off 230 employees today, just one year after it laid off around 90 employees. During last year's layoffs, Niantic canceled four projects, including a Transformers game. Some Ni…",
        url: "https://games.slashdot.org/story/23/06/30/221232/niantic-lays-off-230-employees-cancels-nba-and-marvel-games",
        urlToImage: "https://a.fsdn.com/sd/topics/business_64.png",
        publishedAt: "2023-07-01T00:02:00Z",
        content:
          "Pokemon GO maker Niantic laid off 230 employees today, just one year after it laid off around 90 employees. During last year's layoffs, Niantic canceled four projects, including a Transformers game. … [+1992 chars]",
      },
      {
        source: {
          id: null,
          name: "Boing Boing",
        },
        author: "Jennifer Sandlin",
        title: "Watch a kind human transport a sloth to safety",
        description:
          "I never tire of watching sloths getting transported to safety when they're trying—oh so slowly, and oh so dangerously—to cross a road. The rescue captured in this video features Dayber, a climber and drone pilot who works at The Sloth Conservation Foundation …",
        url: "https://boingboing.net/2023/06/10/watch-a-kind-human-transport-a-sloth-to-safety.html",
        urlToImage:
          "https://i0.wp.com/boingboing.net/wp-content/uploads/2022/08/shutterstock_714565612.jpg?fit=1200%2C800&ssl=1",
        publishedAt: "2023-06-10T09:17:00Z",
        content:
          "I never tire of watching sloths getting transported to safety when they're tryingoh so slowly, and oh so dangerouslyto cross a road. The rescue captured in this video features Dayber, a climber and d… [+1756 chars]",
      },
      {
        source: {
          id: null,
          name: "Slashdot.org",
        },
        author: "BeauHD",
        title:
          "McKinsey Report Finds Generative AI Could Add Up To $4.4 Trillion a Year To the Global Economy",
        description:
          'According to global consulting leader McKinsey and Company, Generative AI could add "2.6 trillion to $4.4 trillion annually" to the global economy. That\'s almost the "economic equivalent of adding an entire new country the size and productivity of the United …',
        url: "https://tech.slashdot.org/story/23/06/14/2116211/mckinsey-report-finds-generative-ai-could-add-up-to-44-trillion-a-year-to-the-global-economy",
        urlToImage: "https://a.fsdn.com/sd/topics/ai_64.png",
        publishedAt: "2023-06-14T23:20:00Z",
        content:
          "The $2.6 trillion to $4.4 trillion economic impact figure marks a huge increase over McKinsey's previous estimates of the AI field's impact on the economy from 2017, up 15 to 40% from before. This up… [+2069 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Graham Rapier",
        title:
          "Tesla Gigafactories: A look at the manufacturing hubs and their future",
        description:
          "Here's a look at Tesla's Gigafactory network and the expansion plans for the facilities that produce batteries for the company's electric vehicles.",
        url: "https://www.businessinsider.com/tesla-gigafactory",
        urlToImage:
          "https://i.insider.com/62e96ffe57dd3c0018dc1570?width=1200&format=jpeg",
        publishedAt: "2023-06-27T19:10:05Z",
        content:
          "A Tesla Gigafactory in Nevada.Tesla\r\n<ul>\n<li>Tesla currently has five massive Gigafactories building batteries and electric vehicles.</li>\n<li>The company also has plans to build a sixth Gigafactory… [+4205 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Zahra Tayeb",
        title:
          "Nvidia stock extends its blistering rally to 200%, adding an eye-watering $723 billion in market value as AI frenzy continues",
        description:
          "The company's share price has surged nearly 200% this year as investors laser-eye companies best fit to take advantage of an AI boom.",
        url: "https://markets.businessinsider.com/news/stocks/nvidia-extends-blistering-rally-artificial-intelligence-frenzy-continues-2023-6",
        urlToImage:
          "https://i.insider.com/6478ab19085acb0018ff252c?width=1200&format=jpeg",
        publishedAt: "2023-06-21T11:41:54Z",
        content:
          "Jensen Huang, CEO of Nvidia, reacts to a video at his keynote address at CES in Las Vegas, Nevada, U.S. January 7, 2018.Rick Wilking/Reuters\r\n<ul>\n<li>Nvidia's stunning stock rally has hit a new mile… [+2055 chars]",
      },
      {
        source: {
          id: null,
          name: "Yanko Design",
        },
        author: "Tanvi Joshi",
        title:
          "This greenhouse works as a micro climate for growing plants to encourage the farm to table practice",
        description:
          "This greenhouse works as a micro climate for growing plants to encourage the farm to table practiceWe have always been pestered to live sustainably with the rising climatic concerns coming into light. In the quest for sustainable living and harmonious coexist…",
        url: "https://www.yankodesign.com/2023/06/13/this-greenhouse-works-as-a-micro-climate-for-growing-plants-to-encourage-the-farm-to-table-practice/",
        urlToImage:
          "https://www.yankodesign.com/images/design_news/2023/06/live-in-this-greenhouse-and-bloom-into-a-sustainable-plant/Livablegreenhouse_architecture_sustainble_11.jpg",
        publishedAt: "2023-06-13T19:15:29Z",
        content:
          "We have always been pestered to live sustainably with the rising climatic concerns coming into light. In the quest for sustainable living and harmonious coexistence with nature, innovative architectu… [+5139 chars]",
      },
      {
        source: {
          id: null,
          name: "Yanko Design",
        },
        author: "JC Torres",
        title:
          "This advanced e-bike helmet delivers full-head protection that looks and feels great, too",
        description:
          "This advanced e-bike helmet delivers full-head protection that looks and feels great, tooE-bikes, electric scooters, one-wheelers, and e-skates have become options for people who want a different and more sustainable way to travel. While e-scooters make short…",
        url: "https://www.yankodesign.com/2023/06/25/this-advanced-e-bike-helmet-delivers-full-head-protection-that-looks-and-feels-great-too/",
        urlToImage:
          "https://www.yankodesign.com/images/design_news/2023/06/this-advanced-e-bike-helmet-delivers-full-head-protection-that-looks-and-feels-great-too/this_cycling_helmet_is_a_game_changer_with_full_face_protection_hero.jpg",
        publishedAt: "2023-06-26T01:45:54Z",
        content:
          "E-bikes, electric scooters, one-wheelers, and e-skates have become options for people who want a different and more sustainable way to travel. While e-scooters make short work of “last mile” distance… [+3947 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Isobel van Hagen",
        title:
          "Ireland will pay people up to $92,000 to move to idyllic remote islands — but there are a few catches",
        description:
          "Ireland offers generous cash grants for those who want to live on the beautiful but remote western islands off its wild Atlantic coast.",
        url: "https://www.businessinsider.com/ireland-will-pay-people-92000-to-move-idyllic-remote-islands-2023-6",
        urlToImage:
          "https://i.insider.com/648eed9a51ea980019d6c411?width=1200&format=jpeg",
        publishedAt: "2023-06-18T12:37:39Z",
        content:
          "Rolling waves and cliffs on Inishmore, Aran Islands.Michelle McMahon/ Getty Images\r\n<ul>\n<li>Ireland offers generous cash grants for those who want to live on remote islands off its western coast.</l… [+2233 chars]",
      },
      {
        source: {
          id: null,
          name: "ArchDaily",
        },
        author: "Maria-Cristina Florian",
        title:
          "Beyond 2023 UIA World Congress of Architects: 9 Events to Explore in July in Copenhagen",
        description:
          "This year, the UIA World Congress of Architects gathers professionals from the construction industry to the Danish Capital to discuss and promote more sustainable ways of practicing architecture. This edition of the congress, happening between July 2nd and 6t…",
        url: "https://www.archdaily.com/1003134/beyond-2023-uia-world-congress-of-architects-9-events-to-explore-in-july-in-copenhagen",
        urlToImage:
          "https://images.adsttc.com/media/images/649b/fe83/5921/1858/769a/bdba/large_jpg/beyond-2023-uia-world-congress-of-architects-9-events-to-explore-in-july-in-copenhagen_4.jpg?1687944842",
        publishedAt: "2023-06-28T06:30:00Z",
        content:
          "Lille Langebro Cycle and Pedestrian Bridge / WilkinsonEyre. Image © Rasmus Hjortshøj\r\nThis year, the UIA World Congress of Architects gathers professionals from the construction industry to the Danis… [+5553 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jason Ma",
        title:
          "Boeing rival Airbus nears record order for 500 planes from India's largest airline, report says",
        description:
          "The European aerospace giant is the frontrunner for an order for 500 planes from the A320 narrow-body family, sources told Reuters.",
        url: "https://www.businessinsider.com/airbus-boeing-record-order-500-planes-india-airline-indigo-report-2023-6",
        urlToImage:
          "https://i.insider.com/647cabdca52c4b0019368e29?width=1200&format=jpeg",
        publishedAt: "2023-06-04T16:48:08Z",
        content:
          "If finalized, the 500-plane order from IndiGo would be the largest-ever by volume.Airbus\r\n<ul>\n<li>Airbus is near a deal to sell 500 A320 narrow-body planes to IndiGo, Reuters reported.</li>\n<li>That… [+2017 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Filip De Mott",
        title:
          "Stanley Druckenmiller says Nvidia stock is worth holding for the next few years amid AI bullishness",
        description:
          'Artificial intelligence may be "transformative as the internet," making Nvidia a good stock to hold for the next two to three years, he said.',
        url: "https://markets.businessinsider.com/news/stocks/nvidia-stock-nvda-stanley-druckenmiller-artificial-intelligence-ai-bull-market-2023-6",
        urlToImage:
          "https://i.insider.com/6480ac740821fb0018104b70?width=1200&format=jpeg",
        publishedAt: "2023-06-07T18:06:56Z",
        content:
          "Stanley Druckenmiller, founder of Duquesne Capital Management, speaks at the Sohn Investment Conference in New York, May 8, 2013.REUTERS/Brendan McDermid\r\n<ul>\n<li>Nvidia is worth holding for two to … [+2275 chars]",
      },
      {
        source: {
          id: null,
          name: "Golem.de",
        },
        author: "Golem Karrierewelt",
        title:
          "Golem Karrierewelt: Kostenloses Live-Webinar: Green IT im Unternehmen",
        description:
          "Am Mittwoch, dem 7. Juni, um 16 Uhr auf dem Youtube-Kanal von Golem.de: Der Sustainable-IT-Experte Yannick Hirt diskutiert Aspekte, die bei der Einführung von Green-IT-Initiativen im Unternehmen wichtig sind. (Golem Karrierewelt, GreenIT)",
        url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fgolem-karrierewelt-kostenloses-live-webinar-green-it-im-unternehmen-2306-174603.html&referer=https%3A%2F%2Ft.co%2Fe61f22c855",
        urlToImage: null,
        publishedAt: "2023-06-05T06:00:02Z",
        content:
          "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
      },
      {
        source: {
          id: null,
          name: "HYPEBEAST",
        },
        author: "info@hypebeast.com (Hypebeast)",
        title:
          "Sustainable Stylist Felipe Pelaez on Why E-Waste is Top on His Recycling Radar",
        description:
          "In an age where having the next best electronic device is considered a must, the levels of waste associated with this consumption are simultaneously rising. Today, reducing E-waste is becoming increasingly important as more organizations, communities and acti…",
        url: "https://hypebeast.com/2023/6/braun-e-waste-felipe-pelaez-guide",
        urlToImage:
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Fbraun-e-waste-felipe-pelaez-guide-tw.jpg?w=960&cbr=1&q=90&fit=max",
        publishedAt: "2023-06-30T13:49:31Z",
        content:
          "In an age where having the next best electronic device is considered a must, the levels of waste associated with this consumption are simultaneously rising. Today, reducing E-waste is becoming increa… [+2773 chars]",
      },
      {
        source: {
          id: "the-verge",
          name: "The Verge",
        },
        author: "Jon Porter",
        title:
          "Making sense of the EU’s fight for user-replaceable smartphone batteries",
        description:
          "The EU is passing regulation it hopes will result in user-replaceable smartphone batteries. But there’s a lot more going on behind the scenes.",
        url: "https://www.theverge.com/2023/6/24/23771064/european-union-battery-regulation-ecodesign-user-replacable-batteries",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/JB14Gk5rzRe9yjNKu2u8rkCGckM=/0x0:1653x1102/1200x628/filters:focal(654x625:655x626)/cdn.vox-cdn.com/uploads/chorus_asset/file/24747246/Apple_Right_to_repair_Hero.jpg",
        publishedAt: "2023-06-24T08:00:00Z",
        content:
          "Image: Apple\r\n\n \n\n\n The European Parliament recently voted on regulation that would, among other things, require smartphone manufacturers to make their device’s batteries more easily user-replaceable… [+9725 chars]",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "Energy",
    articles: [
      {
        source: {
          id: "the-verge",
          name: "The Verge",
        },
        author: "Jess Weatherbed",
        title: "GM now has residential energy products to sell alongside EVs",
        description:
          "GM Energy just announced its first batch of energy management products that will be available under its residential business unit, Ultium Home.",
        url: "https://www.theverge.com/2023/6/28/23776690/gm-energy-ultium-home-ev-charging-v2h-stationary-storage",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/v00HW8LxUwiiiNpIVKizSIxYO-Y=/0x0:1920x1080/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/24757504/GM_Energy_Ultium_Home_hero.jpg",
        publishedAt: "2023-06-28T13:00:00Z",
        content:
          "GM now has residential energy products to sell alongside EVs\r\nGM now has residential energy products to sell alongside EVs\r\n / GM Energys Ultium Home products include a bidirectional EV charger to po… [+3642 chars]",
      },
      {
        source: {
          id: "engadget",
          name: "Engadget",
        },
        author: "Sarah Fielding",
        title: "Google's Nest Learning Thermostat is $70 off right now",
        description:
          "If you're always coming home to an overheated house or find your jaw on the floor every time the energy bill arrives, it might be time to consider expanding your smart home. The Google Nest Learning Thermostat third-generation is currently available for $179,…",
        url: "https://www.engadget.com/googles-nest-learning-thermostat-is-70-off-right-now-130024243.html",
        urlToImage:
          "https://s.yimg.com/uu/api/res/1.2/DFYqQ0CAr2F_01OWG3kuIQ--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-11/db29e880-6178-11ed-aafe-ed7a400ae5b9.cf.jpg",
        publishedAt: "2023-06-28T13:00:24Z",
        content:
          "If you're always coming home to an overheated house or find your jaw on the floor every time the energy bill arrives, it might be time to consider expanding your smart home. The Google Nest Learning … [+1183 chars]",
      },
      {
        source: {
          id: "the-verge",
          name: "The Verge",
        },
        author: "Tom Warren",
        title: "How to get free electricity in the UK",
        description:
          "Octopus Energy’s Agile tariff is the best in the UK right now during a cost of living crisis. Octopus passes on cheaper wholesale rates much quicker than the current energy price caps.",
        url: "https://www.theverge.com/23755092/free-electricity-uk-how-to-octopus-energy-agile",
        urlToImage:
          "https://cdn.vox-cdn.com/thumbor/jtLnOP6gCY4-oAjCQ69Jkh4C1wg=/0x0:5123x3415/1200x628/filters:focal(2562x1708:2563x1709)/cdn.vox-cdn.com/uploads/chorus_asset/file/24713637/1240748776.jpg",
        publishedAt: "2023-06-10T09:00:00Z",
        content:
          "Photo by Mike Kemp / In Pictures via Getty Images\r\n\n \n\n\n Octopus Energy is a shining star during a time of high inflation and a cost of living crisis. I know what you’re thinking: what is this ridicu… [+6341 chars]",
      },
      {
        source: {
          id: null,
          name: "Lifehacker.com",
        },
        author: "Amanda Blum",
        title: "Here's How Much Money You Save by Installing a Clothesline",
        description:
          "Clotheslines have recently undergone a renaissance. Once considered gauche, line drying has benefited from country-chic marketing and support from environmentalists. But while it’s not all white sheets softly blowing in the breeze, it really is a pretty easy …",
        url: "https://lifehacker.com/heres-how-much-money-you-save-by-installing-a-clothesli-1850555149",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0ac9209232fc725b1aed9b604b9757fa.jpg",
        publishedAt: "2023-06-20T16:00:00Z",
        content:
          "Clotheslines have recently undergone a renaissance. Once considered gauche, line drying has benefited from country-chic marketing and support from environmentalists. But while its not all white sheet… [+3379 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Angely Mercado",
        title:
          "Texas Power Use Breaks Record as Heat Wave Continues to Roast the South",
        description:
          "Businesses and homes throughout Texas cranked up their air conditioning this week during the ongoing heat dome, pushing the grid into record-breaking energy usage. Read more...",
        url: "https://gizmodo.com/texas-power-use-breaks-record-heat-wave-in-south-1850586086",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d14c590978099e87afd11b890817d434.jpg",
        publishedAt: "2023-06-28T15:55:00Z",
        content:
          "Businesses and homes throughout Texas cranked up their air conditioning this week during the ongoing heat dome, pushing the grid into record-breaking energy usage. \r\nData from the Electric Reliabilit… [+2590 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Energy crisis not over, warns German energy regulator - Reuters",
        description:
          "Energy crisis not over, warns German energy regulator  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2VuZXJneS9lbmVyZ3ktY3Jpc2lzLW5vdC1vdmVyLXdhcm5zLWdlcm1hbi1lbmVyZ3ktcmVndWxhdG9yLTIwMjMtMDYtMDcv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-07T23:09:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Zack Savitsky",
        title: "The Tiny Physics Behind Immense Cosmic Eruptions",
        description:
          "A new theory describes how particle interactions fuel fast magnetic reconnection, the process behind solar flares and other astrophysical jets.",
        url: "https://www.wired.com/story/the-tiny-physics-behind-immense-cosmic-eruptions/",
        urlToImage:
          "https://media.wired.com/photos/648cca438d6da8ab812d8543/191:100/w_1280,c_limit/MagneticReconnectionSim-byNASAsScientificVisualizationStudio_1.mp4",
        publishedAt: "2023-06-18T12:00:00Z",
        content:
          "During fleeting fits, the sun occasionally hurls a colossal amount of energy into space. Called solar flares, these eruptions last for mere minutes, and they can trigger catastrophic blackouts and da… [+3893 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Richard Forbes",
        title: "Inside the First Youth-Led Climate Lawsuit to Go to Trial",
        description:
          "In Held v. Montana, 16 young residents challenged what the state must do to uphold its constitution’s guarantee of a “clean and healthful environment.”",
        url: "https://www.wired.com/story/inside-the-first-youth-led-climate-lawsuit-to-go-to-trial/",
        urlToImage:
          "https://media.wired.com/photos/649ec08ca6c1fece8f4bb3f3/191:100/w_1280,c_limit/heldmontana_science_climatedesk_GettyImages-1258644061.jpg",
        publishedAt: "2023-07-01T12:00:00Z",
        content:
          "I would feel relief and joy, that what were doing matters, said 18-year-old Kian Tanner, that when we speak out, when we create action, we can create positive change in the world.\r\nThe tension betwee… [+2954 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Jillian Ambrose",
        title:
          "Greenhouse gas emissions from global energy industry still rising – report",
        description:
          "Researchers say ‘urgent action’ needed as rise in renewables is eclipsed by increase in world’s total energy consumptionGreenhouse gas emissions from the energy industry continued to rise to new highs last year despite record growth in wind and solar power, a…",
        url: "https://www.theguardian.com/business/2023/jun/26/greenhouse-gas-emissions-from-global-energy-industry-still-rising-report",
        urlToImage:
          "https://i.guim.co.uk/img/media/59a0a64f821dad2b91ce581388e17d68141d7002/0_198_4841_2904/master/4841.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d6aa90ee5d57b2a65b45048a418b4c61",
        publishedAt: "2023-06-25T23:01:49Z",
        content:
          "Greenhouse gas emissions from the energy industry continued to rise to new highs last year despite record growth in wind and solar power, according to a comprehensive review of global energy data.\r\nT… [+3019 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Matt Simon",
        title: "This Hurricane Season Depends on a Showdown in the Atlantic",
        description:
          "The Atlantic Ocean is extremely warm right now—fuel for gnarlier hurricanes. But will a burgeoning El Niño butt in and stop the storms before they start?",
        url: "https://www.wired.com/story/this-hurricane-season-depends-on-a-showdown-in-the-atlantic/",
        urlToImage:
          "https://media.wired.com/photos/649c8628c30f50376ee875b3/191:100/w_1280,c_limit/ocean_science_GettyImages-1300465616-(1).jpg",
        publishedAt: "2023-06-29T12:00:00Z",
        content:
          "Usually by this time of year, sea surface temperaturesas a global averagedrop dramatically. The southern hemisphere has much more water than the northern hemisphere, and its now winter there. Yet thi… [+3112 chars]",
      },
      {
        source: {
          id: "engadget",
          name: "Engadget",
        },
        author: "Igor Bonifacic",
        title:
          "Europe’s Euclid space telescope launches to map the dark universe",
        description:
          "On late Saturday morning, a SpaceX Falcon 9 rocket carrying the European Space Agency’s Euclid spacecraft successfully lifted off Cape Canaveral\r\n, Florida. The near-infrared telescope, named after the ancient Greek mathematician who is widely considered the …",
        url: "https://www.engadget.com/europes-euclid-space-telescope-launches-to-map-the-dark-universe-175331413.html",
        urlToImage:
          "https://s.yimg.com/uu/api/res/1.2/dJMEQVb.BrSwtM.1LFGskA--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/6248cc30-1837-11ee-9d7d-01b6f346bff0.cf.jpg",
        publishedAt: "2023-07-01T17:53:31Z",
        content:
          "On late Saturday morning, a SpaceX Falcon 9 rocket carrying the European Space Agencys Euclid spacecraft successfully lifted off Cape Canaveral\r\n, Florida. The near-infrared telescope, named after th… [+1588 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Toby Helm",
        title:
          "Householders to receive money off bills for going green under Labour plans",
        description:
          "As set out by Ed Miliband, GB Energy’s renewable energy projects will create jobs, tackle energy bills and directly benefit local peoplePeople across the UK will receive cost of living discounts – such as reductions on their council tax – if their cities, tow…",
        url: "https://www.theguardian.com/environment/2023/jun/17/householders-to-receive-money-off-bills-for-going-green-under-labour-plans",
        urlToImage:
          "https://i.guim.co.uk/img/media/c410f72a358404ca2defe14679128a867407a100/0_3_7485_4492/master/7485.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=edb3ad3dfa77e4865c6acfb648eb0fb0",
        publishedAt: "2023-06-17T17:00:19Z",
        content:
          "People across the UK will receive cost of living discounts such as reductions on their council tax if their cities, towns and villages sign up to new clean energy projects, under ambitious plans to b… [+3723 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Lucas Ropek",
        title:
          "White House Knew of Ukrainian Plot to Blow Up Nord Stream Pipeline Months in Advance: Report",
        description:
          "Three months before the Nord Stream pipeline exploded in what was almost certainly a brazen act of international sabotage, the Biden administration was briefed on a plot by the Ukrainian military to target the energy project for destruction, according to a ne…",
        url: "https://gizmodo.com/discord-leaks-ukraine-nord-stream-pipeline-plot-biden-1850510368",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2ea36d14a4fbd99721f9dbb60447d2a8.jpg",
        publishedAt: "2023-06-06T22:10:00Z",
        content:
          "Three months before the Nord Stream pipeline exploded in what was almost certainly a brazen act of international sabotage, the Biden administration was briefed on a plot by the Ukrainian military to … [+7262 chars]",
      },
      {
        source: {
          id: null,
          name: "Gizmodo.com",
        },
        author: "Gale Sinatra and Barbara K. Hofer, The Conversation",
        title: "How ChatGPT and Generative AI Could Foster Science Denial",
        description:
          "Until very recently, if you wanted to know more about a controversial scientific topic – stem cell research, the safety of nuclear energy, climate change – you probably did a Google search. Presented with multiple sources, you chose what to read, selecting wh…",
        url: "https://gizmodo.com/chatgpt-generative-ai-openai-science-denial-1850516570",
        urlToImage:
          "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/4ce58de0c66d1361a5b48a54d1b36e97.jpg",
        publishedAt: "2023-06-11T13:00:00Z",
        content:
          "Until very recently, if you wanted to know more about a controversial scientific topic stem cell research, the safety of nuclear energy, climate change you probably did a Google search. Presented wit… [+8042 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title: "Serbia to launch first renewable energy auction - Reuters",
        description: "Serbia to launch first renewable energy auction  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2VuZXJneS9zZXJiaWEtbGF1bmNoLWZpcnN0LXJlbmV3YWJsZS1lbmVyZ3ktYXVjdGlvbi0yMDIzLTA2LTE0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-14T10:30:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Column: Key differences in government spending on the energy ... - Reuters",
        description:
          "Column: Key differences in government spending on the energy ...  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY29tbW9kaXRpZXMva2V5LWRpZmZlcmVuY2VzLWdvdmVybm1lbnQtc3BlbmRpbmctZW5lcmd5LXRyYW5zaXRpb24tMjAyMy0wNi0xNS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-15T08:19:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title: "Egypt's IOU to Capricorn Energy grows to $145 mln - Reuters",
        description:
          "Egypt's IOU to Capricorn Energy grows to $145 mln  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2VuZXJneS9lZ3lwdHMtaW91LWNhcHJpY29ybi1lbmVyZ3ktZ3Jvd3MtMTQ1LW1sbi0yMDIzLTA2LTI2L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-26T09:42:11Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Siemens Energy: no critical data was compromised after MOVEit ... - Reuters",
        description:
          "Siemens Energy: no critical data was compromised after MOVEit ...  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMid2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvc2llbWVucy1lbmVyZ3ktbm8tY3JpdGljYWwtZGF0YS13YXMtY29tcHJvbWlzZWQtYWZ0ZXItbW92ZWl0LWRhdGEtYnJlYWNoLTIwMjMtMDYtMjcv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-27T14:24:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "London stocks rise at open on energy, mining boost - Reuters.com",
        description:
          "London stocks rise at open on energy, mining boost  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZXVyb3BlL2xvbmRvbi1zdG9ja3MtcmlzZS1vcGVuLWVuZXJneS1taW5pbmctYm9vc3QtMjAyMy0wNi0yNy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-27T07:16:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title: "X-energy lowers SPAC deal value to $1.8 billion - Reuters.com",
        description:
          "X-energy lowers SPAC deal value to $1.8 billion  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvZGVhbHMveC1lbmVyZ3ktbG93ZXJzLXNwYWMtZGVhbC12YWx1ZS0xOC1iaWxsaW9uLTIwMjMtMDYtMTIv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-12T11:33:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Australia's AGL, Senex Energy sign big gas supply deal - Reuters",
        description:
          "Australia's AGL, Senex Energy sign big gas supply deal  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiaGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2VuZXJneS9hdXN0cmFsaWFzLWFnbC1zZW5leC1lbmVyZ3ktc2lnbi1iaWctZ2FzLXN1cHBseS1kZWFsLTIwMjMtMDYtMTYv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-16T04:47:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Russia can meet domestic gasoline demand, energy minister says - Reuters",
        description:
          "Russia can meet domestic gasoline demand, energy minister says  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2VuZXJneS9ydXNzaWEtY2FuLW1lZXQtZG9tZXN0aWMtZ2Fzb2xpbmUtZGVtYW5kLWVuZXJneS1taW5pc3Rlci1zYXlzLTIwMjMtMDYtMTYv0gEA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-16T11:16:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Investment in energy transition too focused on few technologies ... - Reuters",
        description:
          "Investment in energy transition too focused on few technologies ...  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMic2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2VuZXJneS9pbnZlc3RtZW50LWVuZXJneS10cmFuc2l0aW9uLXRvby1mb2N1c2VkLWZldy10ZWNobm9sb2dpZXMtaXJlbmEtMjAyMy0wNi0yNy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-27T17:07:13Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Siemens Energy CEO: Setback from turbine troubles more severe ... - Reuters",
        description:
          "Siemens Energy CEO: Setback from turbine troubles more severe ...  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMigQFodHRwczovL3d3dy5yZXV0ZXJzLmNvbS9idXNpbmVzcy9lbmVyZ3kvc2llbWVucy1lbmVyZ3ktY2VvLXNldGJhY2stdHVyYmluZS10cm91Ymxlcy1tb3JlLXNldmVyZS10aGFuLXRob3VnaHQtcG9zc2libGUtMjAyMy0wNi0yMy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-23T06:02:41Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "NATO's opportunity, a green energy backlash and France's streets - Reuters",
        description:
          "NATO's opportunity, a green energy backlash and France's streets  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3BvZGNhc3RzL25hdG9zLW9wcG9ydHVuaXR5LWdyZWVuLWVuZXJneS1iYWNrbGFzaC1mcmFuY2VzLXN0cmVldHMtMjAyMy0wNy0wMy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-07-03T10:06:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
    ],
  },
  {
    pageID: nanoid(),
    page: "Environment",
    articles: [
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Richard Forbes",
        title: "Inside the First Youth-Led Climate Lawsuit to Go to Trial",
        description:
          "In Held v. Montana, 16 young residents challenged what the state must do to uphold its constitution’s guarantee of a “clean and healthful environment.”",
        url: "https://www.wired.com/story/inside-the-first-youth-led-climate-lawsuit-to-go-to-trial/",
        urlToImage:
          "https://media.wired.com/photos/649ec08ca6c1fece8f4bb3f3/191:100/w_1280,c_limit/heldmontana_science_climatedesk_GettyImages-1258644061.jpg",
        publishedAt: "2023-07-01T12:00:00Z",
        content:
          "I would feel relief and joy, that what were doing matters, said 18-year-old Kian Tanner, that when we speak out, when we create action, we can create positive change in the world.\r\nThe tension betwee… [+2954 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "",
        title: "50th World Environment Day – in pictures",
        description:
          "Images from around the world taken on World Environment Day, an annual global event celebrated on 5 June to raise awareness, mobilise action and promote environmental sustainability Continue reading...",
        url: "https://www.theguardian.com/environment/gallery/2023/jun/06/50th-world-environment-day-in-pictures",
        urlToImage:
          "https://i.guim.co.uk/img/media/90608b4a78568ce4cf414519c75a993569599660/0_275_8256_4954/master/8256.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1884794cc3afd9c03622fca4508d34b4",
        publishedAt: "2023-06-06T07:17:37Z",
        content:
          "Images from around the world taken on World Environment Day, an annual global event celebrated on 5 June to raise awareness, mobilise action and promote environmental sustainability",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Environment campaigners ask Norway court to halt three oil ... - Reuters",
        description:
          "Environment campaigners ask Norway court to halt three oil ...  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2Vudmlyb25tZW50L2Vudmlyb25tZW50LWNhbXBhaWduZXJzLWFzay1jb3VydC1oYWx0LTMtbm9yd2VnaWFuLW9pbC1kZXZlbG9wbWVudHMtMjAyMy0wNi0yOS_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-29T05:02:14Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "London's expanding clean air zone sparks economy-vs-environment ... - Reuters",
        description:
          "London's expanding clean air zone sparks economy-vs-environment ...  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VrL2xvbmRvbnMtZXhwYW5kaW5nLWNsZWFuLWFpci16b25lLXNwYXJrcy1lY29ub215LXZzLWVudmlyb25tZW50LXJvdy0yMDIzLTA3LTAzL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-07-03T06:06:07Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Italy could abandon coal by 2024, environment minister says - Reuters",
        description:
          "Italy could abandon coal by 2024, environment minister says  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS9pdGFseS1jb3VsZC1hYmFuZG9uLWNvYWwtYnktMjAyNC1lbnZpcm9ubWVudC1taW5pc3Rlci1zYXlzLTIwMjMtMDYtMDUv0gEA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-05T12:37:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Viaplay names new CEO, cuts outlook as business environment ... - Reuters.com",
        description:
          "Viaplay names new CEO, cuts outlook as business environment ...  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL21lZGlhLXRlbGVjb20vdmlhcGxheS1uYW1lcy1uZXctY2VvLWN1dHMtb3V0bG9vay1idXNpbmVzcy1lbnZpcm9ubWVudC1kZXRlcmlvcmF0ZXMtMjAyMy0wNi0wNS_SAQA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-05T03:32:28Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "PA Media",
        title:
          "Zac Goldsmith resigns accusing government of ‘apathy’ over environment",
        description:
          "Environment minister says Rishi Sunak is ‘uninterested’ and that has caused ‘paralysis’ through WhitehallThe UK environment minister, Zac Goldsmith, has announced his resignation, accusing the government of “apathy” over environmental issues.Lord Goldsmith, w…",
        url: "https://www.theguardian.com/politics/2023/jun/30/zac-goldsmith-resigns-accusing-government-of-apathy-over-environment",
        urlToImage:
          "https://i.guim.co.uk/img/media/b6cebde604526798614aa54d71a159ab571aff21/663_100_4264_2560/master/4264.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=39f89829c4cdde782bbfd1f5dbe1b464",
        publishedAt: "2023-06-30T08:23:15Z",
        content:
          "The UK environment minister, Zac Goldsmith, has announced his resignation, accusing the government of apathy over environmental issues.\r\nLord Goldsmith, who was censured by the privileges committee e… [+2057 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Special air quality statement in effect: Environment Canada - SooToday",
        description:
          "<ol><li>Special air quality statement in effect: Environment Canada  SooToday\r\n</li><li>Sudbury air quality among the worst on Earth today  Sudbury.com\r\n</li><li>Haze blankets Belleville  Quinte News\r\n</li><li>Ottawa smoke: Poor air quality forecast for Sunda…",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZmh0dHBzOi8vd3d3LnNvb3RvZGF5LmNvbS9sb2NhbC1uZXdzL3NwZWNpYWwtYWlyLXF1YWxpdHktc3RhdGVtZW50LWluLWVmZmVjdC1lbnZpcm9ubWVudC1jYW5hZGEtNzE5NDQ3MdIBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-26T11:21:57Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Smog warning for Montreal area: Environment Canada - CTV News Montreal",
        description:
          "<ol><li>Smog warning for Montreal area: Environment Canada  CTV News Montreal\r\n</li><li>Global National: June 28, 2023 | Wildfire smoke sparks air quality alerts for millions in Canada, US  Global News\r\n</li><li>Smelling plastic? Millions are in the path of t…",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiVWh0dHBzOi8vbW9udHJlYWwuY3R2bmV3cy5jYS93aWxkZmlyZS1zbW9nLXdhcm5pbmctaXNzdWVkLWZvci1tb250cmVhbC1hZ2Fpbi0xLjY0NjAxNTHSAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-28T20:13:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "UK environment minister quits with stinging criticism of PM Sunak - Reuters UK",
        description:
          "UK environment minister quits with stinging criticism of PM Sunak  Reuters UK",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL3VrL3VrLWVudmlyb25tZW50LW1pbmlzdGVyLXF1aXRzLXdpdGgtc3RpbmdpbmctY3JpdGljaXNtLXBtLXN1bmFrLTIwMjMtMDYtMzAv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-30T08:20:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "UN ship agency chief urges decisive action at environment talks - Reuters.com",
        description:
          "UN ship agency chief urges decisive action at environment talks  Reuters.com",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMidWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2J1c2luZXNzL2Vudmlyb25tZW50L3VuLXNoaXAtYWdlbmN5LWNoaWVmLXVyZ2VzLWRlY2lzaXZlLWFjdGlvbi1lbnZpcm9ubWVudC10YWxrcy0yMDIzLTA2LTI2L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-26T14:41:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Oil spill in Russia's north threatens 'major damage' to environment - Reuters",
        description:
          "Oil spill in Russia's north threatens 'major damage' to environment  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL2V1cm9wZS9vaWwtc3BpbGwtcnVzc2lhcy1ub3J0aC10aHJlYXRlbnMtbWFqb3ItZGFtYWdlLWVudmlyb25tZW50LTIwMjMtMDctMDMv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-07-03T12:00:07Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: "google-news",
          name: "Google News",
        },
        author: null,
        title:
          "Comment: On World Environment Day, it's time for brands to cut the ... - Reuters",
        description:
          "Comment: On World Environment Day, it's time for brands to cut the ...  Reuters",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMijwFodHRwczovL3d3dy5yZXV0ZXJzLmNvbS9zdXN0YWluYWJpbGl0eS9jbGltYXRlLWVuZXJneS9jb21tZW50LXdvcmxkLWVudmlyb25tZW50LWRheS1pdHMtdGltZS1icmFuZHMtY3V0LWdyZWVud2FzaC1nZXQtc2VyaW91cy1hYm91dC0yMDIzLTA2LTA1L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        urlToImage: null,
        publishedAt: "2023-06-05T11:32:00Z",
        content:
          "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Haroon Siddique Legal affairs correspondent",
        title:
          "High costs deterring UK legal challenges to protect environment, NGOs say",
        description:
          "Report by RSPB, ELF and Friends of the Earth say even cases with good prospects of success are being abandonedProhibitively high costs are pricing individuals and community groups out of bringing legal challenges to protect the environment, major NGOs say.A j…",
        url: "https://www.theguardian.com/environment/2023/jun/28/high-costs-deterring-uk-legal-challenges-to-protect-environment-ngos-say",
        urlToImage:
          "https://i.guim.co.uk/img/media/75da8d6b7c7d1eccdf5052e843b31cad1c25d51e/0_267_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=3096a746ec325ed5663d63332203a639",
        publishedAt: "2023-06-27T23:01:48Z",
        content:
          "Prohibitively high costs are pricing individuals and community groups out of bringing legal challenges to protect the environment, major NGOs say.\r\nA joint report by the RSPB, the Environmental Law F… [+8335 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Observer editorial",
        title:
          "The Observer view on Rishi’s Sunak’s lack of commitment to the environment | Observer editorial",
        description:
          "For the sake of the planet and his party, the prime minister must not try to draw a line dividing the Conservatives from Labour on green issuesWhile conservative parties in the US, Australia and Canada have allowed opponents of action on climate change to hel…",
        url: "https://www.theguardian.com/commentisfree/2023/jul/01/observer-view-on-rishi-sunak-lack-of-commitment-to-environment",
        urlToImage:
          "https://i.guim.co.uk/img/media/bb074f3f55dd2d408c5962e53453380d9e339da8/0_358_5472_3283/master/5472.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=e9b948a023a3c42c65511a3aa38d617b",
        publishedAt: "2023-07-01T18:02:19Z",
        content:
          "While conservative parties in the US, Australia and Canada have allowed opponents of action on climate change to help define their politics, thankfully in Britain successive Tory prime ministers have… [+5532 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "Leyland Cecco in Toronto",
        title:
          "Activists take Canada’s environment minister to court in fight to save northern spotted owl",
        description:
          "Advocacy group says continued destruction of critical habitat leaves it no choice but to take legal action against Steven GuilbeaultEnvironmental groups in Canada are taking legal action against the country’s environment minister, arguing his delay in protect…",
        url: "https://www.theguardian.com/environment/2023/jun/08/activists-take-canadas-environment-minister-to-court-in-fight-to-save-northern-spotted-owl-aoe",
        urlToImage:
          "https://i.guim.co.uk/img/media/a31741cd687fc2d387f10c4dbadbff18fe3b788c/0_163_5100_3060/master/5100.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=78158a94c8e16056fea0df77351a656e",
        publishedAt: "2023-06-08T15:15:44Z",
        content:
          "Environmental groups in Canada are taking legal action against the countrys environment minister, arguing his delay in protecting old growth forest is harming the critically endangered northern spott… [+4118 chars]",
      },
      {
        source: {
          id: null,
          name: "MacRumors",
        },
        author: "Mitchel Broussard",
        title:
          "AirPods Gaining 'Adaptive Audio' Feature That Dynamically Adjusts to Your Environment",
        description:
          "Apple today announced a new Adaptive Audio feature coming to AirPods, which combines transparency and noise canceling to dynamically adjust the audio in your AirPods.\n\n\n\n\n\nThis way, loud or distracting noises surrounding you will be automatically reduced, whi…",
        url: "https://www.macrumors.com/2023/06/05/airpods-gaining-adaptive-audio/",
        urlToImage:
          "https://images.macrumors.com/t/lgJtElxhV1OYmNnEe54qQ7cnG2M=/1600x/article-new/2023/06/f-c48f85c666086c80ac648bbe43ed71a680e8d64d.jpg",
        publishedAt: "2023-06-05T18:07:27Z",
        content:
          "Apple today announced a new Adaptive Audio feature coming to AirPods, which combines transparency and noise canceling to dynamically adjust the audio in your AirPods.\r\nThis way, loud or distracting n… [+440 chars]",
      },
      {
        source: {
          id: "engadget",
          name: "Engadget",
        },
        author: "Will Shanklin",
        title: "Roguelike ‘33 Immortals’ has 33-player co-op",
        description:
          "Indie studio Thunder Lotus announced a game today that invites you to “Face the Wrath of God.” 33 Immortals is the Spiritfarer developer’s new co-op action / roguelike that supports up to 33 players.“Pick-up and raid, cooperate to survive hordes of monsters a…",
        url: "https://www.engadget.com/roguelike-33-immortals-has-33-player-co-op-173652402.html",
        urlToImage:
          "https://s.yimg.com/uu/api/res/1.2/6Ig4b_822zSG3IsxQB1O8Q--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-06/b440e4b0-087d-11ee-addf-1ef0c3a7f0b5.cf.jpg",
        publishedAt: "2023-06-11T17:36:52Z",
        content:
          "Indie studio Thunder Lotus announced a game today that invites you to Face the Wrath of God. 33 Immortals is the Spiritfarer developers new co-op action / roguelike that supports up to 33 players.\r\nP… [+652 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Jacob Shamsian",
        title:
          "Fox News agrees to pay $12 million to settle ex-producer's lawsuit alleging 'sexist' work environment",
        description:
          "Abby Grossberg alleged that she experienced a sexist workplace environment while working for Tucker Carlson and Maria Bartiromo.",
        url: "https://www.businessinsider.com/fox-news-settles-abby-grossberg-hostile-workplace-lawsuit-2023-6",
        urlToImage:
          "https://i.insider.com/63f34f537b15f100194d2885?width=1200&format=jpeg",
        publishedAt: "2023-06-30T18:49:49Z",
        content:
          "Former Fox News host Tucker Carlson.Chip Somodevilla/Getty Images\r\nFox News has agreed to pay $12 million to settle a hostile workplace lawsuit from Abby Grossberg, a former producer for host Maria B… [+1544 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author: "George Monbiot",
        title:
          "When it comes to rich countries taking the environment seriously, I say: vive la France | George Monbiot",
        description:
          "Emmanuel Macron’s government is at least doing the bare minimum to avert the planetary crisis – and putting the UK to shameWhile we remain transfixed by a handful of needy egotists in Westminster and the crises they manufacture, across the Channel a revolutio…",
        url: "https://www.theguardian.com/commentisfree/2023/jun/24/environment-france-emmanuel-macron-crisis-uk",
        urlToImage:
          "https://i.guim.co.uk/img/media/29d69f20018a7943f9052f92c61d128b4bf1e8ad/0_108_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=09a8e51775c50d7431384df2ed3a0a51",
        publishedAt: "2023-06-24T07:00:02Z",
        content:
          "While we remain transfixed by a handful of needy egotists in Westminster and the crises they manufacture, across the Channel a revolution is happening. Its a quiet, sober, thoughtful revolution, but … [+6741 chars]",
      },
      {
        source: {
          id: null,
          name: "NPR",
        },
        author: "The Associated Press",
        title:
          "3M reaches $10.3 billion settlement over contamination of water systems",
        description:
          'The deal would compensate water providers for pollution with substances known collectively as PFAS, described as "forever chemicals" because they don\'t degrade naturally in the environment.',
        url: "https://www.npr.org/2023/06/22/1183922303/3m-reaches-10-3-billion-settlement-over-contamination-of-water-systems",
        urlToImage:
          "https://media.npr.org/assets/img/2023/06/22/ap23153690482424_wide-c71493b6dae5b69969ba6a80a2836b3193968b44-s1400-c100.jpg",
        publishedAt: "2023-06-23T03:04:36Z",
        content:
          "Eva Stebel, water researcher, pours a water sample into a smaller glass container for experimentation as part of drinking water and PFAS research at the U.S. Environmental Protection Agency Center Fo… [+3973 chars]",
      },
      {
        source: {
          id: "business-insider",
          name: "Business Insider",
        },
        author: "Tim Paradis",
        title:
          "16 young people are suing the state of Montana over the climate crisis — one resident says the wildfire smoke makes him want to lie in bed and cry",
        description:
          "In Montana, 16 young people are suing the state saying its support of the fossil-fuel industry is depriving them of the right to a clean environment.",
        url: "https://www.businessinsider.com/young-montana-residents-suing-state-over-fossil-fuels-climate-change-2023-6",
        urlToImage:
          "https://i.insider.com/648b222ab6429600188241f5?width=1200&format=jpeg",
        publishedAt: "2023-06-15T17:49:54Z",
        content:
          "In Montana, young plaintiffs arrived Monday at a Helena courthouse for a trial in which they're suing the state for violating their right to a clean environment by supporting fossil-fuel energy polic… [+4077 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Emily Mullin",
        title: "Scientists Are Gene-Editing Flies to Fight Crop Damage",
        description:
          "The spotted-wing drosophila is a threat to fruit growers across the US and Europe. Crispr could thwart the pest’s numbers.",
        url: "https://www.wired.com/story/gene-editing-flies-to-fight-crop-damage/",
        urlToImage:
          "https://media.wired.com/photos/649afc33c30f50376ee8759b/191:100/w_1280,c_limit/fruitfly_science_GettyImages-1310614406.jpg",
        publishedAt: "2023-06-28T12:00:00Z",
        content:
          "In 2008, a fruit fly known as the spotted-wing drosophila made its way from Southeast Asia to the continental US, likely hitching a ride on fruit shipments. First detected in California raspberry fie… [+3164 chars]",
      },
      {
        source: {
          id: "wired",
          name: "Wired",
        },
        author: "Charles Swanton",
        title: "Air Pollution Is Deadlier Than You Think",
        description:
          "Poor air quality doesn’t just cause lung cancer. It may also be responsible for other cancers, strokes, diabetes, and more.",
        url: "https://www.wired.com/story/charles-swanton-air-pollution-disease-deaths-cancer/",
        urlToImage:
          "https://media.wired.com/photos/64931d119ec11a2433532b4e/191:100/w_1280,c_limit/05-Wired_NHS_Spot.jpg",
        publishedAt: "2023-06-29T13:40:17Z",
        content:
          "Air pollution is responsible for 8 million deaths a year globally, which is as many as tobacco. And air pollution isn't just causing lung cancer, it may cause other cancers tooincluding neck cancer a… [+3208 chars]",
      },
      {
        source: {
          id: null,
          name: "The Guardian",
        },
        author:
          "Presented by Michael Safi with Damian Carrington; produced by Eli Block, Natalie Ktena and Rudi Zygadlo; executive producer Phil Maynard",
        title:
          "The oil company CEO running the next UN climate change summit - podcast",
        description:
          "The UN’s annual climate conference is being dogged by scandal months before it even begins. Environment editor Damian Carrington reportsWhen the Guardian environment editor Damian Carrington received a reply to an email he had sent to the organisers of this y…",
        url: "https://www.theguardian.com/environment/audio/2023/jun/28/cop28-the-controversies-hitting-uae-hosts-of-climate-summit-podcast",
        urlToImage:
          "https://i.guim.co.uk/img/media/8fb9ff646eb610a77b8c6995fa1e30348a13da13/0_0_5348_3208/master/5348.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=41b80e7a3d8dc38ef754cdafa3bac256",
        publishedAt: "2023-06-28T02:00:52Z",
        content:
          "When the Guardian environment editor Damian Carrington received a reply to an email he had sent to the organisers of this years UN climate change conference, he noticed something unusual: it was stam… [+1115 chars]",
      },
    ],
  },
];

export const home = news.map(({ articles }) => articles.slice(0, 6)).flat();



export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook/>
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter/>
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaInstagram/>
  },
  
];
