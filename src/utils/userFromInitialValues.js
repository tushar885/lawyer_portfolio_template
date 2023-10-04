export default (user) => {
  if (user === null) {
    return {
      navbar_title: "Attorney At Law",
      name: "Dummy Name",
      header_phase:
        "Providing Trusted Legal Counsel and Advocacy, Our Dedicated Team Strives to Protect Your Interests, Champion Your Cause, and Secure Fair Outcomes in the Complex World of Law.",
      mobileNumber: "9660623448",
      totalCases: 0,
      casesWon: 0,
      totalClients: 0,
      yearOfExperience: 0,
      aboutUs_description:
        "Attorney John Leader focuses on wrongful death and personal injury law. He has proven results, recovering millions of dollars for his clients over the years. He has significant experience in wrongful death, car accidents, truck accidents, personal injury, and defective roadway litigation. John and his team understand the uncertainties and challenges you may be facing after an accident or loss. Our legal professionals’ team helps clients receive justice and compensation for injuries and losses from negligence or other wrongdoing.",
      services: [
        {
          title: "Administrative Law",
          description:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled",
        },
        {
          title: "Business Law",
          description:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled",
        },
        {
          title: "Criminal Defense",
          description:
            "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled",
        },
      ],
      affiliate: "Bar Council Of India",
      testmonials: [
        {
          reviewerName: "Don Fountain",
          reviewPara:
            "The most serious and complex cases require the most talented, creative and hard-working attorneys.",
        },
        {
          reviewerName: "Joe Fried",
          reviewPara:
            "I have watched Drew season as a lawyer over the course of his career. He has always been smart.",
        },
        {
          reviewerName: " Rob Hammers",
          reviewPara:
            "Max consistently demonstrates tremendous poise and judgment on the highest stakes cases. He is an extremely talented and gifted advocate.",
        },
      ],
      news: [
        {
          title: "Bar Exam Passage Rates Soar Thanks To Law School’s Closure",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et accusamus et iusto odio dignissimos ducimu.",
        },
        {
          title:
            "Law School Advice For 1Ls From Amal Clooney, Chief Justice Roberts",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et accusamus et iusto odio dignissimos ducimu.",
        },
        {
          title: "How To Use A Law School In Fiction. See some real examples",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. At vero eos et accusamus et iusto odio dignissimos ducimu.",
        },
      ],
      quotes: [
        "We work on contigency, we don't owe anything until we win.",
        "You're in Good Hands.",
      ],
      instagram: "dummyLink",
      twitter: "dummyLink",
      linkedIn: "dummyLink",
      email: "dummyLink",
      youtube: "dummyLink",
      facebook: "dummyLink",
    };
  } else {
    return {
      navbar_title: user?.navbar_title,
      name: user?.name,
      header_phase: user?.header_phase,
      mobileNumber: user?.mobileNumber,
      totalCases: user?.totalCases,
      casesWon: user?.casesWon,
      totalClients: user?.totalClients,
      yearOfExperience: user?.yearOfExperience,
      aboutUs_description: user?.aboutUs_description,
      services: [
        {
          title: user?.services[0]?.title,
          description: user?.services[0]?.description,
        },
        {
          title: user?.services[1]?.title,
          description: user?.services[1]?.description,
        },
        {
          title: user?.services[2]?.title,
          description: user?.services[2]?.description,
        },
      ],
      affiliate: user?.affiliate,
      testmonials: [
        {
          reviewerName: user?.testmonials[0]?.reviewerName,
          reviewPara: user?.testmonials[0]?.reviewPara,
        },
        {
          reviewerName: user?.testmonials[1]?.reviewerName,
          reviewPara: user?.testmonials[1]?.reviewPara,
        },
        {
          reviewerName: user?.testmonials[2]?.reviewerName,
          reviewPara: user?.testmonials[2]?.reviewPara,
        },
      ],
      news: [
        {
          title: user?.news[0]?.title,
          description: user?.news[0]?.description,
        },
        {
          title: user?.news[1]?.title,
          description: user?.news[1]?.description,
        },
        {
          title: user?.news[2]?.title,
          description: user?.news[2]?.description,
        },
      ],
      quotes: [...user?.quotes],
      instagram: user?.instagram,
      twitter: user?.twitter,
      linkedIn: user?.linkedIn,
      email: user?.email,
      youtube: user?.youtube,
      facebook: user?.facebook,
    };
  }
};
