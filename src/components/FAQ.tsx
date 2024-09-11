export default function FAQ() {
  const faq = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon is an event where people come together to collaborate & work on tech projects. A panel of judges will pick the winning teams & hand out prizes. However, the point of the hackathon itself is to work together, learn new things & have an amazing time doing so!",
    },
    {
      question: "How much does it cost?",
      answer:
        "Absolutely nothing! yvrHacks is a free event for all high school students in British Columbia. We believe that everyone should have the opportunity to learn and create, regardless of their financial situation.",
    },
    {
      question: "Who can attend?",
      answer:
        "yvrHacks is open to all students in British Columbia. We welcome students of all skill levels, from beginners to experts. If you're passionate about technology and want to learn something new, we'd love to have you join us!",
    },
    {
      question: "What kind of projects can I work on?",
      answer:
        "Literally anything related to coding and computer science! Electronics, websites, apps, games, bots, mockups, and more! We want you to be creative and work on something you're passionate about :)",
    },
    {
      question: "What if I don't know how to code?",
      answer:
        "No worries! Hackathons are a great place to learn new skills, and there will be workshops and mentors to help you out. yvrHacks is beginner-friendly, and we also have prizes for the best beginner hacks, so don't be afraid to try something new!",
    },
    {
      question: "What should I bring?",
      answer:
        "You should bring a laptop, charger, and any other tech you need to work on your project. If you don't have access to a laptop, please reach out to us on Discord and we can figure something out :) We will also provide free lunch and snacks!",
    },
    {
      question: "Is there a theme for the hackathon?",
      answer:
        "Kinda! You're free to work on whatever you want, and you will be eligible for most prizes. However, we do have a specific Theme Prize for projects that are related to the theme of \"Improving Students' Lives\".",
    },
    {
      question: "How long is the hackathon?",
      answer:
        "yvrHacks will run from 10:00 AM to 6:00 PM on Sunday, September 29th! We'll have workshops, games, and hacking time throughout the day :) We also provide free lunch and snacks for all participants!",
    },
    {
      question: "Can I participate in a team?",
      answer:
        "Yes! We allow teams of up to four members, but you can totally work alone if you choose to! We encourage you to sign up with your friends and join yvrHacks together!",
    },
    {
      question: "What if I have more questions?",
      answer:
        "Make sure you join our Discord server to hear latest announcements! You can reach out on Discord or Instagram if you have any more questions :)",
    },
  ];
  return (
    <div className="flex w-full flex-col items-start gap-12 px-6 py-24 md:w-[1200px] md:gap-40 md:px-0">
      <div className="flex w-full flex-col gap-8 md:gap-14">
        <div className="flex flex-col items-center gap-2">
          <h3
            id="faq"
            className="text-center text-4xl font-bold text-white md:text-7xl"
          >
            Frequently Asked Questions
          </h3>
          <h6 className="text-center text-lg font-light text-white md:text-3xl">
            Have a question? Check here first! Otherwise, reach out on{" "}
            <a
              target="_blank"
              className="underline"
              href="https://discord.bcydc.ca/"
            >
              Discord
            </a>
            !
          </h6>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          {faq.map((item, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded">
              <h4 className="bg-sky-900 px-6 py-3 text-xl font-bold text-white md:text-2xl">
                {item.question}
              </h4>
              <p className="bg-black bg-opacity-10 px-6 py-3 text-white md:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
