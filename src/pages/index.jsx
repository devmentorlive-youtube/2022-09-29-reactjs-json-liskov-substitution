const employer = {
  name: "Mark Tellez",
  email: "mark@dontspam.me",
};

const job = {
  title: "We need a super React dev now!",
  employer,
  applicants: ["monkey-boy@bananas.me"],
};

const applicant = {
  name: "Josue Mtz",
  email: "monkey-boy@bananas.me",
};

const thread = {
  job,
  applicant,
  author: employer,
  text: "Hi, we would love to talk to you!",
};

const messages = [
  thread,
  {
    thread,
    author: applicant,
    text: "I thinks thats great, here is my number xxx-xxx-xxxx",
  },
  {
    thread,
    author: employer,
    text: "We will be calling you soon, thanks.",
  },
];

export default function Homepage() {
  return (
    <div className="mt-16 container mx-auto flex gap-4">
      <Messages {...{ messages }} />
    </div>
  );
}

function Messages({ messages }) {
  return (
    <div>
      {messages.map((message, i) => {
        console.dir({ message });
        return message.thread ? (
          <Message key={i} {...{ ...message }} />
        ) : (
          <Thread key={i} {...{ ...message }} />
        );
      })}
    </div>
  );
}

function Message({ author, text, thread }) {
  return (
    <div>
      <div>{author?.name}</div>
      <div>{text}</div>
    </div>
  );
}

function Thread({ author, text, job, applicant }) {
  return (
    <div>
      {JSON.stringify(job)}
      {JSON.stringify(applicant)}
      <Message {...{ author, text }} />
    </div>
  );
}
